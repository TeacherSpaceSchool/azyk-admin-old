import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/statistic/statistic'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import Table from '../../components/app/Table'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { getStatisticItemActivity, getActiveOrganization } from '../../src/gql/statistic'
import { getClientGqlSsr } from '../../src/getClientGQL'
import * as appActions from '../../redux/actions/app'
import { bindActionCreators } from 'redux'

const ItemStatisticActive = React.memo((props) => {
    const { data } = props;
    const classes = pageListStyle();
    const { isMobileApp, filter } = props.app;
    const { showLoad } = props.appActions;
    const { profile } = props.user;
    let [statisticActive, setStatisticActive] = useState(undefined);
    let [organization, setOrganization] = useState(undefined);
    useEffect(()=>{
        (async()=>{
            await showLoad(true)
            setStatisticActive((await getStatisticItemActivity({online: filter, ...(organization&&organization._id?{organization: organization._id}:{})}, undefined)).statisticItemActivity)
            await showLoad(false)
        })()
    },[filter, organization])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    const filters = [{name: 'Все', value: false}, {name: 'Online', value: true}]
    let [showStat, setShowStat] = useState(false);
    return (
        <App pageName='Активность товаров' filters={filters}>
            <Head>
                <title>Активность товаров</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Активность товаров' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/activeitem`} />
                <link rel='canonical' href={`${urlMain}/statistic/activeitem`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {
                        profile.role==='admin'?
                            <div className={classes.row}>
                                <Autocomplete
                                    className={classes.input}
                                    options={data.activeOrganization}
                                    getOptionLabel={option => option.name}
                                    value={organization}
                                    onChange={(event, newValue) => {
                                        setOrganization(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Организация' fullWidth />
                                    )}
                                />
                            </div>
                            :null
                    }
                    {
                        statisticActive?
                            <>
                            <Table type='client' row={statisticActive.row.slice(1)} columns={statisticActive.columns}/>
                            <div className='count' onClick={()=>setShowStat(!showStat)}>
                                <div className={classes.rowStatic}>{`Клиентов: ${statisticActive.row[0].data[0]}`}</div>
                                {
                                    showStat?
                                        <>
                                        <div className={classes.rowStatic}>{`Выполнено: ${statisticActive.row[0].data[1]} шт`}</div>
                                        <div className={classes.rowStatic}>{`Выручка: ${statisticActive.row[0].data[2]} сом`}</div>
                                        <div className={classes.rowStatic}>{`Возвратов: ${statisticActive.row[0].data[3]} сом`}</div>
                                        </>
                                        :
                                        null
                                }
                            </div>
                            </>
                            :null
                    }

                </CardContent>
            </Card>
        </App>
    )
})

ItemStatisticActive.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = false
    if(!['admin', 'суперорганизация'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    return {
        data: {
            ...await getActiveOrganization(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {

        appActions: bindActionCreators(appActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatisticActive);