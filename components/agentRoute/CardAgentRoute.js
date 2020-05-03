import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import cardRouteStyle from '../../src/styleMUI/route/cardRoute'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import { deleteAgentRoute } from '../../src/gql/agentRoute'
import Link from 'next/link';
import Confirmation from '../dialog/Confirmation'

const CardAgentRoute = React.memo((props) => {
    const classes = cardRouteStyle();
    const { element, setList } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { profile } = props.user;
    return (
        <Card className={classes.card}>
            <Link href='/agentroute/[id]' as={`/agentroute/${element!==undefined?element._id:'new'}`}>
                <CardActionArea>
                    <CardContent className={classes.column}>
                        <div className={classes.row}>
                            <div className={classes.number}>{element.name}</div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Организация:&nbsp;</div>
                            <div className={classes.value}>{element.organization?element.organization.name:'AZYK.STORE'}</div>
                        </div>
                        {
                            element.district?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Район:&nbsp;</div>
                                    <div className={classes.value}>{element.district.name}</div>
                                </div>
                                :
                                null
                        }
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {
                    ['суперорганизация', 'организация', 'менеджер', 'admin'].includes(profile.role)?
                        <Button onClick={async()=>{
                            const action = async() => {
                                setList((await deleteAgentRoute([element._id], element.organization._id)).agentRoutes)
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Удалить
                        </Button>
                        :
                        null
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(CardAgentRoute)