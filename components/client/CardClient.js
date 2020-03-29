import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardOrganizationStyle from '../../src/styleMUI/client/cardClient'
import { connect } from 'react-redux'
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { onoffClient, deleteClient } from '../../src/gql/client'
import { pdDDMMYYHHMM } from '../../src/lib'
import CardActions from '@material-ui/core/CardActions';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import NotificationsOff from '@material-ui/icons/NotificationsOff';
import Confirmation from '../../components/dialog/Confirmation'
import * as snackbarActions from '../../redux/actions/snackbar'
import { addAgentHistoryGeo } from '../../src/gql/agentHistoryGeo'
import {getGeoDistance} from '../../src/lib'
import Router from 'next/router'


const CardOrganization = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element, setList, idx, list } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [status, setStatus] = useState(element.user?element.user.status:'');
    const { showSnackBar } = props.snackbarActions;
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
               <CardActionArea>
                    <CardContent className={classes.line}>
                        {
                            profile.role==='admin'?
                                element.notification?
                                    <NotificationsActive color='primary' className={classes.notification}/>
                                    :
                                    <NotificationsOff color='secondary' className={classes.notification}/>
                                :
                                null
                        }
                        <Link href='/client/[id]' as={`/client/${element._id}`}>
                            <a>
                                <img
                                    className={classes.media}
                                    src={element.image?element.image:'/static/add.png'}
                                    alt={element.name}
                                />
                            </a>
                        </Link>
                        <Link href='/client/[id]' as={`/client/${element._id}`}>
                        <div style={{width: 'calc(100% - 70px)'}}>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Имя:&nbsp;
                                </div>
                                <div className={classes.value}>
                                    {element.name}
                                </div>
                            </div>
                            {element.phone?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Телефон:&nbsp;
                                    </div>
                                    <div>
                                        {element.phone.map((phone, idx)=>
                                            idx<4?
                                                <div key={`phone${idx}`} className={classes.value}>
                                                    {phone}
                                                </div>
                                                :
                                                idx===4?
                                                    '...'
                                                    :
                                                    null
                                        )}
                                    </div>
                                </div>
                                :
                                null
                            }
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Адрес:&nbsp;
                                </div>
                                <div>
                                    {element.address.map((addres, idx)=>
                                        idx<4?
                                            <div style={{color: addres[1]?'rgba(0, 0, 0, 0.87)':'red'}} key={`addres${idx}`} className={classes.value}>
                                                {`${addres[2]?`${addres[2]}, `:''}${addres[0]}`}
                                            </div>
                                            :
                                            idx===4?
                                                '...'
                                                :
                                                null
                                    )}
                                </div>
                            </div>
                            {profile.role==='admin'?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Регистрация:&nbsp;
                                    </div>
                                    <div className={classes.value}>
                                        {pdDDMMYYHHMM(new Date(element.createdAt))}
                                    </div>
                                </div>
                                :
                                null
                            }
                            {
                                profile.role==='admin'&&element.lastActive?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Активность:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {pdDDMMYYHHMM(new Date(element.lastActive))}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                profile.role==='admin'&&element.device?
                                    <div className={classes.row}>
                                        <div className={classes.value}>
                                            {element.device}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        </Link>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    ['агент', 'суперагент'].includes(profile.role) ?
                        <Button onClick={async()=>{
                            const action = () => {
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(async(position)=>{
                                        let distance = getGeoDistance(position.coords.latitude, position.coords.longitude, ...(element.address[0][1].split(', ')))
                                        if(distance<100){
                                            await addAgentHistoryGeo({client: element._id, geo: `${position.coords.latitude}, ${position.coords.longitude}`})
                                            Router.push(`/catalog?client=${element._id}`)
                                        }
                                        else
                                            showSnackBar('Вы слишком далеко')
                                    });
                                } else {
                                    showSnackBar('Геолокация не поддерживается')
                                }
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Посетил
                        </Button>
                        :
                        null
                }
                {
                    element.user&&['admin', 'суперагент'].includes(profile.role) ?
                        <Button onClick={async()=>{
                            if(['admin'].includes(profile.role)) {
                                const action = async () => {
                                    await onoffClient([element._id])
                                    setStatus(status === 'active' ? 'deactive' : 'active')
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }
                        }} size='small' color='primary'>
                            {status==='active'?'Отключить':'Включить'}
                        </Button>
                        :
                        null
                }
                {
                    profile.role==='admin' ?
                        <Button onClick={async()=>{
                            const action = async() => {
                                await deleteClient([element._id])
                                let _list = [...list]
                                _list.splice(_list.indexOf(element), 1)
                                setList(_list)
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Удалить
                        </Button>
                        :
                        null
                }
            </CardActions>
            </Card>
    );
})

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOrganization)