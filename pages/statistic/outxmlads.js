import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import pageListStyle from '../../src/styleMUI/blog/blogList'
import {getOrganizations} from '../../src/gql/organization'
import { connect } from 'react-redux'
import { urlMain } from '../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import CardOrganization from '../../components/organization/CardOrganization'
import CardOrganizationPlaceholder from '../../components/organization/CardOrganizationPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import Router from 'next/router'

const OutXMLAds = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.organizations);
    const { profile } = props.user;
    let height = 80
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Акционная интеграции 1С'>
            <Head>
                <title>Акционная интеграции 1С</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Акционная интеграции 1С' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/outxmlads`} />
                <link rel='canonical' href={`${urlMain}/outxmlads`}/>
            </Head>
            <div className='count'>
                {`Всего организаций: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardOrganizationPlaceholder height={height}/>}>
                                <Link href='/statistic/outxmlads/[id]' as={`/statistic/outxmlads/${element._id}`}>
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

OutXMLAds.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(ctx.store.getState().user.profile.role!=='admin')
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
            (await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)).organizations
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(OutXMLAds);