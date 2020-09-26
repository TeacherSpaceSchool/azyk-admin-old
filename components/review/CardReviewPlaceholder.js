import React from 'react';
import { connect } from 'react-redux'
import cardCategoryStyle from '../../src/styleMUI/subcategory/cardSubcategory'
import Skeleton from '@material-ui/lab/Skeleton';

const CardReviewPlaceholder = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { height } = props;
    const { isMobileApp } = props.app;
    return (
        <div className={isMobileApp?classes.cardM:classes.cardD} style={{height: height}}>
            <Skeleton variant='rect' height='100%'/>
        </div>
    );
})

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

export default connect(mapStateToProps)(CardReviewPlaceholder)