import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardOrganizationStyle from '../../src/styleMUI/organization/cardOrganization.js'
import { connect } from 'react-redux'
import Link from 'next/link';


const CardBrand = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    return (
        isMobileApp?
            <Link href={`/${profile.role==='client'?'catalog':'brand'}/[id]`} as={`/${profile.role==='client'?'catalog':'brand'}/${element._id}`}>
                <Card className={classes.cardBrand}>
                    <img
                        className={classes.mediaBrand}
                        src={element.image}
                        alt={element.name}
                    />
                    <div className={classes.nameBrand}>
                        {element.name}
                    </div>
                    <div className={classes.textBrand}>
                        {element.miniInfo?element.miniInfo:''}
                    </div>
                </Card>
            </Link>
            :
            <Link href={`/${profile.role==='client'?'catalog':'brand'}/[id]`} as={`/${profile.role==='client'?'catalog':'brand'}/${element._id}`}>
                <Card className={isMobileApp?classes.cardM:classes.cardD}>
                    <CardActionArea>
                        <div className={classes.line}>
                            <img
                                className={classes.mediaO}
                                src={element.image}
                                alt={element.name}
                            />
                            <div className={classes.column}>
                                <h3 className={classes.input}>
                                    {element.name}
                                </h3>
                                {
                                    element.miniInfo?
                                        <div className={classes.value}>
                                            {element.miniInfo}
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </CardActionArea>
                </Card>
            </Link>
    );
})

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user
    }
}


export default connect(mapStateToProps)(CardBrand)