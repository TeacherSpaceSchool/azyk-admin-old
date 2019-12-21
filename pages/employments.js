import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import pageListStyle from '../src/styleMUI/employment/employmentList'
import {getEmployments} from '../src/gql/employment'
import CardEmployment from '../components/employment/CardEmployment'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardEmploymentPlaceholder from '../components/employment/CardEmploymentPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
const height = 186

const Employment = React.memo((props) => {
    const { profile } = props.user;
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.employments);
    const { search, filter, sort } = props.app;
    useEffect(()=>{
        (async()=>{
            setList((await getEmployments({search: search, sort: sort, filter: filter})).employments)
            forceCheck()
        })()
    },[filter, sort, search])
    return (
        <App searchShow={true} filters={data.filterEmployment} sorts={data.sortEmployment} pageName='Сотрудники'>
            <Head>
                <title>Сотрудники</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Сотрудники' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/employments`} />
                <link rel='canonical' href={`${urlMain}/employments`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardEmploymentPlaceholder height={height}/>}>
                        <CardEmployment key={element._id} setList={setList} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
            {['admin', 'организация'].includes(profile.role)?
                <Link href='/employment/[id]' as={`/employment/new`}>
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

Employment.getInitialProps = async function(ctx) {
    if(!['admin', 'организация', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getEmployments({search: '', sort: '-createdAt', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Employment);