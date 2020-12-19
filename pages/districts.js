import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../src/gql/organization'
import pageListStyle from '../src/styleMUI/organization/orgaizationsList'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import CardOrganization from '../components/organization/CardOrganization'
import CardOrganizationPlaceholder from '../components/organization/CardOrganizationPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Router from 'next/router'
import { forceCheck } from 'react-lazyload';

const Districts = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const { city } = props.app;
    useEffect(()=>{
        (async()=>{
            list = (await getOrganizations({search: '', sort: 'name', filter: '', city: city})).organizations
            setList(list)
        })()
    },[city])
    let [list, setList] = useState(data.organizations);
    const { profile } = props.user;
    let height = 80
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    return (
        <App cityShow checkPagination={checkPagination} pageName='Районы'>
            <Head>
                <title>Районы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Районы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/districts`} />
                <link rel='canonical' href={`${urlMain}/districts`}/>
            </Head>
            <div className='count'>
                {`Всего организаций: ${list.length}`}
            </div>
            <div className={classes.page}>
                {
                    profile.role==='admin'?
                        <Link href='/districts/[id]' as='/districts/super'>
                            <a>
                                <CardOrganization element={{name: 'AZYK.STORE', image: '/static/512x512.png'}}/>
                            </a>
                        </Link>
                        :null
                }
                {list?list.map((element, idx)=> {
                        if(idx<=pagination)
                            return(
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardOrganizationPlaceholder height={height}/>}>
                                    <Link href='/districts/[id]' as={`/districts/${element._id}`}>
                                        <a>
                                            <CardOrganization key={element._id} setList={setList} element={element}/>
                                        </a>
                                    </Link>
                                </LazyLoad>
                            )}
                ):null}
            </div>
        </App>
    )
})

Districts.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.city = 'Бишкек'
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
            organizations:
                (await getOrganizations({city: ctx.store.getState().app.city, search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).organizations
        }
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

export default connect(mapStateToProps)(Districts);