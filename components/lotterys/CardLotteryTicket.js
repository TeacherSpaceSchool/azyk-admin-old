import React, {useState} from 'react';
import randomstring from 'randomstring';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardCategoryStyle from '../../src/styleMUI/lotterys/cardLottery'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Confirmation from '../dialog/Confirmation';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CardLotteryTicket = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, setList, clientsForLottery, list, idx } = props;
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    const { profile } = props.user;
    const number = element?element.number:randomstring.generate({length: 20, charset: 'numeric'});
    const statusColor = {
        'розыгрыш': 'orange',
        'победитель': 'green',
        'проигравший': 'red'
    }
    let [client, setClient] = useState(element?element.client:{});
    let handleClient =  (client) => {
        setClient(client)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
        <div>
            <Card className={isMobileApp?classes.cardM:classes.cardDTicket}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.row}>
                            <div className={classes.nameField}>№ билета:&nbsp;</div>
                            <div className={classes.value}>{number}</div>
                        </div>
                        {
                            element&&element.status?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Статус:&nbsp;</div>
                                    <div className={classes.value} style={{color: statusColor[element.status]}}>{element.status}</div>
                                </div>
                                :
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Клиентов:&nbsp;</div>
                                    <div className={classes.value}>{clientsForLottery.length}</div>
                                </div>
                        }
                        {
                            element&&element.prize?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Приз:&nbsp;</div>
                                    <div className={classes.value}>{element.prize}</div>
                                </div>
                                :
                                null
                        }
                        {
                            ['admin', 'суперорганизация', 'организация'].includes(profile.role)&&(!element||element.status==='розыгрыш')?
                                <Autocomplete
                                    className={classes.input}
                                    options={clientsForLottery}
                                    getOptionLabel={option => option.name}
                                    value={client}
                                    onChange={(event, newValue) => {
                                        handleClient(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Выберите клиента' fullWidth />
                                    )}
                                />
                                :
                                <a href={`/client/${element.client._id}`} target='_blank'>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Участник:&nbsp;</div>
                                        <div className={classes.value}>{element.client.name}</div>
                                    </div>
                                </a>
                        }
                    </CardContent>
                </CardActionArea>
                {
                    ['admin', 'суперорганизация', 'организация'].includes(profile.role)&&(!element||element.status==='розыгрыш')?
                        <CardActions>
                            {
                                element!==undefined?
                                    <>
                                    <Button onClick={async()=>{
                                        if(client&&client._id) {
                                            let filterList = list.filter(element=>element.client._id===client._id)
                                            if(!filterList.length) {
                                                const action = async () => {
                                                    let _list = [...list]
                                                    _list[idx].client = client
                                                    setList(_list)
                                                }
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }
                                            else {
                                                showSnackBar('Клиент уже выбран');
                                            }
                                        }
                                        else {
                                            showSnackBar('Заполните все поля');
                                        }
                                    }} size='small' color='primary'>
                                        Сохранить
                                    </Button>
                                    <Button size='small' color='primary' onClick={()=>{
                                        const action = async() => {
                                            let _list = [...list]
                                            _list.splice(idx, 1)
                                            setList(_list)
                                        }
                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }}>
                                        Удалить
                                    </Button>
                                    </>
                                    :
                                    <Button onClick={async()=> {
                                        if(client&&client._id) {
                                            let filterList = list.filter(element=>element.client._id===client._id)
                                            if(!filterList.length) {
                                                const action = async () => {
                                                    let element = {status: 'розыгрыш', number: number, client: client}
                                                    setList([element, ...list])
                                                }
                                                setClient({})
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }
                                            else {
                                                showSnackBar('Клиент уже выбран');
                                            }
                                        }
                                        else {
                                            showSnackBar('Заполните все поля');
                                        }
                                    }} size='small' color='primary'>
                                        Добавить
                                    </Button>
                            }
                        </CardActions>
                        :
                        null
                }
            </Card>
        </div>
    );
})

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardLotteryTicket)