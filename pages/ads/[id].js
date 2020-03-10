import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import CardAds from '../../components/ads/CardAds';
import pageListStyle from '../../src/styleMUI/ads/adsList'
import {getAdss} from '../../src/gql/ads'
import { connect } from 'react-redux'
import { urlMain } from '../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardAdsPlaceholder from '../../components/ads/CardAdsPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import { getOrganization } from '../../src/gql/organization'
import { useRouter } from 'next/router'

const Ads = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.adss);
    const { search } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getAdss({search: search, organization: router.query.id})).adss)
        })()
    },[search])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let height = ['организация', 'admin'].includes(profile.role)?400:200
    const router = useRouter()
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName={`Акции${data.organization ?` ${data.organization.name}`:''}`}>
            <Head>
                <title>Акции{data.organization?` ${data.organization.name}`:''}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={`Акции${data.organization ?` ${data.organization.name}`:''}`} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/ads/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/ads/${router.query.id}`}/>
            </Head>
            <div className={classes.page}>
                <div className='count'>
                    {`Всего акций: ${list.length}`}
                </div>
                {['организация', 'admin'].includes(profile.role)?<CardAds organization={router.query.id} setList={setList}/>:null}
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardAdsPlaceholder height={height}/>}>
                                <CardAds organization={router.query.id} setList={setList} key={element._id} element={element}/>
                            </LazyLoad>
                        )}
                ):null}
            </div>
        </App>
    )
})

Ads.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    return {
        data: {
            ...await getAdss({search: '', organization: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getOrganization({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        },
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Ads);