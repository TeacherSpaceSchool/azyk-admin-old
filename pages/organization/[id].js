import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganization } from '../../src/gql/organization'
import organizationStyle from '../../src/styleMUI/organization/organization'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useRouter } from 'next/router'
import Router from 'next/router'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { onoffOrganization, addOrganization, setOrganization, deleteOrganization } from '../../src/gql/organization'
import Remove from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as snackbarActions from '../../redux/actions/snackbar'
import Confirmation from '../../components/dialog/Confirmation'
import { urlMain } from '../../redux/constants/other'
import { checkInt } from '../../src/lib'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Geo from '../../components/dialog/Geo'

const Organization = React.memo((props) => {
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const router = useRouter()
    const { showSnackBar } = props.snackbarActions;
    let [statusO, setStatusO] = useState(data.organization?data.organization.status:'');
    let [name, setName] = useState(data.organization?data.organization.name:'');
    let [accessToClient, setAccessToClient] = useState(data.organization&&data.organization.accessToClient!==null?data.organization.accessToClient:false);
    let [onlyDistrict, setOnlyDistrict] = useState(data.organization&&data.organization.onlyDistrict!==null?data.organization.onlyDistrict:false);
    let [onlyIntegrate, setOnlyIntegrate] = useState(data.organization&&data.organization.onlyIntegrate!==null?data.organization.onlyIntegrate:false);
    let [warehouse, setWarehouse] = useState(data.organization&&data.organization.warehouse!==null?data.organization.warehouse:'');
    let [consignation, setConsignation] = useState(data.organization&&data.organization.consignation!==null?data.organization.consignation:false);
    let [minimumOrder, setMinimumOrder] = useState(data.organization!==null?data.organization.minimumOrder:0);
    let [priotiry, setPriotiry] = useState(data.organization!==null?data.organization.priotiry:0);
    let [address, setAddress] = useState(data.organization?data.organization.address:[]);
    let [newAddress, setNewAddress] = useState('');
    let addAddress = ()=>{
        address = [...address, newAddress]
        setAddress(address)
        setNewAddress('')
    };
    let editAddress = (event, idx)=>{
        address[idx] = event.target.value
        setAddress([...address])
    };
    let deleteAddress = (idx)=>{
        address.splice(idx, 1);
        setAddress([...address])
    };
    let [email, setEmail] = useState(data.organization!==null?data.organization.email:[]);
    let [newEmail, setNewEmail] = useState('');
    let addEmail = ()=>{
        email = [...email, newEmail]
        setEmail(email)
        setNewEmail('')
    };
    let editEmail = (event, idx)=>{
        email[idx] = event.target.value
        setEmail([...email])
    };
    let deleteEmail = (idx)=>{
        email.splice(idx, 1);
        setEmail([...email])
    };
    let [phone, setPhone] = useState(data.organization!==null?data.organization.phone:[]);
    let [newPhone, setNewPhone] = useState('');
    let addPhone = ()=>{
        phone = [...phone, newPhone]
        setPhone(phone)
        setNewPhone('')
    };
    let editPhone = (event, idx)=>{
        phone[idx] = event.target.value
        setPhone([...phone])
    };
    let deletePhone = (idx)=>{
        phone.splice(idx, 1);
        setPhone([...phone])
    };
    let [info, setInfo] = useState(data.organization!==null?data.organization.info:'');
    let [miniInfo, setMiniInfo] = useState(data.organization&&data.organization.miniInfo?data.organization.miniInfo:'');
    let [preview, setPreview] = useState(data.organization!==null?data.organization.image:'');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        if(event.target.files[0].size/1024/1024<50){
            setImage(event.target.files[0])
            setPreview(URL.createObjectURL(event.target.files[0]))
        } else {
            showSnackBar('Файл слишком большой')
        }
    })
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog, setFullDialog, showFullDialog } = props.mini_dialogActions;
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={data.organization!==null?router.query.id==='new'?'Добавить':data.organization.name:'Ничего не найдено'}>
            <Head>
                <title>{data.organization!==null?router.query.id==='new'?'Добавить':data.organization.name:'Ничего не найдено'}</title>
                <meta name='description' content={info} />
                <meta property='og:title' content={data.organization!==null?router.query.id==='new'?'Добавить':data.organization.name:'Ничего не найдено'} />
                <meta property='og:description' content={info} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={preview} />
                <meta property="og:url" content={`${urlMain}/organization/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/organization/${router.query.id}`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={isMobileApp?classes.column:classes.row} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {
                        data.organization!==null?
                            profile.role==='admin'||(['суперорганизация', 'организация'].includes(profile.role)&&profile.organization===data.organization._id)?
                                <>
                                <div className={classes.column}>
                                    <label htmlFor='contained-button-file'>
                                        <img
                                            className={classes.media}
                                            src={preview}
                                            alt={'Добавить'}
                                        />
                                    </label>
                                    {
                                        profile.role==='admin'?
                                            <>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={accessToClient}
                                                        onChange={()=>{setAccessToClient(!accessToClient)}}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />
                                                }
                                                label='Доступ к клиентам'
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={consignation}
                                                        onChange={()=>{setConsignation(!consignation)}}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />
                                                }
                                                label='Консигнации'
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={onlyDistrict}
                                                        onChange={()=>{setOnlyDistrict(!onlyDistrict)}}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />
                                                }
                                                label='Только в районах'
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={onlyIntegrate}
                                                        onChange={()=>{setOnlyIntegrate(!onlyIntegrate)}}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />
                                                }
                                                label='Только по интеграции'
                                            />
                                            <br/>
                                            <div className={classes.geo} style={{color: warehouse&&warehouse.length>0?'#ffb300':'red'}} onClick={()=>{
                                                setFullDialog('Геолокация', <Geo change={true} geo={warehouse} setAddressGeo={setWarehouse}/>)
                                                showFullDialog(true)
                                            }}>
                                                Склад
                                            </div>
                                            </>
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                    <TextField
                                        label='Имя'
                                        value={name}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setName(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <TextField
                                        label='Профиль'
                                        value={miniInfo}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setMiniInfo(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Минимальный заказ</InputLabel>
                                        <Input
                                            type={isMobileApp?'number':'text'}
                                            value={minimumOrder}
                                            onChange={(event)=>{setMinimumOrder(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Приоритет</InputLabel>
                                        <Input
                                            type={isMobileApp?'number':'text'}
                                            value={priotiry}
                                            onChange={(event)=>{setPriotiry(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                    </FormControl>
                                    {address.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Адрес{idx+1}</InputLabel>
                                            <Input
                                                placeholder='Адрес'
                                                value={element}
                                                onChange={(event)=>{editAddress(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deleteAddress(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    )}
                                    <Button onClick={async()=>{
                                        addAddress()
                                    }} size='small' color='primary'>
                                        Добавить адрес
                                    </Button>
                                    <br/>
                                    <br/>
                                    {email.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Email{idx+1}</InputLabel>
                                            <Input
                                                value={element}
                                                onChange={(event)=>{editEmail(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deleteEmail(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    )}
                                    <Button onClick={async()=>{
                                        addEmail()
                                    }} size='small' color='primary'>
                                        Добавить email
                                    </Button>
                                    <br/>
                                    <br/>
                                    {phone.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Телефон{idx+1}</InputLabel>
                                            <Input
                                                value={element}
                                                onChange={(event)=>{editPhone(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deletePhone(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    )}
                                    <Button onClick={async()=>{
                                        addPhone()
                                    }} size='small' color='primary'>
                                        Добавить телефон
                                    </Button>
                                    <br/>
                                    <br/>
                                    <TextField
                                        multiline={true}
                                        label='Информация'
                                        value={info}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setInfo(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <div className={classes.row}>
                                        {
                                            router.query.id==='new'?
                                                <Button onClick={async()=>{
                                                    if (image!==undefined&&name.length>0&&email.length>0&&address.length>0&&phone.length>0&&info.length>0) {
                                                        const action = async() => {
                                                            await addOrganization({miniInfo: miniInfo, priotiry: checkInt(priotiry),consignation: consignation, onlyDistrict: onlyDistrict, onlyIntegrate: onlyIntegrate, warehouse: warehouse, accessToClient: accessToClient, image: image, name: name, address: address, email: email, phone: phone, info: info, minimumOrder: checkInt(minimumOrder)})
                                                            Router.push('/organizations')
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    } else {
                                                        showSnackBar('Заполните все поля')
                                                    }
                                                }} size='small' color='primary'>
                                                    Добавить
                                                </Button>
                                                :
                                                <>
                                                <Button onClick={async()=>{
                                                    let editElement = {_id: data.organization._id}
                                                    if(image!==undefined)editElement.image = image
                                                    if(name.length>0&&name!==data.organization.name)editElement.name = name
                                                    if(address.length>0&&address!==data.organization.address)editElement.address = address
                                                    if(email.length>0&&email!==data.organization.email)editElement.email = email
                                                    if(phone.length>0&&phone!==data.organization.phone)editElement.phone = phone
                                                    if(info.length>0&&info!==data.organization.info)editElement.info = info
                                                    if(miniInfo.length>0&&miniInfo!==data.organization.miniInfo)editElement.miniInfo = miniInfo
                                                    if(accessToClient!==data.organization.accessToClient)editElement.accessToClient = accessToClient
                                                    if(onlyDistrict!==data.organization.onlyDistrict)editElement.onlyDistrict = onlyDistrict
                                                    if(onlyIntegrate!==data.organization.onlyIntegrate)editElement.onlyIntegrate = onlyIntegrate
                                                    if(warehouse!==data.organization.warehouse)editElement.warehouse = warehouse
                                                    if(consignation!==data.organization.consignation)editElement.consignation = consignation
                                                    if(minimumOrder!==data.organization.minimumOrder)editElement.minimumOrder = checkInt(minimumOrder)
                                                    if(priotiry!==data.organization.priotiry)editElement.priotiry = checkInt(priotiry)
                                                    const action = async() => {
                                                        await setOrganization(editElement)
                                                    }
                                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }} size='small' color='primary'>
                                                    Сохранить
                                                </Button>
                                                {profile.role==='admin'?
                                                    <>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await onoffOrganization([data.organization._id])
                                                            setStatusO(statusO==='active'?'deactive':'active')
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        {statusO==='active'?'Отключить':'Включить'}
                                                    </Button>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await deleteOrganization([data.organization._id])
                                                            Router.push('/organizations')
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Удалить
                                                    </Button>
                                                    </>
                                                    :
                                                    null
                                                }
                                                </>
                                        }
                                    </div>
                                </div>
                                </>
                                :
                                router.query.id==='new'?
                                    'Ничего не найдено'
                                    :
                                    <>
                                    <img
                                        className={classes.media}
                                        src={preview}
                                        alt={name}
                                    />
                                    <div style={{width: isMobileApp?'100%':'calc(100% - 300px)'}}>
                                        <div className={classes.name}>
                                            {name}
                                        </div>
                                        <br/>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                Адрес:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {address.map((element, idx)=>
                                                    <div key={idx} className={classes.value}>
                                                        {element}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                Телефон:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {phone.map((element, idx)=>
                                                    <a href={`tel:${element}`} key={idx} className={classes.value}>
                                                        {element}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                E-mail:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {email.map((element, idx)=>
                                                    <a href={`mailto:${element}`} key={idx} className={classes.value}>
                                                        {element}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        {
                                            minimumOrder>0?
                                                <div className={classes.row}>
                                                    <div className={classes.nameField}>
                                                        Минимальный заказ:&nbsp;
                                                    </div>
                                                    <div className={classes.value}>
                                                        {minimumOrder}&nbsp;сом
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                        <br/>
                                        <div className={classes.info}>
                                            {info}
                                        </div>
                                    </div>
                                    </>
                            :
                            'Ничего не найдено'
                    }
                </CardContent>
            </Card>
            <input
                accept='image/*'
                style={{ display: 'none' }}
                id='contained-button-file'
                type='file'
                onChange={handleChangeImage}
            />
        </App>
    )
})

Organization.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!ctx.store.getState().user.profile.role)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    return {
        data: {
            ...ctx.query.id!=='new'?await getOrganization({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{organization:{name: '',image: '/static/add.png',address: [],email: [],phone: [],info: '',miniInfo: '',priotiry: 0,minimumOrder: 0,consignation: false,accessToClient: false, onlyDistrict: false, onlyIntegrate: false, warehouse: ''}}
        }

    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);