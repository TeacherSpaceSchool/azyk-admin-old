import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import CardDistrict from '../../components/district/CardDistrict'
import pageListStyle from '../../src/styleMUI/district/districtList'
import {getDistricts} from '../../src/gql/district'
import { connect } from 'react-redux'
import { urlMain } from '../../redux/constants/other'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { useRouter } from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardDistrictPlaceholder from '../../components/district/CardDistrictPlaceholder'
import initialApp from '../../src/initialApp'
import { getClientsWithoutDistrict } from '../../src/gql/client'
const height = 210;

const Districts = React.memo((props) => {
    const { profile } = props.user;
    const classes = pageListStyle();
    const router = useRouter()
    const { data } = props;
    let [list, setList] = useState(data.districts);
    let [clients, setClients] = useState(data.clientsWithoutDistrict);
    let [showStat, setShowStat] = useState(false);
    const { search, sort } = props.app;
    let getList = async()=>{
        setList((await getDistricts({organization: router.query.id, search: search, sort: sort})).districts)
    }
    useEffect(()=>{
        getList()
    },[sort, search]);
    useEffect(()=>{
        (async()=>{
            forceCheck()
            setClients((await getClientsWithoutDistrict(router.query.id)).clientsWithoutDistrict)
        })()
    },[list])
    return (
        <App getList={getList} searchShow={true} sorts={data.sortDistrict} pageName='Районы'>
            <Head>
                <title>Районы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Районы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/districts/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/districts/${router.query.id}`}/>
            </Head>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {`Всего районов: ${list.length}`}
                {
                    showStat?
                        <>
                        <br/>
                        <br/>
                        {`Осталось клиентов: ${clients.length}`}
                        </>
                        :
                        null
                }
            </div>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardDistrictPlaceholder/>}>
                        <CardDistrict setList={setList} key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
            {['admin', 'организация', 'менеджер'].includes(profile.role)?
                <Link href='/district/[id]' as={`/district/new`}>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                :
                null
            }
        </App>
    )
})

Districts.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'организация'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...(await getDistricts({organization: ctx.query.id, search: '', sort: '-createdAt', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)),
            ...(await getClientsWithoutDistrict(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):undefined))
            }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
        pagination: state.pagination
    }
}

export default connect(mapStateToProps)(Districts);