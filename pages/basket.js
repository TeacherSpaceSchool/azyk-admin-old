import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/basket/basket'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { getBasket, setBasket, deleteBasket, getCountBasket } from '../src/gql/basket';
import { getClient } from '../src/gql/client';
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import Sign from '../components/dialog/Sign'
import Confirmation from '../components/dialog/Confirmation'
import { urlMain } from '../redux/constants/other'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getBonusesClient } from '../src/gql/bonusclient'
import TextField from '@material-ui/core/TextField';
import {getClients} from '../src/gql/client'
import { getClientGqlSsr } from '../src/getClientGQL'

const Basket = React.memo((props) => {
    const { authenticated, profile } = props.user;
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { data } = props;
    let [list, setList] = useState(data.baskets);
    let [bonus, setBonus] = useState({});
    let [organization, setOrganization] = useState({_id: '', name: ''});
    let handleOrganization =  (event) => {
        setOrganization(organizations[organizations.findIndex(element => element._id===event.target.value)])
    };
    let [organizations, setOrganizations] = useState([]);
    let [client, setClient] = useState({_id: '', name: ''});
    let handleClient =  (event) => {
        setClient(clients[clients.findIndex(element => element._id===event.target.value)])
    };
    let [clients, setClients] = useState([]);
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = (idx)=>{
        list[idx].count+=1
        setBasketChange(idx, list[idx].count)
        setList([...list])
    }
    let decrement = (idx)=>{
        if(list[idx].count>1) {
            list[idx].count -= 1
            setBasketChange(idx, list[idx].count)
            setList([...list])
        }
    }
    let setBasketChange= (idx, count)=>{
        if(authenticated)
            setBasket({_id: list[idx]._id, count: count})
        else {
            let list = JSON.parse(localStorage.basket);
            list[idx].count = count;
            localStorage.basket = JSON.stringify(list);
        }
    }
    let removeBasketChange= async (idx)=>{
        const action = async() => {
            if(authenticated) {
                setList((await deleteBasket([list[idx]._id])).baskets)
            } else {
                let list = JSON.parse(localStorage.basket)
                list.splice(idx, 1)
                localStorage.basket = JSON.stringify(list)
                await getCountBasket()
                setList(list)
            }
        }
        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
        showMiniDialog(true)
    }
    useEffect(()=>{
        (async()=>{
            if(!authenticated){
                if(localStorage.basket==undefined) {
                    localStorage.basket = JSON.stringify([])
                }
                setList(JSON.parse(localStorage.basket))
            }
            else if(profile.role==='агент') {
                setClients((await getClients({search: '', sort: '-name', filter: ''})).clients)
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            organizations = []
            for(let i=0; i<list.length; i++){
                if(organizations.findIndex(element => element._id===list[i].item.organization._id)===-1){
                    organizations.push(list[i].item.organization)
                }
            }
            setOrganizations([...organizations])
            if(organizations.length>0)
                setOrganization({...organizations[0]})
        })()
    },[list])
    useEffect(()=>{
        calculateAllPrice()
        bonus = {}
        for(let i=0; i<data.bonusesClient.length; i++){
            if(organization._id===data.bonusesClient[i].bonus.organization._id){
                bonus = data.bonusesClient[i]
            }
        }
        setBonus(bonus)
    },[list, organization])
    let getList = async()=>{
        setList((await getBasket()).baskets)
    };
    let calculateAllPrice = async()=>{
        let allPrice = 0
        for(let i=0;i < list.length; i++){
            if(list[i].item.organization._id===organization._id)
                allPrice+=((list[i].item.stock===0||list[i].item.stock===undefined?list[i].item.price:list[i].item.stock)*list[i].count)
        }
        setAllPrice(allPrice)
    };

    //привести к геолокации
    if(data.client&&!Array.isArray(data.client.address[0])) data.client.address.map((addres)=>[addres])

    return (
        <App getList={getList} pageName='Корзина'>
            <Head>
                <title>Корзина</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Корзина' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/basket`} />
                <link rel='canonical' href={`${urlMain}/basket`}/>
            </Head>
                {
                        isMobileApp?
                            <div className={classes.column} style={{width: 'calc(100% - 16px)', margin: 8}}>
                                <Card className={classes.page}>
                                      <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                          {
                                              profile.role==='агент'?
                                                  <TextField
                                                      select
                                                      label='Клиент'
                                                      value={client._id}
                                                      onChange={handleClient}
                                                      helperText='Клиент'
                                                      className={classes.input}
                                                  >
                                                      {clients.map((element)=>
                                                          <MenuItem key={element._id} value={element._id}>{element.name}</MenuItem>
                                                      )}
                                                  </TextField>
                                                  :
                                                  <TextField
                                                      select
                                                      label='Организация'
                                                      value={organization._id}
                                                      onChange={handleOrganization}
                                                      helperText='Организация'
                                                      className={classes.input}
                                                  >
                                                      {organizations.map((element)=>
                                                          <MenuItem key={element._id} value={element._id}>{element.name}</MenuItem>
                                                      )}
                                                  </TextField>
                                          }
                                    </CardContent>
                                </Card>
                                {
                                    list.map((row, idx) => {
                                        if(row.item.organization._id===organization._id)
                                            return (
                                                <Card className={classes.page} key={idx}>
                                                    <CardContent className={classes.column} style={isMobileApp ? {} : {
                                                        justifyContent: 'start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <div className={classes.itemM}>
                                                            <div className={classes.divImage}>
                                                                <img className={classes.mediaM} src={row.item.image}/>
                                                                <IconButton onClick={() => {
                                                                    removeBasketChange(idx)
                                                                }} color="primary" className={classes.cancelM}>
                                                                    <CancelIcon style={{height: 40, width: 40}}/>
                                                                </IconButton>
                                                            </div>
                                                            <br/>
                                                            <div className={classes.nameM}>
                                                                {row.item.name}
                                                            </div>
                                                            <br/>
                                                            <div className={classes.counter}
                                                                 style={isMobileApp ? {marginBottom: 10} : {marginRight: 20}}>
                                                                <div className={classes.counterbtn} onClick={() => {
                                                                    decrement(idx)
                                                                }}>–
                                                                </div>
                                                                <input type={isMobileApp?'number':'text'} className={classes.counternmbr}
                                                                       value={row.count} onChange={(event) => {
                                                                    list[idx].count = isNaN(event.target.value) || event.target.value.length === 0 ? 0 : parseInt(event.target.value)
                                                                    setBasketChange(idx, list[idx].count)
                                                                    setList([...list])
                                                                }}/>
                                                                <div className={classes.counterbtn} onClick={() => {
                                                                    increment(idx)
                                                                }}>+
                                                                </div>
                                                            </div>
                                                            <div className={classes.addPackagingM} style={{color: '#ffb300'}} onClick={()=>{
                                                                list[idx].count += row.item.packaging?row.item.packaging:1
                                                                setBasketChange(idx, list[idx].count)
                                                                setList([...list])
                                                            }}>
                                                                Добавить упаковку
                                                            </div>
                                                            <div>
                                                                <div className={classes.row}>
                                                                    <div className={classes.nameField}>
                                                                        Цена
                                                                    </div>
                                                                    <div className={classes.value}>
                                                                        {`${row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock} сом`}
                                                                    </div>
                                                                </div>
                                                                <div className={classes.row}>
                                                                    <div className={classes.nameField}>
                                                                        Итого
                                                                    </div>
                                                                    <div className={classes.value}>
                                                                        {`${(row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock) * row.count} сом`}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )
                                        }
                                    )
                                }
                                <div style={{height: 70}}/>
                            </div>
                            :
                            <>
                            <Card className={classes.page}>
                                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            {
                                                profile.role==='агент'?
                                                    <FormControl className={classes.input}>
                                                        <InputLabel>Клиент</InputLabel>
                                                        <Select value={client._id} onChange={handleClient}>
                                                            {clients.map((element)=>
                                                                <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                    :
                                                    <FormControl className={classes.input}>
                                                        <InputLabel>Организация</InputLabel>
                                                        <Select value={organization._id} onChange={handleOrganization}>
                                                            {organizations.map((element)=>
                                                                <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                            }
                                        </TableCell>
                                        <TableCell align="left">Количество</TableCell>
                                        <TableCell align="left">Цена</TableCell>
                                        <TableCell align="left">Итого</TableCell>
                                        <TableCell align="center">Отменить</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {list.map((row, idx) => {
                                            if(row.item.organization._id===organization._id)
                                            return (
                                                <TableRow key={idx}>
                                                <TableCell component="th" scope="row" >
                                                    <div className={classes.row}>
                                                        <img className={classes.mediaD} src={row.item.image}/>
                                                        <div className={classes.nameD}>
                                                            {row.item.name}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left">

                                                    <div className={classes.counterD} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                        <div className={classes.counterbtnD} onClick={()=>{decrement(idx)}}>–</div>
                                                        <input type={isMobileApp?'number':'text'} className={classes.counternmbrD} value={row.count} onChange={(event)=>{
                                                            list[idx].count = isNaN(event.target.value)||event.target.value.length<1?1:parseInt(event.target.value)
                                                            setBasketChange(idx, list[idx].count)
                                                            setList([...list])
                                                        }}/>
                                                        <div className={classes.counterbtnD} onClick={()=>{increment(idx)}}>+</div>
                                                    </div>
                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                        list[idx].count += row.item.packaging?row.item.packaging:1
                                                        setBasketChange(idx, list[idx].count)
                                                        setList([...list])
                                                    }}>
                                                        Добавить упаковку
                                                    </div>

                                                </TableCell>
                                                <TableCell align="left">{`${row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock*row.count} сом`}</TableCell>
                                                <TableCell align="left">{`${(row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock*row.count)*row.count} сом`}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton onClick={()=>{removeBasketChange(idx)}} color="primary" className={classes.button} aria-label="add to shopping cart">
                                                        <CancelIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            </Card>
                            <div style={{height: 70}}/>
                            </>
                    }
            <div className={isMobileApp?classes.bottomBasketM:classes.bottomBasketD}>
                <div className={isMobileApp?classes.allPriceM:classes.allPriceD}>
                    <div className={isMobileApp?classes.value:classes.priceAllText}>Общая стоимость</div>
                    <div className={isMobileApp?classes.nameM:classes.priceAll}>{`${allPrice} сом`}</div>
                </div>
                <div className={isMobileApp?classes.buyM:classes.buyD} onClick={()=>{
                    if(allPrice>0)
                        if (authenticated) {
                            let address = profile.role === 'агент' ? client.address : data.client.address
                            let proofeAddress = address.length > 0
                            if (proofeAddress) {
                                for (let i = 0; i < address.length; i++) {
                                    proofeAddress = address[i][0].length > 0
                                }
                            }
                            if (
                                (profile.role === 'агент' && client._id && proofeAddress && client.name.length > 0 && client.phone.length > 0) ||
                                (profile.role !== 'агент' && proofeAddress && data.client.name.length > 0 && data.client.phone.length > 0)
                            ) {
                                setMiniDialog('Купить', <BuyBasket bonus={bonus}
                                                                   client={profile.role === 'агент' ? client : data.client}
                                                                   allPrice={allPrice} organization={organization}/>)
                                showMiniDialog(true)
                            }
                            else {
                                if ((profile.role === 'агент' ? client : data.client) && (profile.role === 'агент' ? client : data.client)._id)
                                    Router.push(`/client/${(profile.role === 'агент' ? client : data.client)._id}`)
                            }
                        }
                        else {
                            setMiniDialog('Купить', <Sign/>)
                            showMiniDialog(true)
                        }
                    else
                        showSnackBar('Добавьте товар в корзину')
                }}>
                    КУПИТЬ
                </div>
            </div>
        </App>
    )
})

Basket.getInitialProps = async function(ctx) {
    if(!['client', 'агент'].includes(ctx.store.getState().user.profile.role)&&ctx.store.getState().user.authenticated)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...await getBasket(ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...(ctx.store.getState().user.profile._id?await getClient({_id: ctx.store.getState().user.profile._id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{}),
            ...await getBonusesClient({search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);