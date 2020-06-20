import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import {getEquipment, setEquipment, deleteEquipment, addEquipment} from '../../src/gql/equipment'
import organizationStyle from '../../src/styleMUI/equipment/equipment'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { useRouter } from 'next/router'
import { getOrganizations } from '../../src/gql/organization'
import { getClients } from '../../src/gql/client'
import Router from 'next/router'
import * as userActions from '../../redux/actions/user'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Confirmation from '../../components/dialog/Confirmation'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import initialApp from '../../src/initialApp'

const Equipment = React.memo((props) => {
    const { profile } = props.user;
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const { user } = props.user;
    const { showSnackBar } = props.snackbarActions;
    const clients = data.clients;
    const organizations = data.organizations;
    let [number, setNumber] = useState(data.equipment!==null?data.equipment.number:'');
    let [name, setName] = useState(data.equipment!==null?data.equipment.name:'');
    let [organization, setOrganization] = useState(data.equipment!==null?data.equipment.organization:{});
    let [client, setClient] = useState(data.equipment!==null?data.equipment.client:{});
    let handleClient =  (client) => {
        setClient(client)
    };
    let handleOrganization =  (organization) => {
        setOrganization(organization)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const router = useRouter()
    return (
        <App pageName={data.equipment?router.query.id==='new'?'Добавить':data.equipment.name:'Ничего не найдено'}>
            <Head>
                <title>{data.equipment!==null?router.query.id==='new'?'Добавить':data.equipment.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.equipment!==null?router.query.id==='new'?'Добавить':data.equipment.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/equipment/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/equipment/${router.query.id}`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                {
                    data.equipment!==null?
                        <>
                        <TextField
                            label='Номер'
                            value={number}
                            className={classes.input}
                            onChange={(event)=>{setNumber(event.target.value)}}
                            inputProps={{
                                'aria-label': 'description',
                                readOnly: !['admin', 'суперорганизация', 'организация'].includes(profile.role),
                            }}
                        />
                        <TextField
                            label='Оборудование'
                            value={name}
                            className={classes.input}
                            onChange={(event)=>{setName(event.target.value)}}
                            inputProps={{
                                'aria-label': 'description',
                                readOnly: !['admin', 'суперорганизация', 'организация'].includes(profile.role),
                            }}
                        />
                        {
                            ['admin'].includes(profile.role)?
                                <Autocomplete
                                    className={classes.input}
                                    options={organizations}
                                    getOptionLabel={option => option.name}
                                    value={organization}
                                    onChange={(event, newValue) => {
                                        handleOrganization(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Выберите организацию' fullWidth />
                                    )}
                                />
                                :
                                null
                        }
                        {
                            ['admin', 'суперорганизация', 'организация'].includes(profile.role)?
                                <Autocomplete
                                    className={classes.input}
                                    options={clients}
                                    value={client}
                                    getOptionLabel={option => option.name}
                                    onChange={(event, newValue) => {
                                        handleClient(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Выберите клиента' fullWidth />
                                    )}
                                />
                                :
                                <TextField
                                    label='Клиент'
                                    value={client.name}
                                    className={classes.input}
                                    inputProps={{
                                        'aria-label': 'description',
                                        readOnly: true,
                                    }}
                                />
                        }
                        <div className={classes.row}>
                            {
                                router.query.id==='new'?
                                    <Button onClick={async()=>{
                                        if (name.length>0&&number.length>0) {
                                            const action = async() => {
                                                let equipment = {
                                                    name: name,
                                                    number: number,
                                                    organization: organization._id
                                                }
                                                if(client&&client._id)
                                                    equipment.client = client._id
                                                if(organization&&organization._id)
                                                    equipment.organization = organization._id
                                                await addEquipment(equipment)
                                                Router.push('/equipments')
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        } else {
                                            showSnackBar('Заполните все поля')
                                        }
                                    }} size='small' color='primary'>
                                        Добавить
                                    </Button>
                                    :
                                    <>
                                    <Button onClick={async()=>{
                                        let editElement = {_id: data.equipment._id}
                                        if(name.length>0&&name!==data.equipment.name)editElement.name = name
                                        if(number.length>0&&number!==data.equipment.number)editElement.number = number
                                        if(organization._id&&organization._id!==data.equipment.organization._id)editElement.organization = organization._id
                                        if(client._id&&client._id!==data.equipment.client._id)editElement.client = client._id
                                        const action = async() => {
                                            await setEquipment(editElement)
                                        }
                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                        Сохранить
                                    </Button>
                                    <Button onClick={
                                        async()=>{
                                            const action = async() => {
                                                await deleteEquipment([data.equipment._id])
                                                Router.push('/equipments')
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }
                                    } size='small' color='primary'>
                                        Удалить
                                    </Button>
                                    </>
                            }
                        </div>
                        </>
                        :
                        'Ничего не найдено'
                }
                </CardContent>
            </Card>
        </App>
    )
})

Equipment.getInitialProps = async function(ctx) {
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
        data: {
            ...ctx.query.id!=='new'?await getEquipment({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{equipment:{name: '',number: '',client: {_id: '',},organization: {_id: ''},}},
            ...await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getClients({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);