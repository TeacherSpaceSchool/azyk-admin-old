import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../redux/actions/user'
import { getOrganizations } from '../../src/gql/organization'
import pageListStyle from '../../src/styleMUI/organization/orgaizationsList'
import CardOrganization from '../../components/organization/CardOrganization'
import Link from 'next/link';
import { urlMain } from '../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import CardOrganizationPlaceholder from '../../components/organization/CardOrganizationPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import Router from 'next/router'
import { forceCheck } from 'react-lazyload';

const Integrates = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const { city } = props.app;
    const initialRender = useRef(true);
    let [list, setList] = useState(data.organizations);
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            }
            else {
                setList((await getOrganizations({search: '', sort: 'name', filter: '', city: city})).organizations)
            }
        })()
    },[city])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let height = 80
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App cityShow checkPagination={checkPagination} pageName='Выгрузка интеграции 1С'>
            <Head>
                <title>Выгрузка интеграции 1С</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Выгрузка интеграции 1С' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/statistic/integrateouts`} />
                <link rel='canonical' href={`${urlMain}/statistic/integrateouts`}/>
            </Head>
            <div className='count'>
                {`Всего организаций: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardOrganizationPlaceholder height={height}/>}>
                                <Link href='/statistic/integrateout/[id]' as={`/statistic/integrateout/${element._id}`}>
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

Integrates.getInitialProps = async function(ctx) {
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
                (await getOrganizations({city: ctx.store.getState().app.city, search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).organizations
        }
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Integrates);