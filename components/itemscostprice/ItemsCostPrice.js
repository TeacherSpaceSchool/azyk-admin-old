import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cardCategoryStyle from '../../src/styleMUI/subcategory/cardSubcategory'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';

const CardCategory = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, idx, setList, list } = props;
    const { isMobileApp } = props.app;
    //addCard
    let [costPrice, setCostPrice] = useState('');
    let handleCostPrice =  (event) => {
        while((event.target.value).includes(','))
            event.target.value = (event.target.value).replace(',', '.')
        list[idx].costPrice = event.target.value
        setList([...list])
    };
    useEffect(()=>{
        (async()=>{
            setCostPrice(list[idx].costPrice)
        })()
    },[list])
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardContent>
                <div className={classes.row}>
                    <div className={classes.nameField}>Товар:&nbsp;</div>
                    <div className={classes.value}>{element.name}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Цена:&nbsp;</div>
                    <div className={classes.value}>{element.price} сом</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Себестоимость:&nbsp;</div>
                    <div className={classes.value}>{list[idx].costPrice} сом</div>
                </div>
                <TextField
                    label='Себестоимость'
                    value={costPrice}
                    type={isMobileApp?'number':'text'}
                    className={classes.input}
                    onChange={handleCostPrice}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
            </CardContent>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardCategory)