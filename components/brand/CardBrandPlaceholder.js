import React from 'react';
import { connect } from 'react-redux'
import cardCategoryStyle from '../../src/styleMUI/organization/cardOrganization'
import Skeleton from '@material-ui/lab/Skeleton';

const CardOrganizationPlaceholder = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { isMobileApp } = props.app;
    return (
        <div className={isMobileApp?classes.cardBrand:classes.cardD} style={{height: isMobileApp?125:80}}>
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

export default connect(mapStateToProps)(CardOrganizationPlaceholder)