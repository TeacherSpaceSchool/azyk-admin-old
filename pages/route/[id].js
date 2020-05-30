import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../../src/gql/organization'
import { getOrdersForRouting } from '../../src/gql/order'
import { getRoute, deleteRoute, addRoute, buildRoute, listDownload, listUnload, getUnloadingInvoicesFromRouting } from '../../src/gql/route'
import { getDistricts } from '../../src/gql/district'
import { getDistributer } from '../../src/gql/distributer'
import { getEcspeditors } from '../../src/gql/employment'
import { getAutos } from '../../src/gql/auto'
import routeStyle from '../../src/styleMUI/route/route'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import CardOrder from '../../components/order/CardOrder';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import * as appActions from '../../redux/actions/app'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { pdDatePicker } from '../../src/lib'
import Confirmation from '../../components/dialog/Confirmation'
import ListOrder from '../../components/dialog/ListOrder'
import GeoRoute from '../../components/dialog/GeoRoute'
import ItemList from '../../components/dialog/ItemList'
import AddOrder from '../../components/dialog/AddOrder'

const Route = React.memo((props) => {
    const classes = routeStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;
    const { setMiniDialog, showMiniDialog, showFullDialog, setFullDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { showLoad } = props.appActions;
    let [screen, setScreen] = useState('setting');
    let [provider, setProvider] = useState(data.route?data.route.provider?data.route.provider:{name: 'AZYK.STORE', _id: 'super'}:{});
    let handleProvider = (async (provider) => {
        setSelectDistricts([])
        setSelectProdusers([])
        setSelectEcspeditor({})
        setSelectAuto({})
        setOrders([])
        setSelectedOrders([])
        if(provider){
            produsers = [...provider._id!=='super'?[provider]:[]]
            let distributer = (await getDistributer({_id: provider._id})).distributer
            if(distributer)
                setProdusers([...produsers, ...distributer.provider])
            ecspeditors = (await getEcspeditors({_id: provider._id})).ecspeditors
            if(ecspeditors)
                setEcspeditors([...ecspeditors])
            autos = (await getAutos({search: '', sort: 'name', organization: provider._id})).autos
            if(autos)
                setAutos([...autos])
            setDistricts((await getDistricts({search: '', sort: 'name', organization: provider._id})).districts)
        }
        else {
            setProdusers([])
            setDistricts([])
            setAutos([])
            setEcspeditors([])
        }
        setProvider(provider)
    })
    let [produsers, setProdusers] = React.useState(data.route?data.route.selectProdusers:[]);
    let [selectProdusers, setSelectProdusers] = useState(data.route?data.route.selectProdusers:[]);
    let handleSelectProdusers = (async (event) => {
        setSelectProdusers(event.target.value)
    })
    let [districts, setDistricts] = useState(data.route?data.route.selectDistricts:[]);
    let [selectDistricts, setSelectDistricts] = useState(data.route?data.route.selectDistricts:[]);
    let handleSelectDistricts = (async (event) => {
        setSelectDistricts(event.target.value)
    })
    let [ecspeditors, setEcspeditors] = React.useState([]);
    let [selectEcspeditor, setSelectEcspeditor] = React.useState(data.route?data.route.selectEcspeditor:{});
    let [orders, setOrders] = React.useState(data.route?data.route.selectedOrders:[]);
    let [autos, setAutos] = React.useState([]);
    let [selectAuto, setSelectAuto] = React.useState(data.route?data.route.selectAuto:{});
    let [dateStart, setDateStart] = useState(data.route?pdDatePicker(new Date(data.route.dateStart)):undefined);
    let [dateEnd, setDateEnd] = useState(data.route?data.route.dateEnd?pdDatePicker(new Date(data.route.dateEnd)):undefined:undefined);
    let [allPrice, setAllPrice] = useState(0);
    let [allSize, setAllSize] = useState(0);
    let [allTonnage, setAllTonnage] = useState(0);
    let [allReturnedPrice, setAllReturnedPrice] = useState(0);
    let [dateDelivery, setDateDelivery] = useState(data.route?pdDatePicker(new Date(data.route.dateDelivery)):undefined);
    let [showStat, setShowStat] = useState(false);
    let [deliverys, setDeliverys] = useState(data.route?data.route.deliverys:[]);
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<orders.length){
            setPagination(pagination+100)
        }
    }
    let [selectedOrders, setSelectedOrders] = useState(data.route?data.route.selectedOrders:[]);
    let [anchorEl, setAnchorEl] = useState(null);
    let open = event => {
        setAnchorEl(event.currentTarget);
    };
    let close = () => {
        setAnchorEl(null);
    };
    useEffect(()=>{
        (async ()=>{
            if(router.query.id==='new'&&selectProdusers.length>0&&provider&&provider._id&&selectDistricts.length>0&&dateStart&&dateDelivery) {
                await showLoad(true)
                let clients = []
                for(let i=0;i<selectDistricts.length;i++){
                    clients = [...clients, ...selectDistricts[i].client.map(element=>element._id)]
                }
                setOrders((await getOrdersForRouting({produsers: selectProdusers.map(element=>element._id), clients: clients, dateStart: dateStart, dateEnd: dateEnd, dateDelivery:dateDelivery})).invoicesForRouting)
                await showLoad(false)
            }
        })()
    },[selectProdusers, provider, selectDistricts, dateStart, dateEnd, dateDelivery])
    useEffect(()=>{
        (async ()=>{
            let tonnage = 0;
            let size = 0;
            let price = 0;
            let returnedPrice = 0;
            for(let i=0; i<selectedOrders.length; i++){
                if (selectedOrders[i].allPrice)
                    price += selectedOrders[i].allPrice
                if (selectedOrders[i].returnedPrice)
                    returnedPrice += selectedOrders[i].returnedPrice
                if (selectedOrders[i].allSize)
                    size += selectedOrders[i].allSize
                if (selectedOrders[i].allTonnage)
                    tonnage += selectedOrders[i].allTonnage
            }
            setAllPrice(price)
            setAllSize(size)
            setAllTonnage(tonnage)
            setAllReturnedPrice(returnedPrice)
        })()
    },[selectedOrders])
    return (
        <App checkPagination={checkPagination} pageName={router.query.id==='new'?'Добавить':data.route?data.route.number:'Ничего не найдено'}>
            <Head>
                <title>{router.query.id==='new'?'Добавить':data.route?data.route.number:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={router.query.id==='new'?'Добавить':data.route?data.route.number:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/route/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/route/${router.query.id}`}/>
                <link rel='stylesheet' href='https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' />
                <link rel='stylesheet' href='https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css' />
                <link rel='stylesheet' href='https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css' />
            </Head>
            {
                router.query.id==='new'||data.route?
                    <>
                    <Card className={isMobileApp?classes.pageM:classes.pageD}>
                        <CardContent className={classes.column}>
                            <div style={{ justifyContent: 'center' }} className={classes.row}>
                                <div style={{background: screen==='setting'?'#ffb300':'#ffffff'}} onClick={()=>{setPagination(100);setScreen('setting')}} className={classes.selectType}>
                                    Настройки
                                </div>
                                <div style={{background: screen==='invoices'?'#ffb300':'#ffffff'}} onClick={()=>{setPagination(100);setScreen('invoices')}} className={classes.selectType}>
                                    Заказы {orders.length}
                                </div>
                            </div>
                            {
                                screen==='setting'?
                                    <>
                                    <div className={classes.row}>
                                        <Autocomplete
                                            className={classes.inputHalf}
                                            options={data.organizations}
                                            getOptionLabel={option => option.name}
                                            value={provider}
                                            onChange={(event, newValue) => {
                                                handleProvider(newValue)
                                            }}
                                            disabled={router.query.id!=='new'}
                                            noOptionsText='Ничего не найдено'
                                            renderInput={params => (
                                                <TextField {...params} label='Поставщик' variant='outlined' fullWidth />
                                            )}
                                        />
                                        <FormControl className={classes.inputHalf} variant='outlined'>
                                            <InputLabel>Производители</InputLabel>
                                            <Select
                                                disabled={router.query.id!=='new'}
                                                multiple
                                                value={selectProdusers}
                                                onChange={handleSelectProdusers}
                                                input={<Input />}
                                                MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            maxHeight: 226,
                                                            width: 250,
                                                        },
                                                    }
                                                }}
                                            >
                                                {produsers.map((organization) => (
                                                    <MenuItem key={organization.name} value={organization}>
                                                        {organization.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <FormControl className={classes.input} variant='outlined'>
                                        <InputLabel>Районы</InputLabel>
                                        <Select
                                            multiple
                                            disabled={router.query.id!=='new'}
                                            value={selectDistricts}
                                            onChange={handleSelectDistricts}
                                            input={<Input />}
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 226,
                                                        width: 250,
                                                    },
                                                }
                                            }}
                                        >
                                            {districts.map((district) => (
                                                <MenuItem key={district.name} value={district}>
                                                    {district.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <div className={classes.row}>
                                        <Autocomplete
                                            className={classes.inputHalf}
                                            disabled={router.query.id!=='new'}
                                            options={ecspeditors}
                                            value={selectEcspeditor}
                                            getOptionLabel={option => option.name}
                                            onChange={(event, newValue) => {
                                                setSelectEcspeditor(newValue)
                                            }}
                                            noOptionsText='Ничего не найдено'
                                            renderInput={params => (
                                                <TextField {...params} label='Экспедитора' variant='outlined' fullWidth />
                                            )}
                                        />
                                        <Autocomplete
                                            className={classes.inputHalf}
                                            disabled={router.query.id!=='new'}
                                            options={autos}
                                            value={selectAuto}
                                            getOptionLabel={option => option.number}
                                            onChange={(event, newValue) => {
                                                setSelectAuto(newValue)
                                            }}
                                            noOptionsText='Ничего не найдено'
                                            renderInput={params => (
                                                <TextField {...params} label='Транспорт' variant='outlined' fullWidth />
                                            )}
                                        />
                                    </div>
                                    <div className={classes.row}>
                                        <TextField
                                            className={classes.inputThird}
                                            disabled={router.query.id!=='new'}
                                            label='Начало'
                                            type='date'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            format='MM/dd/yy'
                                            value={dateStart}
                                            onChange={ event => setDateStart(event.target.value) }
                                        />
                                        <TextField
                                            className={classes.inputThird}
                                            label='Конец'
                                            disabled={router.query.id!=='new'}
                                            type='date'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={dateEnd}
                                            format='MM/dd/yy'
                                            onChange={ event => setDateEnd(event.target.value) }
                                        />
                                        <TextField
                                            className={classes.inputThird}
                                            label='Развозка'
                                            disabled={router.query.id!=='new'}
                                            type='date'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={dateDelivery}
                                            format='MM/dd/yy'
                                            onChange={ event => setDateDelivery(event.target.value) }
                                        />
                                    </div>
                                    <br/>
                                    {
                                        deliverys?deliverys.map((element, idx)=>
                                            <ExpansionPanel key={idx}>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                >
                                                    <div className={classes.value}>
                                                        Рейс {idx+1}
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <div className={classes.column}>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>
                                                                Заказов:&nbsp;
                                                            </div>
                                                            <div className={classes.value}>
                                                                {element.orders.length}
                                                            </div>
                                                        </div>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>
                                                                Сумма{element.orders.reduce((accumulator, element) => accumulator + element.returnedPrice, 0)?' (факт/итого)':''}:&nbsp;
                                                            </div>
                                                            <div className={classes.value}>
                                                                {element.orders.reduce((accumulator, element) => accumulator + element.returnedPrice, 0)?`${element.orders.reduce((accumulator, element) => accumulator + element.returnedPrice, 0)} сом/`:''}{element.orders.reduce((accumulator, element) => accumulator + (element.allPrice-element.returnedPrice), 0)} сом
                                                            </div>
                                                        </div>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>
                                                                Тоннаж:&nbsp;
                                                            </div>
                                                            <div className={classes.value}>
                                                                {element.tonnage} кг
                                                            </div>
                                                        </div>
                                                        <div className={classes.row}>
                                                            <div className={classes.nameField}>
                                                                Протяженость:&nbsp;
                                                            </div>
                                                            <div className={classes.value}>
                                                                {element.lengthInMeters/1000} км
                                                            </div>
                                                        </div>
                                                        <Button onClick={async()=>{
                                                            await showLoad(true)
                                                            window.open(((await getUnloadingInvoicesFromRouting({
                                                                organization: provider._id,
                                                                orders: element.orders.map(order=>order._id)
                                                            })).unloadingInvoicesFromRouting).data, '_blank');
                                                            await showLoad(false)
                                                        }} size='small' color='primary'>
                                                            Скачать накладные
                                                        </Button>
                                                        <Button onClick={async()=>{
                                                            let items = (await listDownload(element.orders.map(order=>order._id))).listDownload
                                                            setMiniDialog('Лист загрузки', <ItemList items={items}/>)
                                                            showMiniDialog(true)
                                                        }} size='small' color='primary'>
                                                            Лист загрузки
                                                        </Button>
                                                        <Button onClick={async()=>{
                                                            let items = (await listUnload(element.orders.map(order=>order._id))).listUnload
                                                            setMiniDialog('Лист выгрузки', <ItemList items={items}/>)
                                                            showMiniDialog(true)
                                                        }} size='small' color='primary'>
                                                            Лист выгрузки
                                                        </Button>
                                                        <Button onClick={async()=>{
                                                            setFullDialog('Список магазинов', <ListOrder
                                                                setList={(list)=>{deliverys[idx].orders = list; setDeliverys([...deliverys])}}
                                                                invoices={element.orders}
                                                            />)
                                                            showFullDialog(true)
                                                        }} size='small' color='primary'>
                                                            Список магазинов
                                                        </Button>
                                                        <Button onClick={async()=>{
                                                            setFullDialog('Маршрут', <GeoRoute legs={element.legs} setList={(list)=>{deliverys[idx].orders = list; setDeliverys([...deliverys])}} invoices={element.orders}/>)
                                                            showFullDialog(true)
                                                        }} size='small' color='primary'>
                                                            Карта
                                                        </Button>
                                                    </div>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        ):null
                                    }
                                    <br/>
                                    </>
                                    :
                                    <div className={classes.listInvoices}>
                                        {orders?orders.map((element, idx)=> {
                                            if(idx<=pagination)
                                                return(
                                                    <div key={idx} style={isMobileApp ? {alignItems: 'baseline'} : {}}
                                                         className={isMobileApp ? classes.column1 : classes.row1}>
                                                        {
                                                            router.query.id==='new'?
                                                                <Checkbox checked={selectedOrders.findIndex(element1=>element1._id===element._id)!==-1}
                                                                          onChange={() => {
                                                                              if (selectedOrders.findIndex(element1=>element1._id===element._id)===-1) {
                                                                                  selectedOrders.push(element)
                                                                              } else {
                                                                                  selectedOrders.splice(selectedOrders.findIndex(element1=>element1._id===element._id), 1)
                                                                              }
                                                                              setSelectedOrders([...selectedOrders])
                                                                          }}
                                                                />
                                                                :
                                                                null
                                                        }
                                                        <CardOrder setList={setOrders} list={orders} idx={idx} element={element}/>
                                                    </div>
                                                )}
                                        ):null}
                                    </div>
                            }
                        </CardContent>
                        {
                            orders.length>0&&router.query.id==='new'?
                                <>
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
                                    {
                                        screen==='setting'?
                                            <>
                                            {
                                                selectedOrders.length>0&&selectAuto&&selectAuto._id?
                                                    <MenuItem onClick={async()=>{
                                                        close()
                                                        await showLoad(true)
                                                        if(!(selectedOrders.find(element=>!element.address[1]))) {
                                                            let deliverys = (await buildRoute({
                                                                provider: provider._id,
                                                                autoTonnage: selectAuto.tonnage,
                                                                orders: selectedOrders.map(element => element._id)
                                                            })).buildRoute
                                                            setDeliverys(deliverys)
                                                        }
                                                        else
                                                            showSnackBar('Отсуствует геолокация')
                                                        await showLoad(false)
                                                    }}>Построить маршрут</MenuItem>
                                                    :
                                                    null
                                            }
                                            {
                                                deliverys.length>0&&selectEcspeditor&&selectEcspeditor._id?
                                                    <MenuItem onClick={async()=>{
                                                        close()
                                                        await showLoad(true)
                                                        for(let i=0; i<deliverys.length; i++) {
                                                            deliverys[i].orders = deliverys[i].orders.map(element=>element._id)
                                                            deliverys[i] = {
                                                                legs: deliverys[i].legs,
                                                                orders: deliverys[i].orders,
                                                                tonnage: deliverys[i].tonnage,
                                                                lengthInMeters: deliverys[i].lengthInMeters
                                                            }
                                                        }
                                                        await addRoute({provider: provider._id, deliverys: deliverys, selectedOrders: selectedOrders.map(element=>element._id), selectDistricts: selectDistricts.map(element=>element._id), selectEcspeditor: selectEcspeditor._id, selectAuto: selectAuto._id, dateDelivery: dateDelivery, dateEnd: dateEnd, dateStart: dateStart, allTonnage: parseInt(allTonnage), selectProdusers: selectProdusers.map(element=>element._id)})
                                                        Router.push(`/routes/${provider._id}`)
                                                        await showLoad(false)
                                                    }}>Сохранить маршрут</MenuItem>
                                                    :
                                                    null
                                            }
                                            </>
                                            :
                                            <>
                                            <MenuItem onClick={async()=>{
                                                setSelectedOrders([...orders])
                                                close()
                                            }}>Выбрать все</MenuItem>
                                            <MenuItem onClick={async()=>{
                                                setSelectedOrders([])
                                                close()
                                            }}>Отменить выбор</MenuItem>
                                            <MenuItem onClick={async()=>{
                                                setFullDialog('Добавить заказ', <AddOrder districts={districts} produsers={produsers} dateDelivery={dateDelivery} mainSelectedOrders={selectedOrders} setMainSelectedOrders={setSelectedOrders} mainOrders={orders} setMainOrders={setOrders}/>)
                                                showFullDialog(true)
                                                close()
                                            }}>Добавить заказ</MenuItem>
                                            </>
                                    }
                                </Menu>
                                </>
                                :
                                null
                        }
                    </Card>
                    {
                        selectedOrders&&selectedOrders.length?
                            <div className='count' onClick={()=>setShowStat(!showStat)}>
                                {
                                    `Всего заказов: ${selectedOrders.length}`
                                }
                                {
                                    showStat?
                                        <>
                                        {
                                            allPrice?
                                                <>
                                                <br/>
                                                <br/>
                                                {`Сумма${allReturnedPrice?' (факт./итого)':''}: ${allReturnedPrice?`${allPrice-allReturnedPrice}/${allPrice}`:allPrice} сом`}
                                                </>
                                                :
                                                null
                                        }
                                        {
                                            allTonnage?
                                                <>
                                                <br/>
                                                <br/>
                                                {`Тоннаж: ${allTonnage} кг`}
                                                </>
                                                :
                                                null
                                        }
                                        {
                                            allSize?
                                                <>
                                                <br/>
                                                <br/>
                                                {`Кубатура: ${allSize} см³`}
                                                </>
                                                :
                                                null
                                        }
                                        </>
                                        :
                                        null
                                }
                            </div>
                            :
                            null
                    }
                    </>
                    :
                    null
            }
        </App>
    )
})

Route.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['суперорганизация', 'организация', 'менеджер', 'admin', 'экспедитор', 'суперэкспедитор'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
                Router.push('/contact')
    return {
        data: {
            route: (await getRoute({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).route,
            organizations: [{name: 'AZYK.STORE', _id: 'super'}, ...(await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).organizations]
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
        appActions: bindActionCreators(appActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Route);