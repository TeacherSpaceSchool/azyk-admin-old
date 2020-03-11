import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticClientGeo, getActiveItem, getActiveOrganization } from '../../src/gql/statistic'
import { Map, YMaps, Placemark, ObjectManager } from 'react-yandex-maps';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const ClientGeoStatistic = React.memo((props) => {

    const { data } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    let [load, setLoad] = useState(true);
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    let [organization, setOrganization] = useState(null);
    let [items, setItems] = useState([]);
    let [item, setItem] = useState(null);
    let [statisticClientGeo, setStatisticClientGeo] = useState(undefined);
    let [greenData, setGreenData] = useState([]);
    let [yellowData, setYellowData] = useState([]);
    let [redData, setRedData] = useState([]);
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin') {
                if(organization)
                    setItems((await getActiveItem({organization: organization._id})).activeItem)
                else
                    setItems([])
                setItem(null)
                //setStatisticClientGeo((await getStatisticClientGeo({organization: organization ? organization._id : null})).statisticClientGeo)
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin') {
                setStatisticClientGeo((await getStatisticClientGeo({organization: organization ? organization._id : null, item: item ? item._id : null})).statisticClientGeo)
            }
        })()
    },[item, items, organization])
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin'&&statisticClientGeo) {
                let _greenData = []
                let _yellowData = []
                let _redData = []
                let data
                for(let i=1;i<statisticClientGeo.length;i++){
                    data = {
                        type: 'Feature',
                            id: statisticClientGeo[i].client,
                            geometry: {
                            type: 'Point',
                                coordinates: statisticClientGeo[i].address[1].split(', ')
                        },
                        properties: {
                            iconColor: statisticClientGeo[i].data[1],
                                iconCaption: `${statisticClientGeo[i].data[0]==='true' ? `🔔` : '🔕'}${statisticClientGeo[i].address[2] ? `${statisticClientGeo[i].address[2]}, ` : ''}${statisticClientGeo[i].address[0]}`
                        }
                    }
                    if(statisticClientGeo[i].data[1]==='red')
                        _redData.push(data)
                    else if(statisticClientGeo[i].data[1]==='green')
                        _greenData.push(data)
                    else
                        _yellowData.push(data)
                }
                setGreenData(_greenData)
                setRedData(_redData)
                setYellowData(_yellowData)
            }
        })()
    },[statisticClientGeo])

    return (
        <>
        <YMaps>
            <App pageName='Карта продаж'>
                <Head>
                    <title>Карта продаж</title>
                    <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                    <meta property='og:title' content='Карта клиентов' />
                    <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                    <meta property='og:type' content='website' />
                    <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                    <meta property='og:url' content={`${urlMain}/statistic/clientGeo`} />
                    <link rel='canonical' href={`${urlMain}/statistic/clientGeo`}/>
                </Head>
                {
                    process.browser&&statisticClientGeo?
                        <div style={{height: window.innerHeight-64, width: isMobileApp?window.innerWidth:window.innerWidth-300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                load?<CircularProgress/>:null
                            }
                            <div style={{display: load?'none':'block'}}>
                                <Map onLoad={()=>{setLoad(false)}} height={window.innerHeight-64} width={isMobileApp?window.innerWidth:window.innerWidth-300}
                                         state={{ center: [42.8700000, 74.5900000], zoom: 15 }}
                                    >
                                    <ObjectManager
                                        options={{
                                            clusterize: true,
                                            gridSize: 32,
                                        }}
                                        objects={{
                                            openBalloonOnClick: true,
                                            preset: 'islands#redDotIcon',
                                        }}
                                        clusters={{
                                            preset: 'islands#redClusterIcons',
                                        }}
                                        features={redData}
                                    />
                                    <ObjectManager
                                        options={{
                                            clusterize: true,
                                            gridSize: 32,
                                        }}
                                        objects={{
                                            openBalloonOnClick: true,
                                            preset: 'islands#greenDotIcon',
                                        }}
                                        clusters={{
                                            preset: 'islands#greenClusterIcons',
                                        }}
                                        features={greenData}
                                    />
                                    <ObjectManager
                                        options={{
                                            clusterize: true,
                                            gridSize: 32,
                                        }}
                                        objects={{
                                            openBalloonOnClick: true,
                                            preset: 'islands#yellowDotIcon',
                                        }}
                                        clusters={{
                                            preset: 'islands#yellowClusterIcons',
                                        }}
                                        features={yellowData}
                                    />
                                        {
                                           /* statisticClientGeo?
                                                (statisticClientGeo.slice(1)).map(
                                                        (element, idx) => {
                                                            return <Placemark
                                                                onClick={()=>{window.open(`/client/${element.client}`,'_blank');}}
                                                                key={idx}
                                                                options={{iconColor: element.data[1]}}
                                                                properties={{iconCaption: }}
                                                                geometry={element.address[1].split(', ')}/>
                                                        }
                                                    )
                                                :
                                                null
                                                */
                                        }
                                </Map>
                            </div>
                        </div>
                        :
                        null
                }
            </App>
        </YMaps>
        <Autocomplete
            style={{width: 150, position: 'fixed', top: 74, right: 10, padding: 10, borderRadius: 5, boxShadow: '0 0 10px rgba(0,0,0,0.5)', background: '#fff'}}
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
        {
            items&&items.length>0?
                <Autocomplete
                    style={{width: 150, position: 'fixed', top: 74, right: 180, padding: 10, borderRadius: 5, boxShadow: '0 0 10px rgba(0,0,0,0.5)', background: '#fff'}}
                    options={items}
                    getOptionLabel={option => option.name}
                    value={item}
                    onChange={(event, newValue) => {
                        setItem(newValue)
                    }}
                    noOptionsText='Ничего не найдено'
                    renderInput={params => (
                        <TextField {...params} label='Товар' fullWidth />
                    )}
                />
                :
                null
        }
        {
            statisticClientGeo?
                <div className='count'>
                    {`${parseInt(statisticClientGeo[0].data[0])+parseInt(statisticClientGeo[0].data[1])+parseInt(statisticClientGeo[0].data[2])}(${statisticClientGeo[0].data[0]}|${statisticClientGeo[0].data[1]}|${statisticClientGeo[0].data[2]})`}
                </div>
                :null
        }
        </>
    )
})

ClientGeoStatistic.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
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

export default connect(mapStateToProps)(ClientGeoStatistic);