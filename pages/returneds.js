import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardReturned from '../components/returned/CardReturned'
import pageListStyle from '../src/styleMUI/returned/returnedList'
import {getReturneds} from '../src/gql/returned'
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardReturnedPlaceholder from '../components/returned/CardReturnedPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import ClickNHold from 'react-click-n-hold';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Confirmation from '../components/dialog/Confirmation'
import { deleteReturneds, getReturnedsSimpleStatistic } from '../src/gql/returned'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import { bindActionCreators } from 'redux'
import Badge from '@material-ui/core/Badge';
import Link from 'next/link';
const height = 225


const Returneds = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [simpleStatistic, setSimpleStatistic] = useState(['0']);
    let [list, setList] = useState(data.returneds);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { search, sort, date } = props.app;
    const { profile } = props.user;
    let [paginationWork, setPaginationWork] = useState(true);
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getReturneds({search: search, sort: sort, date: date, skip: list.length})).returneds
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    const getList = async ()=>{
        let returneds = (await getReturneds({search: search, sort: sort, date: date, skip: 0})).returneds
        setList(returneds)
        setSimpleStatistic((await getReturnedsSimpleStatistic({search: search, date: date})).returnedsSimpleStatistic)
    }
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    useEffect(()=>{
        if(searchTimeOut)
            clearTimeout(searchTimeOut)
        searchTimeOut = setTimeout(async()=>{
            setSelected([])
            await getList()
            forceCheck()
            setPaginationWork(true);
            (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
        }, 500)
        setSearchTimeOut(searchTimeOut)
    },[sort, search, date])

    let [showStat, setShowStat] = useState(false);
    let [selected, setSelected] = useState([]);
    let [anchorEl, setAnchorEl] = useState(null);
    let open = event => {
        setAnchorEl(event.currentTarget);
    };
    let close = () => {
        setAnchorEl(null);
    };

    return (
        <App checkPagination={checkPagination} setList={setList} list={list} searchShow={true} dates={true} sorts={data.sortReturned} pageName='Возвраты'>
            <Head>
                <title>Возвраты</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Возвраты' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/returneds`} />
                <link rel='canonical' href={`${urlMain}/returneds`}/>
            </Head>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                        {
                            `Всего возвратов: ${simpleStatistic[0]}`
                        }
                        {
                            showStat?
                                <>
                                <br/>
                                <br/>
                                {simpleStatistic[1]&&simpleStatistic[1]!=='0'?`Всего сумма: ${simpleStatistic[1]} сом`:null}
                                {
                                    simpleStatistic[2]&&simpleStatistic[2]!=='0'?
                                        <>
                                        <br/>
                                        <br/>
                                        {`Всего консигнаций: ${simpleStatistic[2]} сом`}
                                        <br/>
                                        <br/>
                                        {`Оплачено консигнаций: ${simpleStatistic[3]} сом`}
                                        </>
                                        :
                                        null
                                }
                                {
                                    simpleStatistic[4]&&simpleStatistic[4]!=='0'?
                                        <>
                                        <br/>
                                        <br/>
                                        {`Всего тонаж: ${simpleStatistic[4]} кг`}
                                        </>
                                        :
                                        null
                                }
                                {
                                    simpleStatistic[5]&&simpleStatistic[5]!=='0'?
                                        <>
                                        <br/>
                                        <br/>
                                        {`Всего кубатура: ${simpleStatistic[5]} см³`}
                                        </>
                                        :
                                        null
                                }
                                </>
                                :
                                null
                        }
                    </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardReturnedPlaceholder/>}>
                        <ClickNHold
                            style={{background: selected.includes(element._id)?'rgba(51, 143, 255, 0.29)':null}}
                            time={3}
                            onClickNHold={()=>{
                                if(profile.role==='admin'&&element.orders[0].status==='отмена')
                                    if(selected.includes(element._id)) {
                                        selected = selected.filter((i)=>i!==element._id)
                                        setSelected([...selected])
                                    }
                                    else
                                        setSelected([...selected, element._id])

                            }}
                        >
                            <CardReturned list={list} idx={idx} setSelected={setSelected} selected={selected} setList={setList} key={element._id} element={element}/>
                        </ClickNHold>
                    </LazyLoad>
                        )}
                ):null}
            </div>
            {selected.length?
                <Fab onClick={open} color='primary' aria-label='add' className={classes.fab}>
                    <Badge color='secondary' badgeContent={selected.length}>
                        <SettingsIcon />
                    </Badge>
                </Fab>
                :
                <Link href='/returned/new'>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
            }
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
                    const action = async() => {
                        let _list = [...list]
                        for(let i=0; i<_list.length; i++){
                            if(selected.includes(_list[i].idx)) {
                                _list.splice(i, 1)
                                i-=1
                            }
                        }
                        setList(_list)
                        await deleteReturneds(selected)
                    }
                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                    showMiniDialog(true);
                    setSelected([])
                    close()
                }}>Удалить</MenuItem>
                <MenuItem onClick={async()=>{
                    setSelected([])
                    close()
                }}>Отменить</MenuItem>
            </Menu>
        </App>
    )
})

Returneds.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'организация', 'менеджер', 'агент', 'суперагент'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    ctx.store.getState().app.sort = '-createdAt'
    return {
        data: await getReturneds({search: '', sort: '-createdAt', date: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Returneds);