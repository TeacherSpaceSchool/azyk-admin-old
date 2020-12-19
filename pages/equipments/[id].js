import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../redux/actions/user'
import { getEquipments } from '../../src/gql/equipment'
import pageListStyle from '../../src/styleMUI/equipment/equipmentList'
import CardEquipment from '../../components/equipment/CardEquipment'
import { urlMain } from '../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardEquipmentPlaceholder from '../../components/equipment/CardEquipmentPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'
import initialApp from '../../src/initialApp'
import { useRouter } from 'next/router'

const Equipments = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.equipments);
    const { search, sort } = props.app;
    const { profile } = props.user;
    const router = useRouter()
    let height = ['суперорганизация', 'организация', 'admin'].includes(profile.role)?186:140
    useEffect(()=>{
        (async()=>{
            setList((await getEquipments({organization: router.query.id, search: search, sort: sort})).equipments)
        })()
    },[sort, search])
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
        <App checkPagination={checkPagination} searchShow={true} sorts={data.sortEquipment} pageName={'Оборудование'}>
            <Head>
                <title>Оборудование</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Оборудование' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/equipments`} />
                <link rel='canonical' href={`${urlMain}/equipments`}/>
            </Head>
            <div className='count'>
                {`Всего: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardEquipmentPlaceholder height={height}/>}>
                                <CardEquipment list={list} idx={idx} key={element._id} setList={setList} element={element}/>
                            </LazyLoad>
                        )}
                ):null}
            </div>
            {['admin', 'суперорганизация', 'организация'].includes(profile.role)?
                <Link href='/equipment/[id]' as={`/equipment/new`}>
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

Equipments.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    return {
        data: await getEquipments({organization: ctx.query.id, search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Equipments);