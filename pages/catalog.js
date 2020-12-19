import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/catalog/catalog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {checkInt, checkFloat} from '../src/lib';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import SetPackage from '../components/dialog/SetPackage'
import { urlMain } from '../redux/constants/other'
import { getBonusesClient } from '../src/gql/bonusclient'
import { getClient, getClients } from '../src/gql/client'
import TextField from '@material-ui/core/TextField';
import { getClientGqlSsr } from '../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { forceCheck } from 'react-lazyload';
import { deleteBasketAll } from '../src/gql/basket';
import Divider from '@material-ui/core/Divider';
import LazyLoad from 'react-lazyload';
import CardCatalogPlaceholder from '../components/catalog/CardCatalogPlaceholder'
import initialApp from '../src/initialApp'
import { getBrandOrganizations, getBrands } from '../src/gql/items'
import CircularProgress from '@material-ui/core/CircularProgress';

const Catalog = React.memo((props) => {
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { profile } = props.user;
    const { data } = props;
    const [clients, setClients] = useState([]);
    const { search, filter, sort } = props.app;
    const [inputValue, setInputValue] = React.useState('');
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async()=>{
            if (inputValue.length<3) {
                setClients([]);
                if(open)
                    setOpen(false)
                if(loading)
                    setLoading(false)
            }
            else {
                if(!loading)
                    setLoading(true)
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setClients((await getClients({search: inputValue, sort: '-name', filter: 'all'})).clients)
                    if(!open)
                        setOpen(true)
                    setLoading(false)
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    }, [inputValue]);
    const handleChange = event => {
        setInputValue(event.target.value);
    };
    const [list, setList] = useState(data.brands);
    const [basket, setBasket] = useState({});
    //let [bonusesClient, setBonusesClient] = useState(data.bonusesClient);
    let [organization, setOrganization] = useState({});
    let [geo, setGeo] = useState(undefined);
    let handleOrganization = async (organization) => {
        await deleteBasketAll()
        setBasket({})
        /*bonusesClient = (await getBonusesClient({search: '', sort: '-createdAt'})).bonusesClient
        setBonusesClient(bonusesClient.filter(bonusClient=>bonusClient.bonus.organization._id===organization._id))*/
        setOrganization(organization)
    };
    useEffect(()=>{
        (async()=>{
            if (navigator.geolocation)
                navigator.geolocation.getCurrentPosition((position)=>{
                    setGeo(position)
                })

            if(profile.organization){
                //setBonusesClient((await getBonusesClient({search: '', sort: '-createdAt'})).bonusesClient)
                organization = data.brandOrganizations.filter(elem=>elem._id===profile.organization)[0]
                setOrganization({...organization})
            }
            if(sessionStorage.catalog&&sessionStorage.catalog!=='{}'){
                setBasket(JSON.parse(sessionStorage.catalog))
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            if(organization._id){
                setList((await getBrands({organization: organization._id, search: search, sort: '-name'})).brands)
            }
        })()
    },[filter, search, organization])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    //let [bonus, setBonus] = useState({});
    let [client, setClient] = useState(data.client);
    let handleClient =  (client) => {
        setClient(client)
        //setBonus((data.bonusesClient.filter(bonusClient=>bonusClient.client._id===client._id))[0])
        setOpen(false)
    };
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = async (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {_id: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(basket[id].count)
        basket[id].count+=list[idx].apiece?1:(list[idx].packaging?list[idx].packaging:1)
        basket[id].allPrice = checkFloat(basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
        setBasket({...basket})
    }
    let decrement = async (idx)=>{
        let id = list[idx]._id
        if(basket[id]){
            if(basket[id].count>0) {
                basket[id].count = checkInt(basket[id].count)
                basket[id].count -= list[idx].apiece?1:(list[idx].packaging?list[idx].packaging:1)
                basket[id].allPrice = checkFloat(basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
                setBasket({...basket})
            }
        }
    }
    let incrementConsignment = async(idx)=>{
        let id = list[idx]._id
        if(basket[id]&&basket[id].consignment<basket[id].count) {
            basket[id].consignment += 1
            setBasket({...basket})
        }
    }
    let decrementConsignment = async(idx)=>{
        let id = list[idx]._id
        if(basket[id]&&basket[id].consignment>0) {
            basket[id].consignment -= 1
            setBasket({...basket})
        }

    }
    let showConsignment = (idx)=>{
        let id = list[idx]._id
        if(basket[id]) {
            basket[id].showConsignment = !basket[id].showConsignment
            setBasket({...basket})
        }
    }
    let setBasketChange= async(idx, count)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {_id: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(count)
        basket[id].allPrice = checkFloat(basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
        setBasket({...basket})
    }
    let setPackage= async(idx, count)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {_id: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(basket[id].count)
        basket[id].count = count*(list[idx].packaging?list[idx].packaging:1)
        basket[id].allPrice = checkFloat(basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
        setBasket({...basket})
    }
    let setPackageConsignment = async(idx, count)=>{
        let id = list[idx]._id
        if(basket[id]){
            let consignment = count*(list[idx].packaging?list[idx].packaging:1)
            if(consignment<=basket[id].count){
                basket[id].consignment = consignment
                setBasket({...basket})
            }
        }
    }
    useEffect(()=>{
        sessionStorage.catalog = JSON.stringify(basket)
        let keys = Object.keys(basket)
        allPrice = 0
        for(let i=0; i<keys.length; i++){
            allPrice += basket[keys[i]].allPrice
        }
        setAllPrice(checkFloat(allPrice))
    },[basket])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Каталог'>
            <Head>
                <title>Каталог</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Каталог' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/catalog`} />
                <link rel='canonical' href={`${urlMain}/catalog`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {
                        data.client?
                            <TextField
                                label='Клиент'
                                value={data.client.name}
                                className={classes.input}
                                inputProps={{
                                    'aria-label': 'description',
                                    readOnly: true,
                                }}
                            />
                            :
                            <Autocomplete
                                onClose={()=>setOpen(false)}
                                open={open}
                                disableOpenOnFocus
                                className={classes.input}
                                options={clients}
                                getOptionLabel={option => `${option.name}${option.address&&option.address[0]?` (${option.address[0][2]?`${option.address[0][2]}, `:''}${option.address[0][0]})`:''}`}
                                onChange={(event, newValue) => {
                                    handleClient(newValue)
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Выберите клиента' variant='outlined' fullWidth
                                               onChange={handleChange}
                                               InputProps={{
                                                   ...params.InputProps,
                                                   endAdornment: (
                                                       <React.Fragment>
                                                           {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                           {params.InputProps.endAdornment}
                                                       </React.Fragment>
                                                   ),
                                               }}
                                    />
                                )}
                            />
                    }
                    <br/>
                    {
                        data.brandOrganizations.length>1?
                            <>
                            <Autocomplete
                                className={classes.input}
                                options={data.brandOrganizations}
                                getOptionLabel={option => option.name}
                                onChange={(event, newValue) => {
                                    handleOrganization(newValue)
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Выберите организацию' variant='outlined' fullWidth />
                                )}
                            />
                            <br/>
                            </>
                            :null

                    }
                    {
                        list.map((row, idx) => {
                            let price
                            if(basket[row._id]&&basket[row._id].allPrice)
                                price = basket[row._id].allPrice
                            else if(row.stock)
                                price = row.stock
                            else
                                price = row.price
                            if(idx<=pagination)
                                return(
                                    <LazyLoad scrollContainer={'.App-body'} key={row._id} offset={[186, 0]} debounce={0} once={true}  placeholder={<CardCatalogPlaceholder/>}>
                                        <div>
                                            <div className={classes.line}>
                                                <img className={classes.media} src={row.image}/>
                                                <div className={classes.column} style={{width: 'calc(100% - 142px)'}}>
                                                    <div className={classes.value}>{row.name}</div>
                                                    <b className={classes.value}>
                                                        {`${price} сом`}
                                                    </b>
                                                    <div className={classes.line}>
                                                        <div className={classes.counter}>
                                                            <div className={classes.counterbtn} onClick={() => {
                                                                decrement(idx)
                                                            }}>–
                                                            </div>
                                                            <input readOnly={!row.apiece} type={isMobileApp?'number':'text'} className={classes.counternmbr}
                                                                   value={basket[row._id]?basket[row._id].count:''} onChange={(event) => {
                                                                setBasketChange(idx, event.target.value)
                                                            }}/>
                                                            <div className={classes.counterbtn} onClick={() => {
                                                                increment(idx)
                                                            }}>+
                                                            </div>
                                                        </div>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <div className={classes.showCons} style={{color: basket[row._id]&&basket[row._id].showConsignment?'#ffb300':'#000'}} onClick={()=>{
                                                            showConsignment(idx)
                                                        }}>
                                                            КОНС
                                                        </div>
                                                    </div>
                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                        setMiniDialog('Упаковок', <SetPackage
                                                            action={setPackage}
                                                            idx={idx}/>)
                                                        showMiniDialog(true)
                                                    }}>
                                                        Упаковок: {basket[row._id]?(basket[row._id].count/(row.packaging?row.packaging:1)).toFixed(1):0}
                                                    </div>
                                                    {
                                                        basket[row._id]&&basket[row._id].showConsignment?
                                                            <>
                                                            <br/>
                                                            <div className={classes.row}>
                                                                <div className={classes.valuecons}>Консигнация</div>
                                                                <div className={classes.counterbtncons} onClick={()=>{decrementConsignment(idx)}}>-</div>
                                                                <div className={classes.valuecons}>{basket[row._id]?basket[row._id].consignment:0}&nbsp;шт</div>
                                                                <div className={classes.counterbtncons} onClick={()=>{incrementConsignment(idx)}}>+</div>
                                                            </div>
                                                            <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                setMiniDialog('Упаковок', <SetPackage
                                                                    action={setPackageConsignment}
                                                                    idx={idx}/>)
                                                                showMiniDialog(true)
                                                            }}>
                                                                Упаковок: {basket[row._id]?(basket[row._id].consignment/(row.packaging?row.packaging:1)).toFixed(1):0}
                                                            </div>
                                                            </>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                            <br/>
                                            <Divider/>
                                            <br/>
                                        </div>
                                    </LazyLoad>
                                )
                            }
                        )
                    }
                </CardContent>
            </Card>
            <div style={{height: 70}}/>
            <div className={isMobileApp?classes.bottomBasketM:classes.bottomBasketD}>
                <div className={isMobileApp?classes.allPriceM:classes.allPriceD}>
                    <div className={isMobileApp?classes.value:classes.priceAllText}>Общая стоимость</div>
                    <div className={isMobileApp?classes.nameM:classes.priceAll}>{`${allPrice} сом`}</div>
                </div>
                <div className={isMobileApp?classes.buyM:classes.buyD} onClick={async ()=>{
                    if(allPrice>0) {
                        if(client&&client._id) {
                            let proofeAddress = client.address[0]&&client.address[0][0]&&client.address[0][0].length > 0&&client.address[0][1]&&client.address[0][1].length > 0
                            if (
                                client._id && proofeAddress && client.name && client.name.length > 0 && client.phone && client.phone.length > 0
                            ) {
                                setMiniDialog('Купить', <BuyBasket
                                    geo={geo}
                                    agent={true}
                                    client={client}
                                    basket = {Object.values(basket)}
                                    allPrice={allPrice}
                                    organization={organization}/>)
                                showMiniDialog(true)
                            }
                            else {
                                Router.push(`/client/${client._id}`)
                            }
                        }
                        else
                            showSnackBar('Пожалуйста выберите клиента')
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

Catalog.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    await deleteBasketAll(ctx.req?await getClientGqlSsr(ctx.req):undefined)
    return {
        data: {
            brands: ctx.store.getState().user.profile.organization?(await getBrands({organization: ctx.store.getState().user.profile.organization, search: '', sort: '-name'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).brands:[],
            organization: {},
            bonusesClient: [],
            client: ctx.query.client?(await getClient({_id: ctx.query.client}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).client:undefined,
            ...await getBrandOrganizations({search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);