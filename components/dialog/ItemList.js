import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'

const ItemList =  React.memo(
    (props) =>{
        const { classes, items } = props;
        const { showMiniDialog } = props.mini_dialogActions;
        return (
            <div className={classes.column}>
                {
                    items.map((item, idx) => {
                        return(
                                <div key={idx} className={classes.column}>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Товар:&nbsp;</div>
                                        <div className={classes.value}>{item[0]}</div>
                                    </div>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Количество:&nbsp;</div>
                                        <div className={classes.value}>{item[1]}&nbsp;шт</div>
                                    </div>
                                    <br/>
                                </div>
                            )
                    })
                }
                <center>
                    <Button variant="contained" color="secondary" onClick={()=>{showMiniDialog(false);}} className={classes.button}>
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
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

ItemList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(ItemList));