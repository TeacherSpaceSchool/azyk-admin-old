import Head from 'next/head';
import React, { useState } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getOrganizations } from '../src/gql/organization'
import pageListStyle from '../src/styleMUI/organization/orgaizationsList'
import CardOrganization from '../components/organization/CardOrganization'
import Link from 'next/link';
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import CardOrganizationPlaceholder from '../components/organization/CardOrganizationPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Router from 'next/router'

const Distributers = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.organizations);
    const { profile } = props.user;
    let height = profile.role==='admin'?126:80
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} pageName='Дистрибьюторы'>
            <Head>
                <title>Дистрибьюторы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Дистрибьюторы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/districts`} />
                <link rel='canonical' href={`${urlMain}/districts`}/>
            </Head>
            <div className='count'>
                {`Всего дистрибьюторов: ${list.length}`}
            </div>
            <div className={classes.page}>
                {
                    profile.role==='admin'?
                        <Link href='/distributer/[id]' as='/distributer/super'>
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
                                    <Link href='/distributer/[id]' as={`/distributer/${element._id}`}>
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

Distributers.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            organizations:
                (await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).organizations
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

export default connect(mapStateToProps, mapDispatchToProps)(Distributers);