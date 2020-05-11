import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { Map, YMaps, Placemark, TrafficControl } from 'react-yandex-maps';
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addAgentHistoryGeo } from '../../src/gql/agentHistoryGeo'
import {getGeoDistance} from '../../src/lib'
import Router from 'next/router'
import Confirmation from '../../components/dialog/Confirmation'
import Fab from '@material-ui/core/Fab';
import GpsFixed from '@material-ui/icons/GpsFixed';

const Geo =  React.memo(
    (props) =>{
        const { showFullDialog } = props.mini_dialogActions;
        const { showSnackBar } = props.snackbarActions;
        const { profile } = props.user;
        const { classes, clients } = props;
        let [geo, setGeo] = useState(null);
        const searchTimeOutRef = useRef(null);
        useEffect(()=>{
            if (navigator.geolocation) {
                searchTimeOutRef.current = setTimeout(() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setGeo([position.coords.latitude, position.coords.longitude])
                    });
                }, 1000)
                return ()=>{
                    clearTimeout(searchTimeOutRef.current)
                }
            } else {
                showSnackBar('Геолокация не поддерживается')
            }
        });
        let [load, setLoad] = useState(true);
        let [follow, setFollow] = useState(false);

        return (
            <YMaps>
                <div className={classes.column}>
                    <div style={{height: window.innerHeight-128, width: window.innerWidth-48, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            load?<CircularProgress/>:null
                        }
                        {geo&&follow?
                            <div style={{display: load?'none':'block'}}>
                                <Map onLoad={()=>{setLoad(false)}} height={window.innerHeight-128} width={window.innerWidth-48} defaultState={{ center: ['42.8700000', '74.5900000'], zoom: 12 }}
                                     state={{ center: geo, zoom: 18 }}>
                                    <TrafficControl options={{ float: 'right' }} />
                                    {clients.map((client, idx)=> {
                                            if(client.user.status==='active'&&client.address[0]&&client.address[0][1])
                                                return <Placemark
                                                    onClick={() => {
                                                        if(['агент', 'суперагент'].includes(profile.role)) {
                                                            Router.push(`/catalog?client=${client._id}`)
                                                            showFullDialog(false)
                                                        }
                                                    }}
                                                    key={idx}
                                                    options={{
                                                        draggable: false,
                                                        iconColor: '#ffb300'
                                                    }}
                                                    properties={{iconCaption: `${client.address[0][2] ? `${client.address[0][2]}, ` : ''}${client.address[0][0]}`}}
                                                    geometry={client.address[0][1].split(', ')}/>
                                        }
                                    )}
                                    {geo?
                                        <Placemark
                                            options={{draggable: false, iconColor: 'indigo'}}
                                            properties={{iconCaption: 'Я'}}
                                            geometry={geo} />
                                        :
                                        null
                                    }
                                </Map>
                            </div>
                            :
                            <div style={{display: load?'none':'block'}}>
                                <Map onLoad={()=>{setLoad(false)}} height={window.innerHeight-128} width={window.innerWidth-48} defaultState={{ center: ['42.8700000', '74.5900000'], zoom: 12 }}>
                                    <TrafficControl options={{ float: 'right' }} />
                                    {clients.map((client, idx)=> {
                                        if(client.user.status==='active'&&client.address[0]&&client.address[0][1]) return <Placemark
                                            onClick={() => {
                                                if(['агент', 'суперагент'].includes(profile.role)) {
                                                    Router.push(`/catalog?client=${client._id}`)
                                                    showFullDialog(false)
                                                }
                                            }}
                                            key={idx}
                                            options={{
                                                draggable: false,
                                                iconColor: '#ffb300'
                                            }}
                                            properties={{iconCaption: `${client.address[0][2] ? `${client.address[0][2]}, ` : ''}${client.address[0][0]}`}}
                                            geometry={client.address[0][1].split(', ')}/>
                                    }
                                    )}
                                    {geo?
                                        <Placemark
                                            options={{draggable: false, iconColor: 'indigo'}}
                                            properties={{iconCaption: 'Я'}}
                                            geometry={geo} />
                                        :
                                        null
                                    }
                                </Map>
                            </div>
                        }
                    </div>
                    <center>
                        <Button variant='contained' color='secondary' onClick={()=>{showFullDialog(false);}} className={classes.button}>
                            Закрыть
                        </Button>
                    </center>
                </div>
                <Fab color={follow?'primary':'secondary'} aria-label='Найти геолокацию' className={classes.fabGeo} onClick={()=>setFollow(!follow)}>
                    <GpsFixed/>
                </Fab>
            </YMaps>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        app: state.app,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch)
    }
}

Geo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(Geo));