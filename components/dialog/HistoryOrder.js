import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrderHistorys } from '../../src/gql/order'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { pdDDMMYYHHMM } from '../../src/lib'

const HistoryOrder =  React.memo(
    (props) =>{
        const { isMobileApp } = props.app;
        const { showMiniDialog } = props.mini_dialogActions;
        const { classes, invoice } = props;
        let [historyOrders, setHistoryOrders] = useState([]);
        const width = isMobileApp? (window.innerWidth-112) : 500;
        useEffect(()=>{
            (async()=>{
                historyOrders = (await getOrderHistorys(invoice)).orderHistorys
                if(historyOrders)
                    setHistoryOrders(historyOrders)
            })()
        },[])
        return (
            <div className={classes.column} style={{width: width}}>
                {
                    historyOrders.map((historyOrder) =>
                        <>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Изменен:&nbsp;</div>
                            <div className={classes.value}>{pdDDMMYYHHMM(new Date(historyOrder.createdAt))}</div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Изменил:&nbsp;</div>
                            <div className={classes.value}>{historyOrder.editor}</div>
                        </div>
                        <br/>
                        </>
                    )
                }
                <div>
                    <Button variant='contained' color='secondary' onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </div>
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
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

HistoryOrder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(HistoryOrder));