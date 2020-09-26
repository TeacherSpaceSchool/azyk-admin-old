import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import pageListStyle from '../../src/styleMUI/statistic/statistic'
import * as userActions from '../../redux/actions/user'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import Router from 'next/router'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { getActiveOrganization, getUnloadingOrders } from '../../src/gql/statistic'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import * as appActions from '../../redux/actions/app'

const UnloadingOrders = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const { profile } = props.user;
    let [date, setDate] = useState(null);
    let [organization, setOrganization] = useState(profile.organization?{_id: profile.organization}:{_id: 'all'});
    const { isMobileApp, filter } = props.app;
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    const { showLoad } = props.appActions;
    const filters = [{name: 'Дата доставки', value: 'Дата доставки'}, {name: 'Дата заказа', value: 'Дата заказа'}]
    return (
        <App pageName='Выгрузка заказов' filters={filters}>
            <Head>
                <title>Выгрузка заказов</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Выгрузка заказов' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/unloadingorders`} />
                <link rel='canonical' href={`${urlMain}/unloadingorders`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        {
                            !profile.organization ?
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
                                        <TextField {...params} label='Организация' fullWidth/>
                                    )}
                                />
                                :
                                null
                        }
                        <TextField
                            className={classes.input}
                            label={filter}
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={date}
                            inputProps={{
                                'aria-label': 'description',
                            }}
                            onChange={ event => setDate(event.target.value) }
                        />
                    </div>
                    <br/>
                    <Button variant='contained' size='small' color='primary' onClick={async()=>{
                        if(organization._id&&date) {
                            await showLoad(true)
                            window.open(((await getUnloadingOrders({
                                organization: organization._id,
                                dateStart: date,
                                filter: filter
                            })).unloadingOrders).data, '_blank');
                            await showLoad(false)
                        }
                    }}>
                        Выгрузить
                    </Button>
                </CardContent>
            </Card>
        </App>
    )
})

UnloadingOrders.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = 'Дата доставки'
    if(!['admin', 'суперорганизация'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/contact'
            })
            ctx.res.end()
        } else
            Router.push('/contact')
    return {
        data:
            await getActiveOrganization(ctx.req ? await getClientGqlSsr(ctx.req) : undefined),
    }
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnloadingOrders);