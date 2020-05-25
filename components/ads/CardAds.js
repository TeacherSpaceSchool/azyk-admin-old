import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardAdsStyle from '../../src/styleMUI/ads/cardAds'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteAds, addAds, setAds, restoreAds } from '../../src/gql/ads'
import { checkInt } from '../../src/lib'
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as snackbarActions from '../../redux/actions/snackbar'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Confirmation from '../dialog/Confirmation'
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const CardAds = React.memo((props) => {
    const classes = cardAdsStyle();
    const { element, setList, organization, list, items, edit } = props;
    const { profile } = props.user;
    const { isMobileApp } = props.app;
    //addCard
    let [preview, setPreview] = useState(element?element.image:'/static/add.png');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        if(event.target.files[0].size/1024/1024<50){
            setImage(event.target.files[0])
            setPreview(URL.createObjectURL(event.target.files[0]))
        } else {
            showSnackBar('Файл слишком большой')
        }
    })
    let [title, setTitle] = useState(element?element.title:'');
    let handleTitle =  (event) => {
        setTitle(event.target.value)
    };
    let [count, setCount] = useState(element?element.count:0);
    let handleCount=  (event) => {
        setCount(checkInt(event.target.value))
    };
    let [item, setItem] = useState(element?element.item:undefined);
    let [targetItem, setTargetItem ] = useState(element?element.targetItem:undefined);
    let [targetCount, setTargetCount ] = useState(element?element.targetCount:0);
    let handleTargetCount =  (event) => {
        setTargetCount(checkInt(event.target.value))
    };
    let [targetPrice, setTargetPrice ] = useState(element?element.targetPrice:0);
    let handleTargetPrice =  (event) => {
        setTargetPrice(checkInt(event.target.value))
    };
    let [multiplier , setMultiplier] = useState(element?element.multiplier:false);
    let [targetType, setTargetType] = useState(element?element.targetType:'Цена');
    let handleTargetType =  (event) => {
        setTargetType(event.target.value)
    };
    const targetTypes = ['Цена', 'Товар']
    let [url, setUrl] = useState(element?element.url:'');
    let handleUrl =  (event) => {
        setUrl(event.target.value)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
          <> {
                profile.role === 'admin' && edit ?
                    <Card className={isMobileApp?classes.cardM:classes.cardD}>
                        <label htmlFor={element?element._id:'add'}>
                            <img
                                className={isMobileApp?classes.mediaM:classes.mediaD}
                                src={preview}
                                alt={'Изменить'}
                            />
                        </label>
                        <CardContent>
                                <TextField
                                    label='Текст'
                                    value={title}
                                    className={classes.input}
                                    onChange={handleTitle}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    label='URL'
                                    value={url}
                                    className={classes.input}
                                    onChange={handleUrl}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                                <br/>
                                <br/>
                                <Autocomplete
                                    className={classes.input}
                                    options={items}
                                    getOptionLabel={option => option.name}
                                    value={item}
                                    onChange={(event, newValue) => {
                                        setItem(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Товар' fullWidth />
                                    )}/>
                                <br/>
                                <TextField
                                    label='Количество'
                                    value={count}
                                    className={classes.input}
                                    onChange={handleCount}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                            <br/>
                            <br/>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={multiplier}
                                        onChange={()=>{setMultiplier(!multiplier)}}
                                        color='primary'
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Множитель'
                            />
                            <br/>
                            <br/>
                            <FormControl className={classes.input} variant='outlined'>
                                <InputLabel>Цель</InputLabel>
                                <Select
                                    value={targetType}
                                    onChange={handleTargetType}
                                    input={<Input/>}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 226,
                                                width: 250,
                                            },
                                        }
                                    }}
                                >
                                    {targetTypes.map((targetType) => (
                                        <MenuItem key={targetType} value={targetType}>
                                            {targetType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br/>
                            <br/>
                            {
                                targetType==='Цена'?
                                    <TextField
                                        label='Целевая цена'
                                        value={targetPrice}
                                        className={classes.input}
                                        onChange={handleTargetPrice}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    :
                                    <>
                                    <Autocomplete
                                        className={classes.input}
                                        options={items}
                                        getOptionLabel={option => option.name}
                                        value={targetItem}
                                        onChange={(event, newValue) => {
                                            setTargetItem(newValue)
                                        }}
                                        noOptionsText='Ничего не найдено'
                                        renderInput={params => (
                                            <TextField {...params} label='Целевой товар' fullWidth />
                                        )}
                                    />
                                    <br/>
                                    <TextField
                                        label='Целевое количество'
                                        value={targetCount}
                                        className={classes.input}
                                        onChange={handleTargetCount}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    </>
                            }
                        </CardContent>
                        <CardActions>
                            {
                                   element!==undefined?
                                        element.del!=='deleted'?
                                        <>
                                        <Button onClick={async()=>{
                                            let editElement = {_id: element._id}
                                            if(title.length>0&&title!==element.title)editElement.title = title
                                            if(url.length>0&&url!==element.url)editElement.url = url
                                            if(count!==element.count)editElement.count = count
                                            if(targetCount!==element.targetCount)editElement.targetCount = targetCount
                                            if(targetPrice!==element.targetPrice)editElement.targetPrice = targetPrice
                                            if(multiplier!==element.multiplier)editElement.multiplier = multiplier
                                            if(targetType!==element.targetType)editElement.targetType = targetType
                                            editElement.item = item?item._id:undefined
                                            editElement.targetItem = targetItem?targetItem._id:undefined
                                            if(image)editElement.image = image
                                            const action = async() => {
                                                setList((await setAds(editElement, organization)).adss)
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }} size='small' color='primary'>
                                            Сохранить
                                        </Button>
                                        <Button onClick={async()=>{
                                            const action = async() => {
                                                setList((await deleteAds([element._id], organization)).adss)
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }} size='small' color='primary'>
                                            Удалить
                                        </Button>
                                        </>
                                            :
                                        <Button onClick={async()=>{
                                const action = async() => {
                                await restoreAds([element._id])
                                let _list = [...list]
                                _list.splice(_list.indexOf(element), 1)
                                setList(_list)
                            }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Восстановить
                                </Button>
                                        :
                                        <Button onClick={async()=> {
                                            if (image && url.length > 0 && title.length > 0) {
                                                setImage(undefined)
                                                setPreview('/static/add.png')
                                                setTitle('')
                                                setUrl('')
                                                setCount(0)
                                                setItem(undefined)
                                                const action = async() => {
                                                    setList((await addAds({count: count, item: item?item._id:undefined, organization: organization, image: image, url: url, title: title, targetItem: targetItem, targetCount: targetCount, targetPrice: targetPrice, multiplier: multiplier, targetType: targetType}, organization)).adss)
                                                }
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            } else {
                                                showSnackBar('Заполните все поля')
                                            }
                                        }
                                        } size='small' color='primary'>
                                            Добавить
                                        </Button>
                            }
                        </CardActions>
                        <input
                            accept='image/*'
                            style={{ display: 'none' }}
                            id={element?element._id:'add'}
                            type='file'
                            onChange={handleChangeImage}
                        />
                    </Card>
                    :
                    element?
                        <Card className={isMobileApp?classes.cardM:classes.cardD}>
                            <CardActionArea>
                                <a href={element.url}>
                                    <img
                                        className={isMobileApp?classes.mediaM:classes.mediaD}
                                        alt={element.title}
                                        src={element.image}
                                    />
                                </a>
                                <div style={{fontSize: '1rem', margin: 20, whiteSpace: 'pre-wrap'}}>
                                    {element.title}
                                </div>
                            </CardActionArea>
                        </Card>
                        :null
            }</>
    );
})

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

export default connect(mapStateToProps, mapDispatchToProps)(CardAds)