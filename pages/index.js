import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getBrandOrganizations, getPopularItems } from '../src/gql/items'
import pageListStyle from '../src/styleMUI/organization/orgaizationsList'
import CardBrand from '../components/brand/CardBrand'
import CardPopularItem from '../components/items/CardPopularItem'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardBrandPlaceholder from '../components/brand/CardBrandPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Router from 'next/router'

const Organization = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.brandOrganizations);
    const { search, filter, sort, isMobileApp } = props.app;
    const { profile } = props.user;
    const height = 80
    const popularItemsRef = useRef(null);
    const widthPopularItemsRef = useRef(0);
    const searchTimeOutRef = useRef(null);
    let [widthPopularItem, setWidthPopularItem] = useState(0);
    useEffect(()=>{
        if(process.browser&&data.popularItems&&data.popularItems.length>0){
            if(isMobileApp){
                let width = document.getElementsByClassName('App-body')
                width = (width[0].offsetWidth-60)/3
                setWidthPopularItem(width)
            }
            else
                setWidthPopularItem(100)
        }
    },[process.browser]);
    useEffect(()=>{
        searchTimeOutRef.current = setInterval(() => {
            if(popularItemsRef.current){
                widthPopularItemsRef.current+=(widthPopularItem+20)
                if(widthPopularItemsRef.current>=(popularItemsRef.current.scrollWidth-popularItemsRef.current.offsetWidth+11))
                    widthPopularItemsRef.current=0
                popularItemsRef.current.scrollTo({
                    top: 0,
                    left: widthPopularItemsRef.current,
                    behavior: 'smooth'
                });
            }
        }, 10000)
        return ()=>{
            clearInterval(searchTimeOutRef.current)
        }
    }, []);
    useEffect(()=>{
        (async()=>{
            list = (await getBrandOrganizations({search: search, sort: sort, filter: filter})).brandOrganizations
            setList(list)
        })()
    },[filter, sort, search])
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
        <App checkPagination={checkPagination} searchShow={true} filters={data.filterOrganization} sorts={data.sortOrganization} pageName='Бренды'>
            <Head>
                <title>Бренды</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Бренды' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/brands`} />
                <link rel='canonical' href={`${urlMain}/brands`}/>
            </Head>
            <div className='count'>
                {`Всего брендов: ${list.length}`}
            </div>
            {/*
                profile.role==='client'&&data.popularItems&&data.popularItems.length>0&&widthPopularItem?
                    <div ref={popularItemsRef} className={classes.populars}>
                        {data.popularItems.map((element)=> <CardPopularItem widthPopularItem={widthPopularItem} key={element._id} element={element}/>)}
                    </div>
                    :
                    null
            */}
            <div className={classes.page} style={{paddingTop: profile.role==='client'&&data.popularItems&&data.popularItems.length>0&&widthPopularItem?10:10}}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardBrandPlaceholder height={height}/>}>
                                <CardBrand key={element._id} element={element}/>
                            </LazyLoad>
                        )
                }):null}
            </div>
        </App>
    )
})

Organization.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    let role = ctx.store.getState().user.profile.role
    ctx.store.getState().app.sort = 'name'
    let authenticated = ctx.store.getState().user.authenticated
    if(!['admin', 'client'].includes(role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: ['суперагент','агент'].includes(role)?'/catalog':!authenticated?'/contact':'/items/all'
            })
            ctx.res.end()
        }
        else {
            Router.push(['суперагент','агент'].includes(role)?'/catalog':!authenticated?'/contact':'/items/all')
        }
    return {
        data: {
            ...await getBrandOrganizations({search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getPopularItems(ctx.req?await getClientGqlSsr(ctx.req):undefined),
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

export default connect(mapStateToProps, mapDispatchToProps)(Organization);