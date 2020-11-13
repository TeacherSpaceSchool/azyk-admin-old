import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import Order from './Order';
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import {getOrder} from '../../src/gql/order'

const WinnerListLottery =  React.memo(
    (props) =>{
        const { showFullDialog } = props.mini_dialogActions;
        const { classes, tickets } = props;
        return (
            <div className={classes.column}>
                {
                    tickets.map((element, idx)=> {
                            if (element.prize && element.prize.length) {
                                return (
                                    <div className={classes.row} key={`winner${idx}`}>
                                        <div className={classes.nameField}>
                                            {`${element.client.name}${element.client.address&&element.client.address[0]?` (${element.client.address[0][2]?`${element.client.address[0][2]}, `:''}${element.client.address[0][0]})`:''}`}:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {element.prize}
                                        </div>
                                    </div>)
                            }
                        }
                    )
                }
                <br/>
                <br/>
                <center>
                    <Button variant='contained' color='secondary' onClick={()=>{showFullDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </center>
            </div>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch)
    }
}

WinnerListLottery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(WinnerListLottery));