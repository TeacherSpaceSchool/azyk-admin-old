import React, {useState} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import drawerStyle from '../../src/styleMUI/drawer'
import * as appActions from '../../redux/actions/app'
import * as userActions from '../../redux/actions/user'
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReorderIcon from '@material-ui/icons/ViewList';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import CommuteIcon from '@material-ui/icons/Commute';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CopyrightIcon from '@material-ui/icons/Loyalty';
import LiveHelp from '@material-ui/icons/LiveHelp';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalShipping from '@material-ui/icons/LocalShipping';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import MoneyIcon from '@material-ui/icons/Money';
import EqualizerIcon from '@material-ui/icons/Build';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Badge from '@material-ui/core/Badge';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';


const MyDrawer = React.memo((props) => {
    const { classes, unread } = props
    const { drawer, isMobileApp } = props.app;
    const { profile, authenticated } = props.user;
    const { showDrawer } = props.appActions;
    let variant = isMobileApp?'temporary' : 'permanent';
    const open = isMobileApp?drawer:true;
    const router = useRouter();
    const [uncoverBonus, setUncoverBonus] = useState(null);
    return (
        <Drawer
            disableSwipeToOpen = {true}
            disableBackdropTransition = {true}
            onOpen={()=>showDrawer(true)}
            disableDiscovery={true}
            variant= {variant}
            className={classes.drawer}
            open={open}
            onClose={()=>showDrawer(false)}
            classes={{paper: classes.drawerPaper,}}
        >
            {
                isMobileApp?
                    null
                    :
                    <div className={classes.toolbar}/>
            }
            <List>
                <Divider />
                {
                    ['admin', 'client'].includes(profile.role)?
                        <>
                        <Link href='/'>
                            <ListItem style={{background: router.pathname===('/')||router.pathname.includes('brand')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><CopyrightIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Бренды' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['экспедитор', 'суперорганизация', 'организация', 'менеджер'].includes(profile.role)?
                        <>
                        <Link href={'/items/[id]'} as={'/items/all'}>
                                <ListItem style={{background:
                                    (
                                        router.pathname===('/category')
                                        ||
                                        router.pathname.includes('subcategory')
                                        ||
                                        router.pathname.includes('item')
                                    )&&!router.pathname.includes('statistic')?
                                        '#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                    <ListItemIcon><ReorderIcon color='inherit'/></ListItemIcon>
                                    <ListItemText primary={'Товары'} />
                                </ListItem>
                            </Link>
                        <Divider/>
                        </>
                        :
                        [/*'client', */'admin'].includes(profile.role)?
                            <>
                            <Link href='/category'>
                                    <ListItem style={{background: (router.pathname===('/category')
                                    ||
                                    router.pathname.includes('subcategory')
                                    ||
                                    router.pathname.includes('item'))&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <ListItemIcon><ReorderIcon color='inherit'/></ListItemIcon>
                                        <ListItemText primary='Категории' />
                                    </ListItem>
                                </Link>
                            <Divider/>
                            </>
                            :
                            null
                }
                {
                   ['суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                       <>
                        <Link href={'/catalog'} as={'/catalog'}>
                            <ListItem style={{background:router.pathname.includes('catalog')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><LocalGroceryStore color='inherit'/></ListItemIcon>
                                <ListItemText primary={'Каталог'} />
                            </ListItem>
                        </Link>
                       <Divider/>
                       </>
                        :null
                }
                {
                    ['admin', 'client', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <ListItem style={{background: router.pathname.includes('bonus')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(!uncoverBonus)}}>
                            <ListItemIcon><MoneyIcon color='inherit'/></ListItemIcon>
                            <ListItemText primary='Бонусы' />
                            <ListItemIcon>{uncoverBonus?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                        </ListItem>
                        <Divider/>
                        {
                            uncoverBonus?
                                <>
                                <Link href='/bonus'>
                                    <ListItem style={{marginLeft: 16, background: router.pathname==='/bonus'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <ListItemText primary={['суперорганизация', 'организация', 'менеджер', 'агент'].includes(profile.role)?'Бонусы компании':'Бонусы компаний'}/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                {
                                    ['admin', 'client', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                                        <>
                                        <Link href='/bonusclient'>
                                            <ListItem style={{marginLeft: 16, background: router.pathname==='/bonusclient'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={['admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?'Бонусы клиентов':'Мои бонусы'}/>
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :null
                                }
                                </>
                                :
                                null
                        }
                        </>
                        :null
                }
                {
                    ['admin', 'client', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href={`/ads`} as={`/ads`}>
                            <ListItem style={{background: router.pathname.includes('ads')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><WhatshotIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Акции' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href={'/clients'}>
                            <ListItem style={{background: router.pathname.includes('client')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><GroupIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Клиенты' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['client', 'admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href='/orders'>
                            <ListItem style={{background: router.pathname==='/orders'&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><ReceiptIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Заказы' />
                                <Badge color='secondary' variant='dot' invisible={!unread.orders}/>
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href='/returneds'>
                            <ListItem style={{background: router.pathname==='/returneds'&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><ReceiptIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Возвраты' />
                                <Badge color='secondary' variant='dot' invisible={!unread.returneds}/>
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    authenticated?['экспедитор', 'суперорганизация', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <Link href='/organization/[id]' as={`/organization/${profile.organization}`}>
                            <ListItem style={{background: router.pathname.includes('organization')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><BusinessCenterIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организация' />
                            </ListItem>
                        </Link>
                        :
                        <Link href='/organizations'>
                            <ListItem style={{background: router.pathname.includes('organization')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><BusinessCenterIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организации' />
                            </ListItem>
                        </Link>
                        :null
                }
                <Divider/>
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер'].includes(profile.role)?
                        <>
                        <Link href={`/employments${['суперорганизация', 'организация', 'менеджер'].includes(profile.role)?'/[id]':''}`} as={`/employments${['суперорганизация', 'организация', 'менеджер'].includes(profile.role)?`/${profile.organization}`:''}`}>
                            <ListItem style={{background: router.pathname.includes('employment')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><GroupIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Сотрудники' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href={['суперорганизация', 'организация', 'менеджер', 'admin'].includes(profile.role)?`/districts${['суперорганизация', 'организация', 'менеджер', 'оператор'].includes(profile.role)?'/[id]':''}`:'/district/[id]'} as={['суперорганизация', 'организация', 'менеджер', 'admin', 'оператор'].includes(profile.role)?`/districts${['суперорганизация', 'организация', 'менеджер', 'оператор'].includes(profile.role)?`/${profile.organization}`:''}`:'/district/agent'}>
                            <ListItem style={{background: router.pathname.includes('district')&&!router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><LocationCityIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary={['агент', 'суперагент'].includes(profile.role)?'Район':'Районы'} />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер', 'агент', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href={['суперорганизация', 'организация', 'менеджер', 'admin'].includes(profile.role)?`/agentroutes${['суперорганизация', 'организация', 'менеджер', 'оператор'].includes(profile.role)?'/[id]':''}`:'/agentroute/[id]'} as={['суперорганизация', 'организация', 'менеджер', 'admin', 'оператор'].includes(profile.role)?`/agentroutes${['суперорганизация', 'организация', 'менеджер', 'оператор'].includes(profile.role)?`/${profile.organization}`:''}`:'/agentroute/agent'}>
                            <ListItem style={{background: router.pathname.includes('agentroute')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><FormatListNumberedIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary={['агент', 'суперагент'].includes(profile.role)?'Маршрут агента':'Маршруты агентов'} />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin'].includes(profile.role)?
                        <>
                        <Link href='/routes'>
                            <ListItem style={{background: router.pathname==='/routes'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><FormatListNumberedIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Маршруты экспедитора' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    'admin'===profile.role?
                        <>
                        <Link href={'/distributers'} as={'/districts'}>
                            <ListItem style={{background: router.pathname.includes('distributers')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><LocalShipping color='inherit'/></ListItemIcon>
                                <ListItemText primary='Дистрибьюторы' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <>
                        <Link href='/equipments'>
                            <ListItem style={{background: router.pathname==='/equipments'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><AllInboxIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Оборудование' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'суперорганизация', 'организация', 'менеджер'].includes(profile.role)?
                        <>
                        <Link href='/autos'>
                            <ListItem style={{background: router.pathname==='/autos'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><CommuteIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Транспорт' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'client', 'суперагент'].includes(profile.role)?
                        <>
                        <Link href='/blog'>
                            <ListItem style={{background: router.pathname==='/blog'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><ArtTrackIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Блог' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                <Link href={'/contact'}>
                    <ListItem style={{background: router.pathname==='/contact'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                        <ListItemIcon><InfoIcon color='inherit'/></ListItemIcon>
                        <ListItemText primary='Контакты' />
                    </ListItem>
                </Link>
                <Divider/>
                {
                    authenticated?
                        <>
                        <Link href={'/faq'}>
                            <ListItem style={{background: router.pathname==='/faq'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><LiveHelp color='inherit'/></ListItemIcon>
                                <ListItemText primary='Инструкции' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                    :null
                }
                {
                    ['admin','суперорганизация', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <>
                        <Link href={'/statistic'}>
                            <ListItem style={{background: router.pathname.includes('statistic')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><EqualizerIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Инструменты' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
            </List>
        </Drawer>
    )
})

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(drawerStyle)(MyDrawer))