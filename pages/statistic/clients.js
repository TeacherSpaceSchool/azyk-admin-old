import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
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
import { getStatisticClients, getActiveOrganization } from '../../src/gql/statistic'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import { pdDatePicker } from '../../src/lib'

const ClientStatistic = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    const { isMobileApp, filter, city } = props.app;
    const { profile } = props.user;
    const initialRender = useRef(true);
    let [activeOrganization, setActiveOrganization] = useState(data.activeOrganization);
    let [dateStart, setDateStart] = useState(pdDatePicker(new Date()));
    let [dateType, setDateType] = useState('day');
    let [statisticClient, setStatisticClient] = useState(undefined);
    let [showStat, setShowStat] = useState(false);
    let [organization, setOrganization] = useState({_id: 'all'});
    const { showLoad } = props.appActions;
    useEffect(()=>{
        (async()=>{
                await showLoad(true)
                setStatisticClient((await getStatisticClients({
                    company: organization ? organization._id : 'all',
                    dateStart: dateStart ? dateStart : null,
                    dateType: dateType,
                    online: filter,
                    city: city
                })).statisticClients)
                await showLoad(false)
        })()
    },[organization, dateStart, dateType, filter, activeOrganization])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            }
            else {
                await showLoad(true)
                setOrganization(undefined)
                setActiveOrganization((await getActiveOrganization(city)).activeOrganization)
                await showLoad(false)
            }
        })()
    },[city])

    const filters = [{name: 'Все', value: false}, {name: 'Online', value: true}]
    return (
        <App cityShow pageName='Статистика клиентов' filters={filters}>
            <Head>
                <title>Статистика клиентов</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Статистика клиентов' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/client`} />
                <link rel='canonical' href={`${urlMain}/statistic/client`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('day')} size='small' color={dateType==='day'?'primary':''}>
                            День
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('week')} size='small' color={dateType==='week'?'primary':''}>
                            Неделя
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('month')} size='small' color={dateType==='month'?'primary':''}>
                            Месяц
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('year')} size='small' color={dateType==='year'?'primary':''}>
                            Год
                        </Button>
                    </div>
                    <div className={classes.row}>
                        {
                            profile.role === 'admin' ?
                                <Autocomplete
                                    className={classes.input}
                                    options={activeOrganization}
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
                            label='Дата начала'
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
                        statisticClient?
                            <Table type='client' row={(statisticClient.row).slice(1)} columns={statisticClient.columns}/>
                            :null
                    }
                </CardContent>
            </Card>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {
                    statisticClient?
                        <>
                        <div className={classes.rowStatic}>{`Клиентов: ${parseInt(statisticClient.row[0].data[0])}`}</div>
                        {
                            showStat?
                                <>
                                <div className={classes.rowStatic}>{`Выручка: ${statisticClient.row[0].data[1]} сом`}</div>
                                <div className={classes.rowStatic}>{`Выполнено: ${statisticClient.row[0].data[2]} шт`}</div>
                                <div className={classes.rowStatic}>{`Отказов: ${statisticClient.row[0].data[3]} сом`}</div>
                                <div className={classes.rowStatic}>{`Конс: ${statisticClient.row[0].data[4]} сом`}</div>
                                </>
                                :
                                null
                        }
                        </>
                        :null
                }
            </div>
        </App>
    )
})

ClientStatistic.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = false
    ctx.store.getState().app.city = 'Бишкек'
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
            ...await getActiveOrganization(ctx.store.getState().app.city, ctx.req?await getClientGqlSsr(ctx.req):undefined),
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientStatistic);