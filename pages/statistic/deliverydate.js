import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/statistic/statistic'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import CardClient from '../../components/client/CardClient'
import CardClientPlaceholder from '../../components/client/CardClientPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getActiveOrganization } from '../../src/gql/statistic'
import { getDistricts, getDistrict } from '../../src/gql/district'
import { getDeliveryDates, saveDeliveryDates } from '../../src/gql/deliveryDate'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import Checkbox from '@material-ui/core/Checkbox';
import LazyLoad from 'react-lazyload';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as snackbarActions from '../../redux/actions/snackbar'
import dynamic from 'next/dynamic'
import { getDistributer } from '../../src/gql/distributer'
import clients from '../clients';
import Button from '@material-ui/core/Button';

const height = 225
const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))

const LogistiOorder = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let { isMobileApp, search } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog} = props.mini_dialogActions;
    const { showLoad } = props.appActions;
    const { showSnackBar } = props.snackbarActions;
    let [pagination, setPagination] = useState(100);
    let [districts, setDistricts] = useState([]);
    let [allClients, setAllClients] = useState([]);
    let [deliveryDates, setDeliveryDates] = useState([]);
    let [filtredClients, setFiltredClients] = useState([]);
    let [selectedClients, setSelectedClients] = useState([]);
    let [district, setDistrict] = useState(undefined);
    let [forwarder, setForwarder] = useState(profile.organization?{_id: profile.organization}:undefined);
    let [organizations, setOrganizations] = useState([]);
    let [organization, setOrganization] = useState(undefined);
    let [days, setDays] = useState([true, true, true, true, true, true, true]);
    useEffect(()=>{
        (async()=>{
            await showLoad(true)
            setOrganization(undefined)
            setDistrict(undefined)
            setAllClients([])
            setSelectedClients([])
            organizations = []
            if(forwarder){
                setDistricts((await getDistricts({search: '', sort: '-name', organization: forwarder._id})).districts)
                organizations = [forwarder]
                let distributer = (await getDistributer({_id: forwarder._id})).distributer
                if(distributer){
                    organizations = [...organizations, ...distributer.provider]
                }
            }
            setOrganizations(organizations)
            await showLoad(false)
        })()
    },[forwarder])
    useEffect(()=>{
        (async()=>{
            setSelectedClients([])
            setAllClients([])
            if(district&&organization){
                await showLoad(true)
                let _district = (await getDistrict({_id: district._id})).district
                setAllClients(_district.client)
                deliveryDates = {}
                let  _deliveryDates =  (await getDeliveryDates({clients: district.client.map(element=>element._id), organization: organization._id})).deliveryDates
                for(let i=0; i<_deliveryDates.length; i++) {
                    deliveryDates[_deliveryDates[i].client] = _deliveryDates[i]
                }
                setDeliveryDates({...deliveryDates})
                await showLoad(false)
            }
        })()
    },[district, organization])
    const checkPagination = ()=>{
        if(pagination<clients.length){
            setPagination(pagination+100)
        }
    }
    useEffect(()=>{
        (async()=>{
            if(allClients.length>0) {
                let filtredClient = [...allClients]
                if(search.length>0)
                    filtredClient = filtredClient.filter(element=>
                        ((element.phone.filter(phone => phone.toLowerCase().includes(search.toLowerCase()))).length > 0) ||
                        (element.name.toLowerCase()).includes(search.toLowerCase())||
                        ((element.address.filter(addres=>addres[0]&&addres[0].toLowerCase().includes(search.toLowerCase()))).length>0)||
                        ((element.address.filter(addres=>addres[2]&&addres[2].toLowerCase().includes(search.toLowerCase()))).length>0)
                    )
                setFiltredClients([...filtredClient])
            }
        })()
    },[search, allClients])

    let [anchorEl, setAnchorEl] = useState(null);
    let open = event => {
        setAnchorEl(event.currentTarget);
    };
    let close = () => {
        setAnchorEl(null);
    };
    return (
        <App pageName='Дни доставки' checkPagination={checkPagination} searchShow={true}>
            <Head>
                <title>Дни доставки</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Дни доставки' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/deliverydate`} />
                <link rel='canonical' href={`${urlMain}/statistic/deliverydate.`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        {
                            profile.role==='admin'?
                                <Autocomplete
                                    className={classes.input}
                                    options={data.activeOrganization}
                                    getOptionLabel={option => option.name}
                                    value={forwarder}
                                    onChange={(event, newValue) => {
                                        setForwarder(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Поставщик' fullWidth />
                                    )}/>
                                :
                                null
                        }
                        <Autocomplete
                            className={classes.input}
                            options={organizations}
                            getOptionLabel={option => option.name}
                            value={organization}
                            onChange={(event, newValue) => {
                                setOrganization(newValue)
                            }}
                            noOptionsText='Ничего не найдено'
                            renderInput={params => (
                                <TextField {...params} label='Организация' fullWidth />
                            )}
                        />
                    </div>
                    <div className={classes.row}>
                        {
                            profile.role!=='агент'?
                                <Autocomplete
                                    className={classes.input}
                                    options={districts}
                                    getOptionLabel={option => option.name}
                                    value={district}
                                    onChange={(event, newValue) => {
                                        setDistrict(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Район' fullWidth />
                                    )}
                                />
                                :
                                null
                        }
                    </div>
                    <div className={classes.row}>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[0] = !days[0];setDays([...days])}} size='small' color={days[0]?'primary':''}>
                            ПН
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[1] = !days[1];setDays([...days])}} size='small' color={days[1]?'primary':''}>
                            ВТ
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[2] = !days[2];setDays([...days])}} size='small' color={days[2]?'primary':''}>
                            СР
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[3] = !days[3];setDays([...days])}} size='small' color={days[3]?'primary':''}>
                            ЧТ
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[4] = !days[4];setDays([...days])}} size='small' color={days[4]?'primary':''}>
                            ПТ
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[5] = !days[5];setDays([...days])}} size='small' color={days[5]?'primary':''}>
                            СБ
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>{days[6] = !days[6];setDays([...days])}} size='small' color={days[6]?'primary':''}>
                            ВС
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <div className={classes.listInvoices}>
                {filtredClients?filtredClients.map((element, idx)=> {
                    if (idx <= pagination) {
                        let deliveryDate = deliveryDates[element._id] ? deliveryDates[element._id].days : [true, true, true, true, true, true, true];
                        return (
                            <div key={idx} style={{alignItems: 'baseline'}} className={classes.column1}>
                                <div className={classes.row1}>
                                    <div style={{alignItems: 'center'}} className={classes.column1}>
                                        <Checkbox checked={selectedClients.includes(element._id)}
                                                  onChange={() => {
                                                      if (!selectedClients.includes(element._id)) {
                                                          selectedClients.push(element._id)
                                                      } else {
                                                          selectedClients.splice(selectedClients.indexOf(element._id), 1)
                                                      }
                                                      setSelectedClients([...selectedClients])
                                                  }}
                                        />
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[0]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[1]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[2]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[3]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[4]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[5]?'#ffb300':'white'}}/>
                                        <div className={classes.dateStatistic} style={{background: deliveryDate[6]?'#ffb300':'white'}}/>
                                    </div>
                                    <LazyLoad scrollContainer={'.App-body'} key={element._id}
                                              height={height} offset={[height, 0]} debounce={0}
                                              once={true}
                                              placeholder={<CardClientPlaceholder/>}>
                                        <CardClient idx={idx} key={element._id} element={element}/>
                                    </LazyLoad>
                                </div>
                            </div>
                        )
                    }
                    else return null
                }):null}
            </div>
            <Fab onClick={open} color='primary' aria-label='add' className={classes.fab}>
                <SettingsIcon />
            </Fab>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={close}
                className={classes.menu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={async()=>{
                    if(selectedClients.length>0){
                        const action = async() => {
                            if(selectedClients.length>0) {
                                await saveDeliveryDates(selectedClients, organization._id, days)
                                for (let i = 0; i < selectedClients.length; i++) {
                                    deliveryDates[selectedClients[i]] = {
                                        client: selectedClients[i],
                                        days: days,
                                        organization: organization._id
                                    }
                                }
                                setDeliveryDates({...deliveryDates})
                            }
                        }
                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                        showMiniDialog(true)
                    }
                    else {
                        showSnackBar('Заполните все поля');
                    }
                    close()
                }}>Сохранить</MenuItem>
                <MenuItem onClick={async()=>{
                    setSelectedClients(filtredClients.map(client=>client._id))
                    close()
                }}>Выбрать все</MenuItem>
                <MenuItem onClick={async()=>{
                    setSelectedClients([])
                    close()
                }}>Отменить выбор</MenuItem>
            </Menu>
            <div className='count'>
                {`Клиентов: ${selectedClients.length}`}
            </div>
        </App>
    )
})

LogistiOorder.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = 'Заказы'
    if(!['admin', 'суперорганизация', 'организация', 'агент', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            activeOrganization: [{name: 'AZYK.STORE', _id: 'super'}, ...(await getActiveOrganization(ctx.req?await getClientGqlSsr(ctx.req):undefined)).activeOrganization]
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
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogistiOorder);