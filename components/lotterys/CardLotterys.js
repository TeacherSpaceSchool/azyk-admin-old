import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardPageListStyle from '../../src/styleMUI/lotterys/cardLottery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import CardContent from '@material-ui/core/CardContent';
import { countdown } from '../../src/lib'
import Link from 'next/link';

const CardLottery = React.memo((props) => {
    const classes = cardPageListStyle();
    const { element, color } = props;
    const { isMobileApp } = props.app;
    let [countdownData, setCountdownData] = useState({hours: 0, days: 0});
    useEffect(()=>{
        setCountdownData(countdown(element.date))
    }, []);
    return (
        <Link href='/lottery/[id]' as={`/lottery/${element._id}`}>
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                    <img
                        className={isMobileApp?classes.mediaM:classes.mediaD}
                        src={element.image}
                        alt={element.title}
                    />
                    <CardContent className={classes.title}>
                        <div className={classes.row}>Розыгрыш: &nbsp;
                            {
                                element.status==='разыграна'?
                                    <div style={{color: color}}>Разыграна</div>
                                    :
                                    countdownData.days>0?
                                        <div style={{color: color}}>{countdownData.days} дней {countdownData.hours} часов {countdownData.minutes} минут</div>

                                        :
                                        countdownData.hours>0?
                                            <div style={{color: color}}>{countdownData.hours} часов {countdownData.minutes} минут</div>
                                            :
                                            countdownData.minutes>0?
                                                <div style={{color: color}}>{countdownData.minutes} минут</div>
                                                :
                                                <div style={{color: color}}>сегодня</div>
                            }
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardLottery)