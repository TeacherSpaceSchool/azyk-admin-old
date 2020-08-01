import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../../layouts/App';
import { connect } from 'react-redux'
import { getClientsSync, getClientsSyncStatistic } from '../../../src/gql/client'
import { getOrganization } from '../../../src/gql/organization'
import pageListStyle from '../../../src/styleMUI/client/clientList'
import CardClient from '../../../components/client/CardClient'
import { useRouter } from 'next/router'
import { urlMain } from '../../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardClientPlaceholder from '../../../components/client/CardClientPlaceholder'
import { getClientGqlSsr } from '../../../src/getClientGQL'
import initialApp from '../../../src/initialApp'
import Router from 'next/router'

const ClientsSync = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.clientsSync);
    const { search } = props.app;
    let height = 189
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    let [paginationWork, setPaginationWork] = useState(true);
    let [simpleStatistic, setSimpleStatistic] = useState(data.clientsSyncStatistic);
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getClientsSync({search: search, organization: router.query.id, skip: list.length})).clientsSync
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    useEffect(()=>{
        if(searchTimeOut)
            clearTimeout(searchTimeOut)
        searchTimeOut = setTimeout(async()=>{
            let list = (await getClientsSync({search: search, organization: router.query.id, skip: 0})).clientsSync
            setList(list)
            setSimpleStatistic((await getClientsSyncStatistic({search: search, organization: router.query.id})).clientsSyncStatistic)
            setPaginationWork(true);
            (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
            forceCheck()
        }, 500)
        setSearchTimeOut(searchTimeOut)
    },[search])
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName={data.organization.name}>
            <Head>
                <title>{data.organization.name}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.organization.name} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/clientssync/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/statistic/clientssync/${router.query.id}`}/>
            </Head>
            <div className={classes.page}>
                <div className='count'>
                    {`Интеграций: ${simpleStatistic}`}
                </div>
                {
                    list?list.map((element, idx)=> {
                            return(
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardClientPlaceholder height={height}/>}>
                                    <CardClient element={element}/>
                                </LazyLoad>
                            )}
                    ):null
                }
            </div>
        </App>
    )
})

ClientsSync.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    return {
        data: {
            ...(await getClientsSync({search: '', organization: ctx.query.id, skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getClientsSyncStatistic({search: '', organization: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getOrganization({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):null)),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ClientsSync);