import initialApp from '../../src/initialApp'
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getSubCategorys } from '../../src/gql/subcategory'
import { getOrganizations } from '../../src/gql/organization'
import { getItem, addItem, setItem, onoffItem, deleteItem, favoriteItem } from '../../src/gql/items'
import { addBasket } from '../../src/gql/basket'
import { checkInt, checkFloat } from '../../src/lib'
import itemStyle from '../../src/styleMUI/item/item'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
    FacebookShareButton,
    VKShareButton,
    OKShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    FacebookIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
} from 'react-share';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import Star from '@material-ui/icons/Star';
import TextField from '@material-ui/core/TextField';
import Confirmation from '../../components/dialog/Confirmation'
import { urlMain } from '../../redux/constants/other'
import DeliveryDays from '../../components/dialog/DeliveryDays';
import { getCountBasket } from '../../src/gql/basket'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import { getClientGqlSsr } from '../../src/getClientGQL'

const Item = React.memo((props) => {
    const classes = itemStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;
    const { profile, authenticated } = props.user;
    let [stock, setStock] = useState(data.item!==null?data.item.stock:'');
    let [unit, setUnit] = useState(data.item?data.item.unit:'');
    let [name, setName] = useState(data.item!==null?data.item.name:'');
    let [info, setInfo] = useState(data.item!==null?data.item.info:'');
    let [price, setPrice] = useState(data.item!==null?data.item.price:'');
    let [deliveryDays, setDeliveryDays] = useState(data.item!==null?data.item.deliveryDays:[]);
    let [subCategory, setSubCategory] = useState(data.item!==null?data.item.subCategory:{});
    let [status, setStatus] = useState(data.item!==null?data.item.status:'');
    let handleSubCategory =  (event) => {
        setSubCategory({_id: event.target.value, name: event.target.name})
    };
    let [weight, setWeight] = useState(data.item&&data.item.weight?data.item.weight:0);
    let [size, setSize] = useState(data.item&&data.item.size?data.item.size:0);
    let [priotiry, setPriotiry] = useState(data.item&&data.item.priotiry?data.item.priotiry:0);
    let [organization, setOrganization] = useState(data.item!==null?data.item.organization:{});
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [hit, setHit] = useState(data.item!==null?data.item.hit:false);
    let [latest, setLatest] = useState(data.item!==null?data.item.latest:false);
    let [apiece, setApiece] = useState(data.item!==null?data.item.apiece:false);
    let [preview, setPreview] = useState(data.item!==null?data.item.image:'');
    let [image, setImage] = useState(undefined);
    let [packaging, setPackaging] = useState(data.item&&data.item.packaging?data.item.packaging:1);
    let handleChangeImage = ((event) => {
        if(event.target.files[0].size/1024/1024<50){
            setImage(event.target.files[0])
            setPreview(URL.createObjectURL(event.target.files[0]))
        } else {
            showSnackBar('Файл слишком большой')
        }
    })
    useEffect(()=>{
        (async()=>{
            if(!organization._id&&['суперорганизация', 'организация', 'экспедитор'].includes(profile.role)){
                let organzation = data.organizations.filter(organization=>organization._id===profile.organization)
                setOrganization(organzation[0])
            }
        })()
    },[profile])
    //BUY
    let [count, setCount] = useState(data.item.apiece?1:packaging);
    let increment = ()=>{
        if(!data.item.apiece)
            count+=packaging
        else
            count+=1
        setCount(count)
    }
    let decrement = ()=>{
        if(!data.item.apiece&&count>packaging)
            count-=packaging
        else if(data.item.apiece&&count>1)
                count-=1
        setCount(count)
    }
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    let [favorite, setFavorite] = useState(data.item!==null&&data.item.favorite!==undefined?data.item.favorite:[]);
    return (
        <App filters={data.filterItem} sorts={data.sortItem} pageName={data.item!==null?router.query.id==='new'?'Добавить':data.item.name:'Ничего не найдено'}>
            <Head>
                <title>{data.item!==null?router.query.id==='new'?'Добавить':data.item.name:'Ничего не найдено'}</title>
                <meta name='description' content={data.item!==null?data.item.info:'Ничего не найдено'} />
                <meta property='og:title' content={data.item!==null?router.query.id==='new'?'Добавить':data.item.name:'Ничего не найдено'} />
                <meta property='og:description' content={data.item!==null?data.item.info:'Ничего не найдено'} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={preview} />
                <meta property="og:url" content={`${urlMain}/item/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/item/${router.query.id}`}/>
            </Head>
            {
                (router.query.id!=='new'&&['client', 'admin'].includes(profile.role)&&data.item.subCategory)?
                    <Breadcrumbs style={{margin: 20}} aria-label='breadcrumb'>
                        <Link href='/category'>
                            <a>
                                Категории
                            </a>
                        </Link>
                        <Link href='/subcategory/[id]' as={`/subcategory/${data.item.subCategory.category._id}`}>
                            <a>
                                {data.item.subCategory.category.name}
                            </a>
                        </Link>
                        <Link href='/items/[id]' as={`/items/${data.item.subCategory._id}`}>
                            <a>
                                {data.item.subCategory.name}
                            </a>
                        </Link>
                        {
                            data.item?
                                <Typography color='textPrimary'>
                                    {data.item.name}
                                </Typography>
                                :
                                null
                        }
                    </Breadcrumbs>
                    :null
            }
            <Card className={classes.page}>
                    <CardContent className={isMobileApp?classes.column:classes.row}>
                        {
                            profile.role==='admin'||(['суперорганизация', 'организация'].includes(profile.role)&&organization._id===profile.organization)?
                                data.item!==null||router.query.id==='new'?
                                    <>
                                    <div className={classes.column}>
                                        <label htmlFor='contained-button-file'>
                                            <img
                                                className={classes.media}
                                                src={preview}
                                                alt={'Добавить'}
                                            />
                                        </label>
                                        <br/>
                                        <div className={classes.row}>
                                            {
                                                profile.role==='admin'?
                                                    <FormControlLabel
                                                        labelPlacement = 'bottom'
                                                        style={{zoom: 0.82}}
                                                        control={
                                                            <Switch
                                                                checked={hit}
                                                                onChange={()=>{setHit(!hit)}}
                                                                color="primary"
                                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                            />
                                                        }
                                                        label='Популярное'
                                                    />
                                                    :
                                                    null
                                            }
                                            {
                                                profile.role==='admin'?
                                                    <FormControlLabel
                                                        labelPlacement = 'bottom'
                                                        style={{zoom: 0.82}}
                                                        control={
                                                            <Switch
                                                                checked={latest}
                                                                onChange={()=>{setLatest(!latest)}}
                                                                color="primary"
                                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                            />
                                                        }
                                                        label='Новинка'
                                                    />
                                                    :
                                                    null
                                            }
                                            <FormControlLabel
                                                labelPlacement = 'bottom'
                                                style={{zoom: 0.82}}
                                                control={
                                                    <Switch
                                                        checked={apiece}
                                                        onChange={()=>{setApiece(!apiece)}}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />
                                                }
                                                label='Поштучно'
                                            />
                                        </div>
                                        <br/>
                                    </div>
                                    <div>
                                        <h1 className={classes.name}>
                                            <TextField
                                                label='Имя'
                                                value={name}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{setName(event.target.value)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </h1>
                                        <div className={classes.price}>
                                            <TextField
                                                type={isMobileApp?'number':'text'}
                                                label='Приоритет'
                                                value={priotiry}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{
                                                    setPriotiry(event.target.value)}
                                                }
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </div>
                                        <div className={classes.price}>
                                            <TextField
                                                label='Единица измерения'
                                                value={unit}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{
                                                    setUnit(event.target.value)}
                                                }
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </div>
                                        <div className={classes.price}>
                                            <TextField
                                                type={isMobileApp?'number':'text'}
                                                label='Вес в килограммах'
                                                value={weight}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{
                                                    while((event.target.value).includes(','))
                                                        event.target.value = (event.target.value).replace(',', '.')
                                                    setWeight(event.target.value)}
                                                }
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </div>
                                        <div className={classes.price}>
                                            <TextField
                                                type={isMobileApp?'number':'text'}
                                                label='Кубатура в см³'
                                                value={size}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{
                                                    while((event.target.value).includes(','))
                                                        event.target.value = (event.target.value).replace(',', '.')
                                                    setSize(event.target.value)}
                                                }
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </div>
                                        <div className={classes.price}>
                                            <TextField
                                                type={isMobileApp?'number':'text'}
                                                label='Упаковка'
                                                value={packaging}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{setPackaging(event.target.value)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </div>
                                            <div className={classes.price}>
                                                <TextField
                                                    type={isMobileApp?'number':'text'}
                                                    label='Цена'
                                                    value={price}
                                                    className={isMobileApp?classes.inputM:classes.inputD}
                                                    onChange={(event)=>{
                                                        while((event.target.value).includes(','))
                                                            event.target.value = (event.target.value).replace(',', '.')
                                                        setPrice(event.target.value)
                                                    }}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                    }}
                                                />
                                            </div>
                                            <div className={classes.price}>
                                                <TextField
                                                    type={isMobileApp?'number':'text'}
                                                    label='Скидка'
                                                    value={stock}
                                                    className={isMobileApp?classes.inputM:classes.inputD}
                                                    onChange={(event)=>{setStock(event.target.value)}}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                    }}
                                                />
                                            </div>
                                        {profile.role==='admin'?
                                            <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                                <InputLabel>Организация</InputLabel>
                                                <Select value={organization._id}onChange={handleOrganization}>
                                                    {data.organizations.map((element)=>
                                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                            :
                                            <Input
                                                value={organization.name}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                    readOnly: true,
                                                }}
                                            />
                                        }
                                        <br/>
                                        <Button size='small' color='primary' onClick={()=>{
                                            setMiniDialog('Дни поставки', <DeliveryDays deliveryDays={deliveryDays} setDeliveryDays={setDeliveryDays} edit={true}/>)
                                            showMiniDialog(true)
                                        }}>
                                            Дни поставки для торговых точек
                                        </Button>
                                        <br/>
                                        <br/>
                                        <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Подкатегория</InputLabel>
                                            <Select value={subCategory._id}onChange={handleSubCategory}>
                                                {data.subCategorys.map((element)=>
                                                    <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
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
                                        <br/>
                                        <div className={classes.row}>
                                            {
                                                router.query.id==='new'?
                                                    <Button onClick={async()=>{
                                                        if (name.length>0&&price>0&&subCategory._id!=undefined&&organization._id!=undefined) {
                                                            const action = async() => {
                                                                await addItem({
                                                                    packaging: checkInt(packaging)>0?checkInt(packaging):1,
                                                                    name: name,
                                                                    stock: checkInt(stock),
                                                                    image: image,
                                                                    info: info,
                                                                    price: checkFloat(price),
                                                                    subCategory: subCategory._id,
                                                                    hit: hit,
                                                                    latest: latest,
                                                                    organization: organization._id,
                                                                    deliveryDays: deliveryDays,
                                                                    weight: checkFloat(weight),
                                                                    size: checkFloat(size),
                                                                    apiece: apiece,
                                                                    unit: unit,
                                                                    priotiry: checkInt(priotiry)
                                                                }, subCategory._id)
                                                                Router.push(`/items/${subCategory._id}`)
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
                                                        let editElement = {_id: data.item._id}
                                                        if(stock!==data.item.stock)editElement.stock = checkInt(stock)
                                                        if(name.length>0&&name!==data.item.name)editElement.name = name
                                                        if(packaging!==data.item.packaging&&checkInt(packaging)>0)editElement.packaging = checkInt(packaging)
                                                        if(image!==undefined)editElement.image = image
                                                        if(info.length>0&&info!==data.item.info)editElement.info = info
                                                        if(price>0&&price!==data.item.price)editElement.price = checkFloat(price)
                                                        if(weight!==data.item.weight)editElement.weight = checkFloat(weight)
                                                        if(size!==data.item.size)editElement.size = checkFloat(size)
                                                        if(hit!==data.item.hit)editElement.hit = hit
                                                        if(apiece!==data.item.apiece)editElement.apiece = apiece
                                                        if(unit!==data.item.unit)editElement.unit = unit
                                                        if(latest!==data.item.latest)editElement.latest = latest
                                                        if(organization._id!==data.item.organization._id)editElement.organization = organization._id
                                                        if(subCategory._id!==data.item.subCategory._id)editElement.subCategory = subCategory._id
                                                        if(priotiry!==data.item.priotiry)editElement.priotiry = checkInt(priotiry)
                                                        if(deliveryDays)editElement.deliveryDays = deliveryDays
                                                        const action = async() => {
                                                            await setItem(editElement, subCategory._id)
                                                            //Router.push(`/items/${subCategory._id}`)
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Сохранить
                                                    </Button>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await onoffItem([data.item._id])
                                                            setStatus(status==='active'?'deactive':'active')
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        {status==='active'?'Отключить':'Включить'}
                                                    </Button>
                                                    {
                                                        profile.role==='admin'?
                                                            <Button onClick={async()=>{
                                                                const action = async() => {
                                                                    await deleteItem([data.item._id], subCategory._id)
                                                                    Router.push(`/items/${subCategory._id}`)
                                                                }
                                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                                showMiniDialog(true)
                                                            }} size='small' color='primary'>
                                                                Удалить
                                                            </Button>
                                                            :
                                                            null
                                                    }
                                                    </>
                                            }
                                        </div>

                                    </div>
                                    </>
                                    :
                                    'Ничего не найдено'

                                :
                                data.item===null||router.query.id==='new'?
                                    'Ничего не найдено'
                                    :
                                    <>
                                    <div className={classes.divImage}>
                                        <img
                                            className={classes.media}
                                            src={data.item.image}
                                            alt={data.item.info}
                                        />
                                        {
                                            profile.role==='client'?
                                                <>
                                                <Star className={classes.buttonToggle} onClick={async ()=>{
                                                    let index
                                                        await favoriteItem([data.item._id])
                                                        index = favorite.indexOf(profile._id)
                                                        if (index === -1) {
                                                            favorite.push(profile._id)
                                                            setFavorite([...favorite])
                                                        }

                                                    if (index !== -1) {
                                                        const action = async() => {
                                                                favorite.splice(index, 1)
                                                                setFavorite([...favorite])
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }
                                                }} style={{color: (profile.role=='client'&&favorite.includes(profile._id))?'#ffb300':'#e1e1e1'}}  />
                                                <div className={classes.chipList}>
                                                    {
                                                        data.item.latest?
                                                            <div className={classes.chip} style={{color: 'white',background: 'green'}}>
                                                                Новинка
                                                            </div>
                                                            :null
                                                    }
                                                    {
                                                        data.item.hit?
                                                            <div className={classes.chip} style={{color: 'black',background: 'yellow'}}>
                                                                Хит
                                                            </div>
                                                            :null
                                                    }
                                                </div>
                                                </>
                                                :
                                                null
                                        }
                                    </div>
                                    <div>
                                        {
                                            isMobileApp?
                                                <br/>
                                                :
                                                null
                                        }
                                        <h1 className={classes.name}>
                                            {data.item.name}
                                        </h1>
                                        <Link href='/organization/[id]' as={`/organization/${data.item.organization._id}`}>
                                            <div className={classes.share}>
                                                {data.item.organization.name}
                                            </div>
                                        </Link>
                                        <div className={classes.deliveryDays} onClick={()=>{
                                            setMiniDialog('Дни поставки', <DeliveryDays deliveryDays={deliveryDays} setDeliveryDays={setDeliveryDays} edit={false}/>)
                                            showMiniDialog(true)
                                        }}>
                                            Дни поставки для торговых точек
                                        </div>
                                        <br/>
                                        <div className={classes.row}>
                                            {
                                                data.item.stock===0||data.item.stock===undefined?
                                                    <div className={classes.price}>
                                                        {Math.round(count*data.item.price)}&nbsp;сом
                                                    </div>
                                                    :
                                                    <>
                                                    <div className={classes.stockPrice}>
                                                        {Math.round(count*data.item.stock)}&nbsp;сом
                                                    </div>
                                                    <div className={classes.crossedPrice}>
                                                        {Math.round(count*data.item.price)}&nbsp;сом
                                                    </div>
                                                    </>
                                            }
                                        </div>
                                        <br/>
                                        {
                                            ['client'].includes(profile.role)?
                                                <>
                                                {
                                                    isMobileApp?
                                                        <>
                                                        <div className={isMobileApp?classes.column:classes.rowCenter}>
                                                            <div className={classes.counter} style={isMobileApp?{}:{marginRight: 20}}>
                                                                <div className={classes.counterbtn} onClick={decrement}>–</div>
                                                                <input type='number' readOnly={!data.item.apiece} className={classes.counternmbr} value={count} onChange={(event)=>{
                                                                    setCount(event.target.value)
                                                                }}/>
                                                                <div className={classes.counterbtn} onClick={increment}>+</div>
                                                            </div>
                                                            {
                                                                data.item.apiece?
                                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                        count = (parseInt(count/packaging)+1)*packaging
                                                                        setCount(count)
                                                                    }}>
                                                                        Добавить упаковку
                                                                    </div>
                                                                    :
                                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                                       Упаковок: {(count/packaging)}
                                                                    </div>
                                                            }
                                                            <Button
                                                                variant='contained'
                                                                color='primary'
                                                                className={classes.button}
                                                                onClick={()=>{
                                                                    if(count>0) {
                                                                        addBasket({
                                                                                item: data.item._id,
                                                                                count: count > 0 ? checkInt(count) : 1
                                                                            })
                                                                        showSnackBar('Товар добавлен в корзину')
                                                                        getCountBasket()
                                                                    }
                                                                }}
                                                            >
                                                                В КОРЗИНУ
                                                            </Button>
                                                        </div>
                                                        <br/>
                                                        </>
                                                        :
                                                        <>
                                                        <div className={isMobileApp?classes.column:classes.rowCenter}>
                                                            <div className={classes.counter} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                                <div className={classes.counterbtn} onClick={decrement}>–</div>
                                                                <input type='text' readOnly={!data.item.apiece} className={classes.counternmbr} value={count} onChange={(event)=>{
                                                                    setCount(event.target.value)
                                                                }}/>
                                                                <div className={classes.counterbtn} onClick={increment}>+</div>
                                                            </div>
                                                            <Button
                                                                variant='contained'
                                                                color='primary'
                                                                className={classes.button}
                                                                onClick={()=>{
                                                                    if(count>0) {
                                                                            addBasket({
                                                                                item: data.item._id,
                                                                                count: count > 0 ? checkInt(count) : 1
                                                                            })
                                                                        showSnackBar('Товар добавлен в корзину')
                                                                        getCountBasket()
                                                                    }
                                                                }}
                                                            >
                                                                В КОРЗИНУ
                                                            </Button>
                                                        </div>
                                                        {
                                                            data.item.apiece?
                                                                <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                    count = (parseInt(count/packaging)+1)*packaging
                                                                    setCount(count)
                                                                }}>
                                                                    Добавить упаковку
                                                                </div>
                                                                :
                                                                <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                                   Упаковок: {(count/packaging)}
                                                                </div>
                                                        }
                                                        </>
                                                }
                                                <div className={classes.share}>
                                                    Поделиться:
                                                </div>
                                                <div className={classes.rowCenter}>
                                                    <FacebookShareButton
                                                        url={process.browser?window.location.href.toString():''}
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round />
                                                    </FacebookShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <VKShareButton url={process.browser?window.location.href:''}>
                                                        <VKIcon
                                                            size={32}
                                                            round />
                                                    </VKShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <OKShareButton url={process.browser?window.location.href:''}>
                                                        <OKIcon
                                                            size={32}
                                                            round />
                                                    </OKShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <WhatsappShareButton url={process.browser?window.location.href:''}>
                                                        <WhatsappIcon
                                                            size={32}
                                                            round />
                                                    </WhatsappShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <TelegramShareButton url={process.browser?window.location.href:''}>
                                                        <TelegramIcon
                                                            size={32}
                                                            round />
                                                    </TelegramShareButton>
                                                </div>
                                                </>
                                                :
                                                null

                                        }
                                    </div>
                                    </>
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

Item.getInitialProps = async function(ctx) {
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
            ...ctx.query.id!=='new'?await getItem({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{
                    item:{
                        priotiry: 0,
                        image: '/static/add.png',
                        stock: 0,
                        packaging: 1,
                        name: '',
                        info: '',
                        price: 0,
                        subCategory: {_id: ''},
                        organization: {_id: ''},
                        hit: false,
                        latest: false,
                        deliveryDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
                    }
                },
            ...await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getSubCategorys({category: 'all', search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);