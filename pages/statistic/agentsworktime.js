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
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticAgentsWorkTime, getActiveOrganization } from '../../src/gql/statistic'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import { pdDatePicker } from '../../src/lib'

const AgentsWorkTime = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    let [dateStart, setDateStart] = useState(pdDatePicker(new Date()));
    let [statisticOrder, setStatisticOrder] = useState(undefined);
    let [organization, setOrganization] = useState(profile.organization?{_id: profile.organization}:undefined);
    const { showLoad } = props.appActions;
    useEffect(()=>{
        (async()=>{
            if(organization&&organization._id) {
                await showLoad(true)
                setStatisticOrder((await getStatisticAgentsWorkTime({
                    organization: organization ? organization._id : undefined,
                    date: dateStart ? dateStart : null
                })).statisticAgentsWorkTime)
                await showLoad(false)
            }
        })()
    },[organization, dateStart])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])

    return (
        <App pageName='Рабочие часы' >
            <Head>
                <title>Рабочие часы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Рабочие часы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/agentsworktime`} />
                <link rel='canonical' href={`${urlMain}/statistic/agentsworktime`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        {
                            profile.role==='admin'?
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
                                :null}
                        <TextField
                            className={classes.input}
                            label='Дата'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateStart}
                            inputProps={{
                                'aria-label': 'description',
                            }}
                            onChange={ event => setDateStart(event.target.value) }
                        />
                    </div>
                    {
                        statisticOrder?
                            <Table type='item' row={statisticOrder.row} columns={statisticOrder.columns}/>
                            :null
                    }
                </CardContent>
            </Card>
        </App>
    )
})

AgentsWorkTime.getInitialProps = async function(ctx) {
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
            activeOrganization: [
                {name: 'AZYK.STORE', _id: 'super'},
                ...(ctx.store.getState().user.profile.role==='суперорганизация'?[]:(await getActiveOrganization(ctx.req?await getClientGqlSsr(ctx.req):undefined)).activeOrganization)
            ]
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

export default connect(mapStateToProps, mapDispatchToProps)(AgentsWorkTime);