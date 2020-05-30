import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import * as userActions from '../../redux/actions/user'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { checkInt } from '../../src/lib'

const SetPackage =  React.memo(
    (props) =>{
        const { action, classes, idx } = props;
        const { showMiniDialog } = props.mini_dialogActions;
        let [count, setCount] = useState(0);
        let handleCount =  (event) => {
            setCount(checkInt(event.target.value))
        };
        return (
            <div className={classes.main}>
                <TextField
                    value={count}
                    className={classes.input}
                    onChange={handleCount}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <br/>
                <br/>
                <div>
                    <Button variant='contained' color='primary' onClick={async()=>{
                        action(idx, count);
                        showMiniDialog(false);
                    }} className={classes.button}>
                        Сохранить
                    </Button>
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
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

SetPackage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(SetPackage));