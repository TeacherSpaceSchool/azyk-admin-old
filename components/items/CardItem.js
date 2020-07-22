import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cardItemStyle from '../../src/styleMUI/item/cardItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import Link from 'next/link';
import { onoffItem, deleteItem, restoreItem } from '../../src/gql/items'
import Button from '@material-ui/core/Button';
import Confirmation from '../dialog/Confirmation'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { setItem } from '../../src/gql/items'


const CardItem = React.memo((props) => {
    const classes = cardItemStyle();
    const { element, setList, subCategory, list } = props;
    const { profile } = props.user;
    let [status, setStatus] = useState(element!==undefined?element.status:'');
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [hit, setHit] = useState(element.hit);
    let [latest, setLatest] = useState(element.latest);
    let [apiece, setApiece] = useState(element.apiece);
    return (
        <Card className={classes.card}>
            <CardContent className={classes.column}>
                <div className={classes.chipList}>{
                    element.del!=='deleted'&&profile.role==='admin'?
                        <>
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={hit}
                                        onChange={async ()=>{
                                            let _hit = !hit
                                            await setItem({_id: element._id, hit: _hit})
                                            setHit(_hit)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Популярное'
                            />
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={latest}
                                        onChange={async()=>{
                                            let _latest = !latest
                                            await setItem({_id: element._id, latest: _latest})
                                            setLatest(_latest)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Новинка'
                            />
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={apiece}
                                        onChange={async ()=>{
                                            let _apiece = !apiece
                                            await setItem({_id: element._id, apiece: _apiece})
                                            setApiece(_apiece)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Поштучно'
                            />
                        </>
                        :
                        <>
                        {
                            element.latest?
                                <div className={classes.chip} style={{color: 'white',background: 'green'}}>
                                    Новинка
                                </div>
                                :null
                        }
                        {
                            element.hit?
                                <>
                                <div className={classes.chip} style={{color: 'black',background: 'yellow'}}>
                                    Хит
                                </div>
                                </>
                                :null
                        }
                        </>
                }
                </div>
                {profile.role==='client'?
                    <>
                    <img
                        className={classes.media}
                        src={element.image}
                        alt={element.info}
                    />
                    <div className={classes.name}>
                        {element.name}
                    </div>
                    <div className={classes.row}>
                            {
                                element.stock===0||element.stock===undefined?
                                    <div className={classes.price}>
                                        {`${element.price} сом`}
                                    </div>
                                    :
                                    <>
                                    <div className={classes.crossedPrice}>
                                        {`${element.price}`}
                                    </div>
                                    <div className={classes.stockPrice}>
                                        {`${element.stock} сом`}
                                    </div>
                                    </>
                            }
                        </div>
                    </>
                    :
                    <>
                    <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                        <a>
                            <img
                                className={classes.media}
                                src={element.image}
                                alt={element.info}
                            />
                        </a>
                    </Link>
                    <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                        <a className={classes.name}>
                            {element.name}
                        </a>
                    </Link>
                    <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                        <div className={classes.row}>
                            {
                                element.stock===0||element.stock===undefined?
                                    <div className={classes.price}>
                                        {`${element.price} сом`}
                                    </div>
                                    :
                                    <>
                                    <div className={classes.crossedPrice}>
                                        {`${element.price}`}
                                    </div>
                                    <div className={classes.stockPrice}>
                                        {`${element.stock} сом`}
                                    </div>
                                    </>
                            }
                        </div>
                    </Link>
                    </>
                }
                                        {'admin'===profile.role||(['суперорганизация', 'организация'].includes(profile.role)&&profile.organization===element.organization._id)?
                                            element.del!=='deleted'?
                                            <>
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await onoffItem([element._id])
                                                    setStatus(status==='active'?'deactive':'active')
                                                }
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color={status==='active'?'primary':'secondary'}>
                                                {status==='active'?'Отключить':'Включить'}
                                            </Button>
                                            {
                                                'admin'===profile.role?
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            const list = (await deleteItem([element._id], subCategory)).items
                                                            setList(list)
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Удалить
                                                    </Button>:null
                                            }
                                            </>
                                                :
                                                element.del==='deleted'&&profile.role==='admin'?
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await restoreItem([element._id])
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
                                                    null
                                            :
                                                null
                                        }
            </CardContent>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)