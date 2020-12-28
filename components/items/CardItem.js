import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cardItemStyle from '../../src/styleMUI/item/cardItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Link from 'next/link';
import { onoffItem, deleteItem, restoreItem } from '../../src/gql/items'
import Button from '@material-ui/core/Button';
import Confirmation from '../dialog/Confirmation'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { setItem } from '../../src/gql/items'


const CardItem = React.memo((props) => {
    const classes = cardItemStyle();
    const { element, setList, list, idx } = props;
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
                <Link href={`/${profile.role==='client'?'catalog':'item'}/[id]`} as={`/${profile.role==='client'?'catalog':'item'}/${profile.role==='client'?element.organization._id:element._id}`}>
                    <a>
                        <img
                            className={classes.media}
                            src={element.image}
                            alt={element.info}
                        />
                    </a>
                </Link>
                <Link href={`${profile.role==='client'?'catalog':'item'}/[id]`} as={`/${profile.role==='client'?'catalog':'item'}/${profile.role==='client'?element.organization._id:element._id}`}>
                    <a className={classes.name}>
                        {element.name}
                    </a>
                </Link>
                <Link href={`/${profile.role==='client'?'catalog':'item'}/[id]`} as={`/${profile.role==='client'?'catalog':'item'}/${profile.role==='client'?element.organization._id:element._id}`}>
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
                                                            await deleteItem([element._id])
                                                            let _list = [...list]
                                                            _list.splice(idx, 1)
                                                            setList(_list)
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
                                                            _list.splice(idx, 1)
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
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)