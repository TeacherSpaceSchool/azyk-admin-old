import React, {useState, useEffect} from 'react';
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
import { checkInt } from '../../src/lib'
import { getClientsForLottery } from '../../src/gql/lottery'
import CircularProgress from '@material-ui/core/CircularProgress';

const CardLotteryTicket = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, setList, list, idx, lottery } = props;
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    const { profile } = props.user;
    const [clients, setClients] = useState([]);
    const [inputValue, setInputValue] = React.useState('');
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async()=>{
            if (inputValue.length<3) {
                setClients([]);
                if(open)
                    setOpen(false)
                if(loading)
                    setLoading(false)
            }
            else {
                if(!loading)
                    setLoading(true)
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setClients((await getClientsForLottery({search: inputValue, lottery: lottery})).clientsForLottery)
                    if(!open)
                        setOpen(true)
                    setLoading(false)
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    }, [inputValue]);
    const handleChange = event => {
        setInputValue(event.target.value);
    };
    let [number] = useState(element?element.number:randomstring.generate({length: 20, charset: 'numeric'}));
    const statusColor = {
        'розыгрыш': 'orange',
        'победитель': 'green',
        'проигравший': 'red'
    }
    let [countWin, setCountWin] = useState(element?element.countWin:1);
    let [coupons, setCoupons] = useState(element?element.coupons:1);
    useEffect(() => {
        if(idx!==undefined) {
            setCountWin(list[idx].countWin)
            setCoupons(list[idx].coupons)
        }
    }, [list]);
    let [client, setClient] = useState(element?element.client:{});
    let handleClient =  (client) => {
        setClient(client)
        setOpen(false)
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
                                null
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
                            ['admin', 'суперорганизация', 'организация'].includes(profile.role)&&!element?
                                <>
                                <div className={classes.row}>
                                    <Autocomplete
                                        open={open}
                                        disableOpenOnFocus
                                        className={classes.input}
                                        options={clients}
                                        getOptionLabel={option => `${option.name}${option.address&&option.address[0]?` (${option.address[0][2]?`${option.address[0][2]}, `:''}${option.address[0][0]})`:''}`}
                                        onChange={(event, newValue) => {
                                            handleClient(newValue)
                                        }}
                                        noOptionsText='Ничего не найдено'
                                        renderInput={params => (
                                            <TextField {...params} label='Выберите клиента' variant='outlined' fullWidth
                                                       onChange={handleChange}
                                                       InputProps={{
                                                           ...params.InputProps,
                                                           endAdornment: (
                                                               <React.Fragment>
                                                                   {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                                   {params.InputProps.endAdornment}
                                                               </React.Fragment>
                                                           ),
                                                       }}
                                            />
                                        )}
                                    />
                                </div>
                                </>
                                :
                                <a href={`/client/${element.client._id}`} target='_blank'>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Участник:&nbsp;</div>
                                        <div className={classes.value}>{element.client.name}</div>
                                    </div>
                                </a>
                        }
                        {
                            ['admin', 'суперорганизация', 'организация'].includes(profile.role)&&(!element||element.status==='розыгрыш')?
                                <>
                                <div className={classes.row}>
                                    <TextField
                                        type={isMobileApp?'number':'text'}
                                        label='Купонов'
                                        value={coupons}
                                        className={classes.input}
                                        onChange={(event)=>{
                                            list[idx].coupons = event.target.value
                                            setList([...list])
                                        }}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                </div>
                                <div className={classes.row}>
                                    <TextField
                                        type={isMobileApp?'number':'text'}
                                        label='Шансов'
                                        value={countWin}
                                        className={classes.input}
                                        onChange={(event)=>{
                                            list[idx].countWin = event.target.value
                                            setList([...list])
                                        }}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                </div>
                                </>
                        :
                        null
                        }
                    </CardContent>
                </CardActionArea>
                {
                    ['admin', 'суперорганизация', 'организация'].includes(profile.role)&&(!element||element.status==='розыгрыш')?
                        <CardActions>
                            {
                                element!==undefined?
                                    <>
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
                                                    coupons = checkInt(coupons)?checkInt(coupons):1
                                                    setCoupons(1)
                                                    countWin = checkInt(countWin)?checkInt(countWin):1
                                                    setCountWin(1)
                                                    let element = {status: 'розыгрыш', number: number, client: client, coupons: coupons, countWin: countWin}
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