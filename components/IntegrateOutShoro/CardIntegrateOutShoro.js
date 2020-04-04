import React  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import cardIntegrateOutShoroStyle from '../../src/styleMUI/integrateOutShoro/cardIntegrateOutShoro'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import { pdDDMMYY } from '../../src/lib'
import Confirmation from '../../components/dialog/Confirmation'
import { deleteOutXMLReturnedShoro, deleteOutXMLShoro, restoreOutXMLReturnedShoro, restoreOutXMLShoro } from '../../src/gql/integrateOutShoro'

const CardIntegrateOutShoro = React.memo((props) => {
    const classes = cardIntegrateOutShoroStyle();
    const { element, setList, list, idx, type } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const statusColor = {
        'create': 'orange',
        'del': 'blue',
        'update': 'blue',
        'check': 'green',
        'error': 'red'
    }
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Номер {type==='Возвраты'?'возвратa':'заказа'}:&nbsp;</div>
                        <div className={classes.value}>{element.number}</div>
                        <div className={classes.status} style={{background: statusColor[element.status]}}>
                            {element.status}
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Дата:&nbsp;</div>
                        <div className={classes.value}>{pdDDMMYY(element.date)}</div>
                    </div>
                    {
                        element.exc?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Ошибка: &nbsp;</div>
                                <div className={classes.value}>{element.exc}</div>
                            </div>
                            :
                            null
                    }
                </CardContent>
            </CardActionArea>
            <CardActions>
                {element.status!=='check'?
                    <Button onClick={async()=>{
                        const action = async() => {
                            type==='Возвраты'?await deleteOutXMLReturnedShoro(element._id):await deleteOutXMLShoro(element._id)
                            let _list = [...list]
                            _list.splice(_list.indexOf(element), 1)
                            setList(_list)
                        }
                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                        showMiniDialog(true)
                    }} size='small' color='primary'>
                        Удалить
                    </Button>
                    :
                    null
                }
                <Button onClick={async()=>{
                    const action = async() => {
                        let res = type==='Возвраты'?await restoreOutXMLReturnedShoro(element._id):await restoreOutXMLShoro(element._id)
                        let _list = [...list]
                        _list[idx] = res
                        setList(_list)
                    }
                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                    showMiniDialog(true)
                }} size='small' color='primary'>
                    Восстановить
                </Button>
            </CardActions>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardIntegrateOutShoro)