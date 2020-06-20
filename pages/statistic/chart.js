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
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticOrderChart, getActiveOrganization } from '../../src/gql/statistic'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import { Chart } from 'react-charts'

const ChartStatistic = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    const { isMobileApp, filter } = props.app;
    const { profile } = props.user;
    let [dateStart, setDateStart] = useState(null);
    let [dateType, setDateType] = useState('day');
    let [typeChart, setTypeChart] = useState('bar');
    let [type, setType] = useState('money');
    let [statisticOrderChart, setStatisticOrderChart] = useState(undefined);
    let [showStat, setShowStat] = useState(false);
    let [organization, setOrganization] = useState(undefined);
    const { showLoad } = props.appActions;
    useEffect(()=>{
        (async()=>{
                await showLoad(true)
                dateStart=dateStart?dateStart:new Date();
                let _statisticOrderChart = (await getStatisticOrderChart({
                    company: organization ? organization._id : undefined,
                    dateStart: dateStart,
                    dateType: dateType,
                    type: type,
                    online: filter
                })).statisticOrderChart
                for(let i=0; i<_statisticOrderChart.chartStatistic.length;i++){
                    for(let i1=0; i1<_statisticOrderChart.chartStatistic[i].data.length;i1++){
                        _statisticOrderChart.chartStatistic[i].data[i1] = [_statisticOrderChart.chartStatistic[i].data[i1][0], parseInt(_statisticOrderChart.chartStatistic[i].data[i1][1])]
                    }
                }
                setStatisticOrderChart(_statisticOrderChart)
                await showLoad(false)
        })()
    },[organization, dateStart, dateType, type, filter])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])

    const axesBar = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: true }
        ],
        []
    )
    const axesLines = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'linear', position: 'left', stacked: false }
        ],
        []
    )
    const seriesBar = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )
    const seriesLines = React.useMemo(
        () => ({
        }),
        []
    )
    const filters = [{name: 'Все', value: false}, {name: 'Online', value: true}]
    return (
        <App pageName='Графики заказов' filters={filters}>
            <Head>
                <title>Графики заказов</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Графики заказов' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/chart`} />
                <link rel='canonical' href={`${urlMain}/statistic/chart`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setTypeChart('bar')} size='small' color={typeChart==='bar'?'primary':''}>
                            Бар
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setTypeChart('line')} size='small' color={typeChart==='line'?'primary':''}>
                            Линии
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setType('money')} size='small' color={type==='money'?'primary':''}>
                            Выручка
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setType('order')} size='small' color={type==='order'?'primary':''}>
                            Заказы
                        </Button>
                    </div>
                    <div className={classes.row}>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('time')} size='small' color={dateType==='time'?'primary':''}>
                            Часы
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('day')} size='small' color={dateType==='day'?'primary':''}>
                            День
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
                        statisticOrderChart?
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: isMobileApp?'calc(100vw - 32px)':'calc(100vw - 332px)'
                            }}>
                                <div
                                    style={{
                                        width: isMobileApp?'calc(100vw - 42px)':'calc(100vw - 350px)',
                                        height: isMobileApp?'calc(100vh - 260px)':'calc(100vh - 275px)'
                                    }}
                                >
                                    {
                                        dateType==='day'?
                                            <Chart
                                                series={typeChart==='line'?seriesLines:seriesBar}
                                                data={statisticOrderChart.chartStatistic}
                                                axes={typeChart==='line'?axesLines:axesBar}
                                                tooltip
                                                primaryCursor
                                                secondaryCursor
                                            />
                                            :
                                            dateType==='month'?
                                                <Chart
                                                    series={typeChart==='line'?seriesLines:seriesBar}
                                                    data={statisticOrderChart.chartStatistic}
                                                    axes={typeChart==='line'?axesLines:axesBar}
                                                    tooltip
                                                    primaryCursor
                                                    secondaryCursor
                                                />
                                                :
                                                <Chart
                                                    series={typeChart==='line'?seriesLines:seriesBar}
                                                    data={statisticOrderChart.chartStatistic}
                                                    axes={typeChart==='line'?axesLines:axesBar}
                                                    tooltip
                                                    primaryCursor
                                                    secondaryCursor
                                                />
                                    }
                                </div>
                            </div>
                            :
                            null
                    }
                </CardContent>
            </Card>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {
                    statisticOrderChart?
                        `${statisticOrderChart.all} ${type==='money'?'сом':'заказы'}`
                        :null
                }
            </div>
        </App>
    )
})

ChartStatistic.getInitialProps = async function(ctx) {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartStatistic);