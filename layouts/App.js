import React, { useEffect, useState } from 'react';
import AppBar from '../components/app/AppBar'
import Dialog from '../components/app/Dialog'
import FullDialog from '../components/app/FullDialog'
import SnackBar from '../components/app/SnackBar'
import Drawer from '../components/app/Drawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import * as appActions from '../redux/actions/app'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../scss/app.scss'
import Router from 'next/router'
import { useRouter } from 'next/router';
import { subscriptionOrder } from '../src/gql/order';
import { useSubscription } from '@apollo/react-hooks';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import * as snackbarActions from '../redux/actions/snackbar'
import { start } from '../src/service/idb'

export const mainWindow = React.createRef();
export const alert = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { setIsMobileApp } = props.appActions;
    const { profile, authenticated } = props.user;
    const { load, search } = props.app;
    let { checkPagination, sorts, filters, getList, pageName, dates, searchShow, setList, list, defaultOpenSearch, organizations } = props;
    const router = useRouter();
    const [unread, setUnread] = useState({});
    const [reloadPage, setReloadPage] = useState(false);
    const { showSnackBar } = props.snackbarActions;
    useEffect( ()=>{
        if(authenticated&&!profile.role)
            setProfile()
        else if(!authenticated&&profile.role)
            logout(false)
    },[authenticated])
    useEffect( ()=>{
        if(mainWindow.current&&mainWindow.current.offsetWidth<900) {
            setIsMobileApp(true)
        }
    },[mainWindow])

    useEffect( ()=>{
        if(process.browser) {
            start()
            window.addEventListener('offline', ()=>{showSnackBar('Нет подключения к Интернету')})
        }
    },[process.browser])

    Router.events.on('routeChangeStart', async (url, err)=>{
        if(router.asPath!==url&&(router.asPath.includes('items')||router.asPath.includes('brand'))) {
            if(!sessionStorage.scrollPostionStore)
                sessionStorage.scrollPostionStore = JSON.stringify({})
            let scrollPostionStore = JSON.parse(sessionStorage.scrollPostionStore)
            let appBody = (document.getElementsByClassName('App-body'))[0]
            scrollPostionStore[router.asPath] = appBody.scrollTop
            sessionStorage.scrollPostionStore = JSON.stringify(scrollPostionStore)
        }
        if (!router.pathname.includes(url)&&!router.asPath.includes(url)&&!reloadPage)
            setReloadPage(true)
        if (err&&err.cancelled&&reloadPage)
            setReloadPage(false)
    })

    Router.events.on('routeChangeComplete', (url) => {
        if(sessionStorage.scrollPostionStore) {
            let appBody = (document.getElementsByClassName('App-body'))[0]
            appBody.scroll({
                top: (JSON.parse(sessionStorage.scrollPostionStore))[url],
                left: 0,
                behavior: 'instant'
            });
        }

    });

    const containerRef = useBottomScrollListener(async()=>{
        if(checkPagination) {
            await setReloadPage(true)
            await checkPagination()
            await setReloadPage(false)
        }
    });
    let subscriptionOrderRes = useSubscription(subscriptionOrder);
    useEffect( ()=>{
        if (
                subscriptionOrderRes &&
                authenticated &&
                profile.role &&
                'экспедитор' !== profile.role &&
                subscriptionOrderRes.data &&
                subscriptionOrderRes.data.reloadOrder &&
                profile._id !== subscriptionOrderRes.data.reloadOrder.who
        ) {
                if (router.pathname === '/orders') {
                    if (subscriptionOrderRes.data.reloadOrder.type === 'ADD'&&!search.length) {
                        let have = false
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionOrderRes.data.reloadOrder.invoice._id) {
                                _list[i] = subscriptionOrderRes.data.reloadOrder.invoice
                                have = true
                            }
                        }
                        if (have)
                            setList([..._list])
                        else
                            setList([subscriptionOrderRes.data.reloadOrder.invoice, ...list])
                    }
                    else if (subscriptionOrderRes.data.reloadOrder.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionOrderRes.data.reloadOrder.invoice._id) {
                                _list[i] = subscriptionOrderRes.data.reloadOrder.invoice
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionOrderRes.data.reloadOrder.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionOrderRes.data.reloadOrder.invoice._id) {
                                index = i
                            }
                        }
                        if(index) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.orders) {
                        unread.orders = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                    /*if (alert.current)
                        alert.current.play()*/
                }
            }
    },[subscriptionOrderRes.data])
        /*let subscriptionReturnedRes = useSubscription(subscriptionReturned);
        if (
            subscriptionReturnedRes &&
            authenticated &&
            profile.role &&
            'экспедитор' !== profile.role &&
            subscriptionReturnedRes.data &&
            subscriptionReturnedRes.data.reloadReturned &&
            profile._id !== subscriptionReturnedRes.data.reloadReturned.who
        ) {
            if (router.pathname === '/returneds') {
                if (subscriptionReturnedRes.data.reloadReturned.type === 'ADD') {
                    let have = false
                    let _list = [...list]
                    for (let i = 0; i < _list.length; i++) {
                        if (_list[i]._id === subscriptionOrderRes.data.reloadReturned.returned._id) {
                            _list[i] = subscriptionOrderRes.data.reloadReturned.returned
                            have = true
                        }
                    }
                    if (have)
                        setList([..._list])
                    else
                        setList([subscriptionOrderRes.data.reloadReturned.returned, ...list])
                }
                else if (subscriptionReturnedRes.data.reloadReturned.type === 'SET') {
                    let _list = [...list]
                    for (let i = 0; i < _list.length; i++) {
                        if (_list[i]._id === subscriptionReturnedRes.data.reloadReturned.returned._id) {
                            _list[i] = subscriptionReturnedRes.data.reloadReturned.returned
                        }
                    }
                    setList([..._list])
                }
                else if (subscriptionReturnedRes.data.reloadReturned.type === 'DELETE') {
                    let index = 0
                    let _list = [...list]
                    for (let i = 0; i < _list.length; i++) {
                        if (_list[i]._id === subscriptionReturnedRes.data.reloadReturned.returned._id) {
                            index = i
                        }
                    }
                    _list.splice(index, 1);
                    setList([..._list])
                }
            }
            else {
                if (!unread.returneds) {
                    unread.returneds = true
                    setUnread({...unread})
                }
                if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                    navigator.vibrate(200);
            }
        }*/


    return(
        <div ref={mainWindow} className='App'>
            <Drawer unread={unread} setUnread={setUnread}/>
            <AppBar organizations={organizations} unread={unread} defaultOpenSearch={defaultOpenSearch} searchShow={searchShow} dates={dates} pageName={pageName} sorts={sorts} filters={filters}/>
            <div ref={containerRef} className='App-body'>
                {props.children}
            </div>
            <FullDialog/>
            <Dialog />
            <SnackBar/>
            {load||reloadPage?
                <div className='load'>
                    <CircularProgress/>
                </div>
                :
                null
            }
            <audio src='/alert.mp3' ref={alert}/>
        </div>
    )
});

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);