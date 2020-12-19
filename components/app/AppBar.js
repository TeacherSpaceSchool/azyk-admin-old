import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
import * as appActions from '../../redux/actions/app'
import appbarStyle from '../../src/styleMUI/appbar'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Cancel from '@material-ui/icons/Cancel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/SearchRounded';
import Sort from '@material-ui/icons/SortRounded';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FilterList from '@material-ui/icons/FilterListRounded';
import DateRange from '@material-ui/icons/DateRange';
import PermIdentity from '@material-ui/icons/PermIdentity';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import Sign from '../dialog/Sign'
import Confirmation from '../dialog/Confirmation'
import SetDate from '../dialog/SetDate'
import SetOrganizations from '../dialog/SetOrganizations'
import SetCities from '../dialog/SetCities'
import { getActiveOrganization } from '../../src/gql/statistic'

const MyAppBar = React.memo((props) => {
    //props
    const classes = appbarStyle();
    const { filters, sorts, pageName, dates, searchShow, unread, defaultOpenSearch, organizations, cityShow } = props
    const { drawer, search, filter, sort, isMobileApp, date, organization, city } = props.app;
    const { showDrawer, setSearch, setFilter, setSort, setDate, setOrganization, setCity } = props.appActions;
    const { authenticated, profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { logout } = props.userActions;
    //state
    const [anchorElMobileMenu, setAnchorElMobileMenu] = React.useState(null);
    const openMobileMenu = Boolean(anchorElMobileMenu);
    let handleMobileMenu = (event) => {
        setAnchorElMobileMenu(event.currentTarget);
    }
    let handleCloseMobileMenu = () => {
        setAnchorElMobileMenu(null);
    }
    const [anchorElSort, setAnchorElSort] = useState(null);
    const openSort = Boolean(anchorElSort);
    let handleMenuSort = (event) => {
        setAnchorElSort(event.currentTarget);
    }
    let handleCloseSort = () => {
        setAnchorElSort(null);
    }
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);
    let handleMenuProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    }
    let handleCloseProfile = () => {
        setAnchorElProfile(null);
    }
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);
    let handleMenuFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    }
    let handleCloseFilter = () => {
        setAnchorElFilter(null);
    }
    const [anchorElDate, setAnchorElDate] = useState(null);
    const openDate = Boolean(anchorElDate);
    let handleMenuDate = (event) => {
        setAnchorElDate(event.currentTarget);
    }
    let handleCloseDate = () => {
        setAnchorElDate(null);
    }
    const [anchorElOrganizations, setAnchorElOrganizations] = useState(null);
    const openOrganizations = Boolean(anchorElOrganizations);
    let handleMenuOrganizations = (event) => {
        setAnchorElOrganizations(event.currentTarget);
    }
    let handleCloseOrganizations = () => {
        setAnchorElOrganizations(null);
    }
    const [anchorElCities, setAnchorElCities] = useState(null);
    const openCities = Boolean(anchorElCities);
    let handleMenuCities = (event) => {
        setAnchorElCities(event.currentTarget);
    }
    let handleCloseCities = () => {
        setAnchorElCities(null);
    }
    const [openSearch, setOpenSearch] = useState(defaultOpenSearch);
    let handleSearch = (event) => {
        setSearch(event.target.value)
    };
    useEffect(()=>{
        if(document.getElementById('search'))
            document.getElementById('search').focus();
    },[openSearch])
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className='appBar'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        aria-owns='menu-appbar'
                        aria-haspopup='true'
                        onClick={() => {showDrawer(!drawer)}}
                        color='inherit'
                    >
                        <Badge variant='dot' invisible={openSearch||!isMobileApp||!unread.orders&&!unread.returneds} color='secondary'>
                            <MenuIcon/>
                        </Badge>
                    </IconButton>
                    <Typography onClick={() => {showDrawer(!drawer)}} variant='h6' className={classes.title}>
                        {pageName}
                    </Typography>
                    {isMobileApp?
                        openSearch?
                            <Paper className={classes.searchM}>
                                <Input className={classes.searchField}
                                       id='search'
                                       type={'login'}
                                       value={search}
                                       onChange={handleSearch}
                                       endAdornment={
                                           <InputAdornment position='end'>
                                               <IconButton aria-label='Search' onClick={()=>{setSearch('');setOpenSearch(false)}}>
                                                   <Cancel />
                                               </IconButton>
                                           </InputAdornment>
                                       }/>
                            </Paper>
                            :
                            <>
                            {
                                cityShow||dates||searchShow||filters||sorts?
                                    <IconButton
                                        aria-owns={openMobileMenu ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMobileMenu}
                                        color='inherit'
                                    >
                                        <Search />
                                    </IconButton>
                                    :
                                    null
                            }
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElMobileMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                open={openMobileMenu}
                                onClose={handleCloseMobileMenu}
                            >
                                {
                                    searchShow?
                                        <MenuItem onClick={()=>{
                                            setOpenSearch(true);handleCloseMobileMenu()
                                        }}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <Search/>&nbsp;Поиск
                                            </div>
                                        </MenuItem>
                                        :
                                        null
                                }
                                {filters&&filters.length>0?
                                    [
                                        <MenuItem onClick={handleMenuFilter}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <FilterList/>&nbsp;Фильтр
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='filter'
                                            id='menu-appbar'
                                            anchorEl={anchorElFilter}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={openFilter}
                                            onClose={handleCloseFilter}
                                        >
                                            {filters.map((elem, idx)=><MenuItem key={'filter'+idx} style={{background: filter===elem.value?'rgba(51, 143, 255, 0.29)': '#fff'}}  onClick={()=>{setFilter(elem.value);handleCloseFilter();}}>{elem.name}</MenuItem>)}
                                        </Menu>
                                    ]
                                    :null
                                }
                                {sorts&&sorts.length>0?
                                    [
                                        <MenuItem onClick={handleMenuSort}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <Sort/>&nbsp;Сортировка
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='sort'
                                            id='menu-appbar'
                                            anchorEl={anchorElSort}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={openSort}
                                            onClose={handleCloseSort}
                                        >
                                            {sorts.map((elem, idx)=><MenuItem key={'sort'+idx} onClick={()=>{sort===`-${elem.field}`?setSort(elem.field):setSort(`-${elem.field}`);/*handleCloseSort();handleCloseMobileMenu()*/}}>{sort===`-${elem.field}`?<ArrowDownward />:sort===elem.field?<ArrowUpward />:<div style={{width: '24px'}}/>}{elem.name}</MenuItem>)}
                                        </Menu>
                                    ]
                                    :null
                                }
                                {dates?
                                    [
                                        <MenuItem onClick={handleMenuDate}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <DateRange/>&nbsp;Дата
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='Date'
                                            id='menu-appbar'
                                            anchorEl={anchorElDate}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={openDate}
                                            onClose={handleCloseDate}
                                        >
                                            <MenuItem style={{background: date!==''?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setMiniDialog('Дата', <SetDate/>);showMiniDialog(true);handleCloseDate();handleCloseMobileMenu();}}>
                                                По дате
                                            </MenuItem>
                                            <MenuItem style={{background: date===''?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setDate('');handleCloseDate();}}>
                                                Все
                                            </MenuItem>
                                        </Menu>
                                    ]
                                    :null
                                }
                                {organizations&&['суперагент', 'admin', 'client'].includes(profile.role)?
                                    [
                                        <MenuItem onClick={handleMenuOrganizations}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <BusinessCenterIcon/>&nbsp;Организации
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='Organizations'
                                            id='menu-appbar'
                                            anchorEl={anchorElOrganizations}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={openOrganizations}
                                            onClose={handleCloseOrganizations}
                                        >
                                            <MenuItem style={{background: organization?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={async ()=>{let activeOrganization = (await getActiveOrganization(city)).activeOrganization;setMiniDialog('Организации', <SetOrganizations activeOrganization={activeOrganization}/>);showMiniDialog(true);handleCloseOrganizations();handleCloseMobileMenu();}}>
                                                По организации
                                            </MenuItem>
                                            <MenuItem style={{background: !organization?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setOrganization(undefined);handleCloseOrganizations();}}>
                                                Все
                                            </MenuItem>
                                        </Menu>
                                    ]
                                    :null
                                }
                                {cityShow&&['admin'].includes(profile.role)?
                                    [
                                        <MenuItem onClick={handleMenuCities}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <LocationCityIcon/>&nbsp;Город
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='Cities'
                                            id='menu-appbar'
                                            anchorEl={anchorElCities}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={openCities}
                                            onClose={handleCloseCities}
                                        >
                                            <MenuItem style={{background: city?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={async ()=>{setMiniDialog('Город', <SetCities/>);showMiniDialog(true);handleCloseCities();handleCloseMobileMenu();}}>
                                                По городу
                                            </MenuItem>
                                            <MenuItem style={{background: !city?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setCity(undefined);handleCloseCities();}}>
                                                Все
                                            </MenuItem>
                                        </Menu>
                                    ]
                                    :null
                                }
                            </Menu>
                            <Tooltip title='Профиль'>
                                <IconButton
                                    aria-owns='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'
                                    onClick={handleMenuProfile}
                                >
                                    <PermIdentity/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElProfile}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openProfile}
                                onClose={handleCloseProfile}
                            >
                                {
                                    profile.role==='client'?
                                        <MenuItem>
                                            <Link href={`/${profile.role==='client'?'client':'employment'}/[id]`} as={`/${profile.role==='client'?'client':'employment'}/${profile._id}`}>
                                                <a style={{display: 'flex', color: '#606060'}}>
                                                    <AssignmentInd/>&nbsp;Профиль
                                                </a>
                                            </Link>
                                        </MenuItem>
                                        :
                                        null
                                }
                                {
                                    authenticated?
                                        <MenuItem onClick={()=>{
                                            handleCloseProfile()
                                            const action = async() => {
                                                logout(true)
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <ExitToApp/>&nbsp;Выйти
                                            </div>
                                        </MenuItem>
                                        :
                                        <MenuItem onClick={()=>{
                                            handleCloseProfile()
                                            setMiniDialog('Вход', <Sign isMobileApp={isMobileApp}/>)
                                            showMiniDialog(true)
                                        }}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <ExitToApp/>&nbsp;Войти
                                            </div>
                                        </MenuItem>
                                }
                            </Menu>

                            </>
                        :
                        openSearch?
                            <Paper className={classes.searchD}>
                                <Input className={classes.searchField}
                                       id='search'
                                       type={'login'}
                                       value={search}
                                       onChange={handleSearch}
                                       endAdornment={
                                           <InputAdornment position='end'>
                                               <IconButton aria-label='Search' onClick={()=>{setSearch('');setOpenSearch(false)}}>
                                                   <Cancel />
                                               </IconButton>
                                           </InputAdornment>
                                       }/>
                            </Paper>
                            :
                            <>
                            {cityShow&&['admin'].includes(profile.role)?
                                <>
                                <Tooltip title='Город'>
                                    <IconButton
                                        aria-owns={openCities ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuCities}
                                        color='inherit'
                                    >
                                        <LocationCityIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    key='Cities'
                                    id='menu-appbar'
                                    anchorEl={anchorElCities}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openCities}
                                    onClose={handleCloseCities}
                                >
                                    <MenuItem style={{background: city?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={async ()=>{setMiniDialog('Город', <SetCities/>);showMiniDialog(true);handleCloseCities();}}>
                                        По городу
                                    </MenuItem>
                                    <MenuItem style={{background: !city?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setCity(undefined);handleCloseCities();}}>
                                        Все
                                    </MenuItem>
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {organizations&&['суперагент', 'admin', 'client'].includes(profile.role)?
                                <>
                                <Tooltip title='Организации'>
                                    <IconButton
                                        aria-owns={openOrganizations ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuOrganizations}
                                        color='inherit'
                                    >
                                        <BusinessCenterIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    key='Organizations'
                                    id='menu-appbar'
                                    anchorEl={anchorElOrganizations}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openOrganizations}
                                    onClose={handleCloseOrganizations}
                                >
                                    <MenuItem style={{background: organization?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={async ()=>{let activeOrganization = (await getActiveOrganization(city)).activeOrganization;setMiniDialog('Организация', <SetOrganizations activeOrganization={activeOrganization}/>);showMiniDialog(true);handleCloseOrganizations();}}>
                                        По организации
                                    </MenuItem>
                                    <MenuItem style={{background: !organization?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setOrganization(undefined);handleCloseOrganizations();}}>
                                        Все
                                    </MenuItem>
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {dates?
                                <>
                                <Tooltip title='Дата'>
                                    <IconButton
                                        aria-owns={openDate ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuDate}
                                        color='inherit'
                                    >
                                        <DateRange/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    key='Date'
                                    id='menu-appbar'
                                    anchorEl={anchorElDate}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openDate}
                                    onClose={handleCloseDate}
                                >
                                    <MenuItem style={{background: date!==''?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setMiniDialog('Дата', <SetDate/>);showMiniDialog(true);handleCloseDate();}}>
                                        По дате
                                    </MenuItem>
                                    <MenuItem style={{background: date===''?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setDate('');handleCloseDate();}}>
                                        Все
                                    </MenuItem>
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {filters&&filters.length>0?
                                <>
                                <Tooltip title='Фильтр'>
                                    <IconButton
                                        aria-owns={openFilter ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuFilter}
                                        color='inherit'
                                    >
                                        <FilterList/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id='menu-appbar'
                                    key='filter'
                                    anchorEl={anchorElFilter}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openFilter}
                                    onClose={handleCloseFilter}
                                >
                                    {filters.map((elem, idx)=><MenuItem key={'filter'+idx} style={{background: filter===elem.value?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setFilter(elem.value);handleCloseFilter();}}>{elem.name}</MenuItem>)}
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {sorts&&sorts.length>0?
                                <>
                                <Tooltip title='Сортировка'>
                                    <IconButton
                                        aria-owns={openSort ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuSort}
                                        color='inherit'
                                    >
                                        <Sort />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElSort}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openSort}
                                    onClose={handleCloseSort}
                                    key='sort'
                                >
                                    {sorts.map((elem, idx)=><MenuItem key={'sort'+idx} onClick={()=>{sort===`-${elem.field}`?setSort(elem.field):setSort(`-${elem.field}`);handleCloseSort();}}>{sort===`-${elem.field}`?<ArrowDownward />:sort===elem.field?<ArrowUpward />:<div style={{width: '24px'}}/>}{elem.name}</MenuItem>)}
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {
                                searchShow?
                                    <Tooltip title='Поиск'>
                                        <IconButton
                                            aria-owns={openSearch ? 'menu-appbar' : undefined}
                                            aria-haspopup='true'
                                            onClick={()=>{
                                                setOpenSearch(true)}}
                                            color='inherit'
                                        >
                                            <Search />
                                        </IconButton>
                                    </Tooltip>
                                    :
                                    null
                            }
                            <Tooltip title='Профиль'>
                                <IconButton
                                    aria-owns='menu-appbar'
                                    aria-haspopup='true'
                                    color='inherit'
                                    onClick={handleMenuProfile}
                                >
                                    <PermIdentity/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElProfile}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openProfile}
                                onClose={handleCloseProfile}
                            >
                                {
                                    profile.role==='client'?
                                        <MenuItem>
                                            <Link href={`/${profile.role==='client'?'client':'employment'}/[id]`} as={`/${profile.role==='client'?'client':'employment'}/${profile._id}`}>
                                                <a style={{display: 'flex', color: '#606060'}}>
                                                    <AssignmentInd/>&nbsp;Профиль
                                                </a>
                                            </Link>
                                        </MenuItem>
                                        :
                                        null
                                }
                                {
                                    authenticated?
                                        <MenuItem onClick={()=>{
                                            handleCloseProfile()
                                            const action = async() => {
                                                logout(true)
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <ExitToApp/>&nbsp;Выйти
                                            </div>
                                        </MenuItem>
                                        :
                                        <MenuItem onClick={()=>{
                                            handleCloseProfile()
                                            setMiniDialog('Вход', <Sign isMobileApp={isMobileApp}/>)
                                            showMiniDialog(true)
                                        }}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <ExitToApp/>&nbsp;Войти
                                            </div>
                                        </MenuItem>
                                }
                            </Menu>

                            </>
                    }
                </Toolbar>
            </AppBar>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAppBar);
