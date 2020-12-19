import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getOrganizations } from '../src/gql/organization'
import pageListStyle from '../src/styleMUI/organization/orgaizationsList'
import CardOrganization from '../components/organization/CardOrganization'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardOrganizationPlaceholder from '../components/organization/CardOrganizationPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Router from 'next/router'

const Organization = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.organizations);
    const { search, filter, sort, city } = props.app;
    const { profile } = props.user;
    let height = 80
    useEffect(()=>{
        (async()=>{
            setList((await getOrganizations({search: search, sort: sort, filter: filter, city: city})).organizations)
        })()
    },[filter, sort, search, city])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App cityShow checkPagination={checkPagination} searchShow={true} filters={data.filterOrganization} sorts={data.sortOrganization} pageName='Организации'>
            <Head>
                <title>Организации</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Организации' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/organizations`} />
                <link rel='canonical' href={`${urlMain}/organizations`}/>
            </Head>
            <div className='count'>
                {`Всего организаций: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardOrganizationPlaceholder height={height}/>}>
                                <Link href='/organization/[id]' as={`/organization/${element._id}`}>
                                    <a>
                                        <CardOrganization organization key={element._id} setList={setList} element={element}/>
                                    </a>
                                </Link>
                            </LazyLoad>
                        )}
                ):null}
            </div>
            {profile.role==='admin'?
                <Link href='/organization/[id]' as={`/organization/new`}>
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

Organization.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.city = 'Бишкек'
    if(!ctx.store.getState().user.profile.role)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    ctx.store.getState().app.sort = 'name'
    return {
        data: await getOrganizations({city: ctx.store.getState().app.city, search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Organization);