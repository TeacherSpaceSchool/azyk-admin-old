module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app/AppBar.js":
/*!**********************************!*\
  !*** ./components/app/AppBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "@material-ui/icons/LocalGroceryStore");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "@material-ui/icons/AssignmentInd");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/styleMUI/appbar */ "./src/styleMUI/appbar.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/SearchRounded */ "@material-ui/icons/SearchRounded");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/SortRounded */ "@material-ui/icons/SortRounded");
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "@material-ui/icons/FilterListRounded");
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "@material-ui/icons/PermIdentity");
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _dialog_Sign__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../dialog/Sign */ "./components/dialog/Sign.js");
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _dialog_SetDate__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../dialog/SetDate */ "./components/dialog/SetDate.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




































const MyAppBar = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  //props
  const classes = Object(_src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const {
    filters,
    sorts,
    pageName,
    dates
  } = props;
  const {
    drawer,
    search,
    filter,
    sort,
    isMobileApp,
    countBasket,
    date
  } = props.app;
  const {
    showDrawer,
    setSearch,
    setFilter,
    setSort,
    setDate
  } = props.appActions;
  const {
    authenticated,
    profile
  } = props.user;
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    logout
  } = props.userActions; //state

  const [anchorElMobileMenu, setAnchorElMobileMenu] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const openMobileMenu = Boolean(anchorElMobileMenu);

  let handleMobileMenu = event => {
    setAnchorElMobileMenu(event.currentTarget);
  };

  let handleCloseMobileMenu = () => {
    setAnchorElMobileMenu(null);
  };

  const {
    0: anchorElSort,
    1: setAnchorElSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openSort = Boolean(anchorElSort);

  let handleMenuSort = event => {
    setAnchorElSort(event.currentTarget);
  };

  let handleCloseSort = () => {
    setAnchorElSort(null);
  };

  const {
    0: anchorElProfile,
    1: setAnchorElProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openProfile = Boolean(anchorElProfile);

  let handleMenuProfile = event => {
    setAnchorElProfile(event.currentTarget);
  };

  let handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const {
    0: anchorElFilter,
    1: setAnchorElFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openFilter = Boolean(anchorElFilter);

  let handleMenuFilter = event => {
    setAnchorElFilter(event.currentTarget);
  };

  let handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  const {
    0: anchorElDate,
    1: setAnchorElDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openDate = Boolean(anchorElDate);

  let handleMenuDate = event => {
    setAnchorElDate(event.currentTarget);
  };

  let handleCloseDate = () => {
    setAnchorElDate(null);
  };

  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  let handleSearch = event => {
    setSearch(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_18__["getCountBasket"])();
    })();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    className: "appBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    edge: "start",
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: () => {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, pageName), isMobileApp ? openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.searchM,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openMobileMenu ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMobileMenu,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    id: "menu-appbar",
    anchorEl: anchorElMobileMenu,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: openMobileMenu,
    onClose: handleCloseMobileMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      setOpenSearch(true);
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }), "\xA0\u041F\u043E\u0438\u0441\u043A")), filters && filters.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: handleMenuFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }), "\xA0\u0424\u0438\u043B\u044C\u0442\u0440")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    key: "filter",
    id: "menu-appbar",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, filters.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: 'filter' + idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, elem.name)))] : null, dates ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: handleMenuDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }), "\xA0\u0414\u0430\u0442\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    key: "Date",
    id: "menu-appbar",
    anchorEl: anchorElDate,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openDate,
    onClose: handleCloseDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setMiniDialog('Дата', __jsx(_dialog_SetDate__WEBPACK_IMPORTED_MODULE_35__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: undefined
      }));
      showMiniDialog(true);
      handleCloseDate();
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setDate('');
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "\u0412\u0441\u0435"))] : null, sorts && sorts.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: handleMenuSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }), "\xA0\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    key: "sort",
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    open: openSort,
    onClose: handleCloseSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, sorts.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: 'sort' + idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      /*handleCloseSort();handleCloseMobileMenu()*/
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, sort === `-${elem.field}` ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }) : __jsx("div", {
    style: {
      width: '24px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }), elem.name)))] : null), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, !authenticated || ['client', 'агент'].includes(profile.role) ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))) : null, !authenticated || profile.role === 'client' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))) : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      handleCloseProfile();

      const action = async () => {
        logout(true);
      };

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_33__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: undefined
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))) : openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.searchD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, dates ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u0414\u0430\u0442\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openDate ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuDate,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: undefined
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    key: "Date",
    id: "menu-appbar",
    anchorEl: anchorElDate,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openDate,
    onClose: handleCloseDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setMiniDialog('Дата', __jsx(_dialog_SetDate__WEBPACK_IMPORTED_MODULE_35__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: undefined
      }));
      showMiniDialog(true);
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setDate('');
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: undefined
  }, "\u0412\u0441\u0435")), "\xA0") : null, filters && filters.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u0424\u0438\u043B\u044C\u0442\u0440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openFilter ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuFilter,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    id: "menu-appbar",
    key: "filter",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: undefined
  }, filters.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: 'filter' + idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: undefined
  }, elem.name))), "\xA0") : null, sorts && sorts.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openSort ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuSort,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openSort,
    onClose: handleCloseSort,
    key: "sort",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }, sorts.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: 'sort' + idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      handleCloseSort();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }, sort === `-${elem.field}` ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }) : __jsx("div", {
    style: {
      width: '24px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }), elem.name))), "\xA0") : null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u043E\u0438\u0441\u043A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openSearch ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: () => {
      setOpenSearch(true);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: undefined
  }, !authenticated || ['client', 'агент'].includes(profile.role) ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_32___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: undefined
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))) : null, !authenticated || profile.role === 'client' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: undefined
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))) : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: undefined
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      handleCloseProfile();

      const action = async () => {
        logout(true);
      };

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: undefined
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_33__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: undefined
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))))));
});

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_16__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_15__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(MyAppBar));

/***/ }),

/***/ "./components/app/Dialog.js":
/*!**********************************!*\
  !*** ./components/app/Dialog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Dialog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const MyDialog = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    title,
    child,
    show,
    fullScreen
  } = props.mini_dialog;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fullScreen: fullScreen,
    open: show,
    onClose: () => {
      showMiniDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClose: () => {
      showMiniDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, title), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, child));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(MyDialog));

/***/ }),

/***/ "./components/app/Drawer.js":
/*!**********************************!*\
  !*** ./components/app/Drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/styleMUI/drawer */ "./src/styleMUI/drawer.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "@material-ui/core/SwipeableDrawer");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "@material-ui/icons/Whatshot");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Loyalty */ "@material-ui/icons/Loyalty");
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "@material-ui/icons/Receipt");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/LocationCity */ "@material-ui/icons/LocationCity");
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ArtTrack */ "@material-ui/icons/ArtTrack");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Money */ "@material-ui/icons/Money");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/FormatListNumbered */ "@material-ui/icons/FormatListNumbered");
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/UnfoldMore */ "@material-ui/icons/UnfoldMore");
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/UnfoldLess */ "@material-ui/icons/UnfoldLess");
/* harmony import */ var _material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





























const MyDrawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    classes
  } = props;
  const {
    drawer,
    isMobileApp
  } = props.app;
  const {
    profile,
    authenticated
  } = props.user;
  const {
    showDrawer
  } = props.appActions;
  let variant = isMobileApp ? 'temporary' : 'permanent';
  const open = isMobileApp ? drawer : true;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_27__["useRouter"])();
  const {
    0: uncoverBonus,
    1: setUncoverBonus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return __jsx(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onOpen: () => showDrawer(true),
    disableDiscovery: true,
    variant: variant,
    className: classes.drawer,
    open: open,
    onClose: () => showDrawer(false),
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, isMobileApp ? null : __jsx("div", {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/items/[id]",
    as: "/items/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), ['admin', 'client', 'организация', 'менеджер', 'агент'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('bonus') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(!uncoverBonus);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0411\u043E\u043D\u0443\u0441\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, uncoverBonus ? __jsx(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }) : __jsx(_material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), uncoverBonus ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonus' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: ['организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы компании' : 'Бонусы компаний',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), ['admin', 'client', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonusclient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы клиентов' : 'Мои бонусы',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })) : null) : null) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0410\u043A\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })) : null, ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/clients',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('client') && router.pathname !== '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  })) : null, ['client', 'admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  })) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  })) : null, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organization/[id]",
    as: `/organization/${profile.organization}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organizations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }), ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/brands",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('brand') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0411\u0440\u0435\u043D\u0434\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  })) : null, ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/employments',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  })) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0411\u043B\u043E\u0433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(false);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  })));
});

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_4__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_28__, dispatch)
  };
}

MyDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_25___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__["withStyles"])(_src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__["default"])(MyDrawer)));

/***/ }),

/***/ "./components/app/SnackBar.js":
/*!************************************!*\
  !*** ./components/app/SnackBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\SnackBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MyDialog = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    title,
    show
  } = props.snackbar;
  const {
    closeSnackBar
  } = props.snackbarActions;
  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: show,
    autoHideDuration: 6000,
    onClose: closeSnackBar,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: __jsx("span", {
      id: "message-id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, title),
    action: [__jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "undo",
      color: "secondary",
      size: "small",
      onClick: closeSnackBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  });
});

function mapStateToProps(state) {
  return {
    snackbar: state.snackbar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MyDialog));

/***/ }),

/***/ "./components/dialog/Confirmation.js":
/*!*******************************************!*\
  !*** ./components/dialog/Confirmation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Confirmation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Confirmation = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    showSnackBar
  } = props.snackbarActions;
  const {
    showLoad
  } = props.appActions;
  const {
    classes,
    action
  } = props;
  return __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      try {
        await showMiniDialog(false);
        await showLoad(true);
        await action();
        await showLoad(false);
      } catch (err) {
        showSnackBar('Ошибка');
      }
    },
    "aria-label": "Delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      showMiniDialog(false);
    },
    "aria-label": "Cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_6__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__, dispatch)
  };
}

Confirmation.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__["default"])(Confirmation)));

/***/ }),

/***/ "./components/dialog/Geo.js":
/*!**********************************!*\
  !*** ./components/dialog/Geo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-yandex-maps */ "react-yandex-maps");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/GpsFixed */ "@material-ui/icons/GpsFixed");
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Confirmation */ "./components/dialog/Confirmation.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Geo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Geo = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    showSnackBar
  } = props.snackbarActions;
  const {
    showMiniDialog,
    setMiniDialog
  } = props.mini_dialogActions;
  const {
    classes,
    geo,
    name,
    idx,
    setAddressGeo,
    change
  } = props;
  let {
    0: newGeo,
    1: setNewGeo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(geo ? geo : '42.8700000, 74.5900000');

  let getGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setNewGeo(position.coords.latitude + ', ' + position.coords.longitude);
      });
    } else {
      showSnackBar('Геолокация не поддерживается');
    }
  };

  let dragend = e => {
    let geo = e.get('target').geometry.getCoordinates();
    setNewGeo(geo[0] + ', ' + geo[1]);
  };

  let {
    0: load,
    1: setLoad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["YMaps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: window.innerHeight - 128,
      width: window.innerWidth - 48,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, load ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }) : null, __jsx("div", {
    style: {
      display: load ? 'none' : 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Map"], {
    onLoad: () => {
      setLoad(false);
    },
    height: window.innerHeight - 128,
    width: window.innerWidth - 48,
    defaultState: {
      center: newGeo.split(', '),
      zoom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Placemark"], {
    onDragEnd: dragend,
    options: {
      draggable: true,
      iconColor: '#ffb300'
    },
    properties: {
      iconCaption: name
    },
    geometry: newGeo.split(', '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })))), __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, change ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "contained",
    color: "primary",
    onClick: async () => {
      const action = async () => {
        await setAddressGeo(newGeo, idx);
        showMiniDialog(false);
      };

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_13__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), change ? __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default.a, {
    color: "primary",
    "aria-label": "\u041D\u0430\u0439\u0442\u0438 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044E",
    className: classes.fabGeo,
    onClick: getGeo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })) : null);
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

Geo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_6__["default"])(Geo)));

/***/ }),

/***/ "./components/dialog/SetDate.js":
/*!**************************************!*\
  !*** ./components/dialog/SetDate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\SetDate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const SetDate = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    classes
  } = props;
  let {
    0: dateChange,
    1: setDateChange
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_src_lib__WEBPACK_IMPORTED_MODULE_10__["pdDatePicker"])(new Date()));
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    setDate
  } = props.appActions;
  const width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      width: width
    },
    className: classes.textField,
    label: "\u0414\u0430\u0442\u0430",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: dateChange,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: event => setDateChange(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    onClick: async () => {
      await setDate(new Date(dateChange));
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

SetDate.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_9__["default"])(SetDate)));

/***/ }),

/***/ "./components/dialog/Sign.js":
/*!***********************************!*\
  !*** ./components/dialog/Sign.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Sign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















const Sign = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  let {
    0: loginEnter,
    1: setLoginEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passEnter,
    1: setPassEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: errorPass,
    1: setErrorPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: errorPassRepeat,
    1: setErrorPassRepeat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  let handlePassEnter = event => {
    setPassEnter(event.target.value);
  };

  let handleLoginEnter = event => {
    setLoginEnter(event.target.value);
  };

  let {
    0: loginReg,
    1: setLoginReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passReg,
    1: setPassReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passRepeatReg,
    1: setPassRepeatReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  let handlePassReg = event => {
    setPassReg(event.target.value);

    if (event.target.value !== passRepeatReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }

    if (event.target.value.length < 8) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  let handlePassRepeatReg = event => {
    setPassRepeatReg(event.target.value);

    if (event.target.value !== passReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }
  };

  let handleLoginReg = event => {
    setLoginReg(event.target.value);
  };

  let {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('enter');
  let {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('password');

  let handleHide = () => {
    setHide(!hide);
  };

  const {
    error
  } = props.user;
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    signin,
    signup
  } = props.userActions;
  const {
    classes
  } = props;
  const width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, type === 'enter' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      width: width
    },
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginEnter,
    onChange: handleLoginEnter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passEnter,
    onChange: handlePassEnter,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: width
    },
    className: classes.message,
    onClick: () => {
      setType('reg');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx("div", {
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "\u0415\u0441\u043B\u0438 \u0437\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0442\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (loginEnter.length > 0 && passEnter.length > 0) signin({
        login: loginEnter,
        password: passEnter
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "\u0412\u043E\u0439\u0442\u0438"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginReg,
    onChange: handleLoginReg,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passReg,
    onChange: handlePassReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passRepeatReg,
    onChange: handlePassRepeatReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, errorPass ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F") : null, errorPassRepeat ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442") : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (!errorPass && !errorPassRepeat) signup({
        login: loginReg,
        password: passReg
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

Sign.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_17__["default"])(Sign)));

/***/ }),

/***/ "./layouts/App.js":
/*!************************!*\
  !*** ./layouts/App.js ***!
  \************************/
/*! exports provided: mainWindow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainWindow", function() { return mainWindow; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app/AppBar */ "./components/app/AppBar.js");
/* harmony import */ var _components_app_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app/Dialog */ "./components/app/Dialog.js");
/* harmony import */ var _components_app_SnackBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/SnackBar */ "./components/app/SnackBar.js");
/* harmony import */ var _components_app_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/Drawer */ "./components/app/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _redux_actions_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/pagination */ "./redux/actions/pagination.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bottom-scroll-listener */ "react-bottom-scroll-listener");
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















const mainWindow = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
const App = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const {
    setProfile,
    logout
  } = props.userActions;
  const {
    next,
    disable
  } = props.paginationActions;
  const {
    showLoad
  } = props.appActions;
  const {
    profile,
    authenticated
  } = props.user;
  const {
    work,
    count
  } = props.pagination;
  let {
    sorts,
    filters,
    getList,
    pageName,
    dates
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  next_router__WEBPACK_IMPORTED_MODULE_15___default.a.events.on('routeChangeStart', (err, url) => {
    if (!router.pathname.includes(url)) showLoad(true);

    if (err.cancelled) {
      showLoad(false);
    }
  });
  const containerRef = Object(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_16__["useBottomScrollListener"])(() => {
    if (work) next();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      if (authenticated && profile.role === 'client') {
        if (localStorage.favorites && localStorage.favorites !== '[]') {
          let favorites = JSON.parse(localStorage.favorites);
          favorites = favorites.map(element => element._id);
          await Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_8__["addFavoriteItem"])(favorites);
          localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([]);
          if (getList !== undefined) await getList();
        }

        if (localStorage.basket && localStorage.basket !== '[]') {
          let basket = JSON.parse(localStorage.basket);

          for (let i = 0; i < basket.length; i++) {
            await Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_9__["addBasket"])({
              item: basket[i].item._id,
              count: basket[i].count
            });
          }

          localStorage.basket = '[]';
          if (getList !== undefined) await getList();
        }
      }
    })();
  }, []);
  const {
    load
  } = props.app;
  return __jsx("div", {
    ref: mainWindow,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dates: dates,
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("div", {
    ref: containerRef,
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), load ? __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })) : null);
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
    pagination: state.pagination
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_11__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_12__, dispatch),
    paginationActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_pagination__WEBPACK_IMPORTED_MODULE_10__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/client/[id].js":
/*!******************************!*\
  !*** ./pages/client/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/client/client */ "./src/styleMUI/client/client.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _src_gql_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/gql/client */ "./src/gql/client.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_Geo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/dialog/Geo */ "./components/dialog/Geo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\client\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






























const Client = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(props => {
  const {
    profile
  } = props.user;
  const classes = Object(_src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    data
  } = props;
  const {
    isMobileApp
  } = props.app;
  const {
    showSnackBar
  } = props.snackbarActions;
  let {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client && data.client.user ? data.client.user.status : '');
  let {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.name : '');
  let {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.email : '');
  let {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.phone : []);

  let addPhone = () => {
    phone = [...phone, ''];
    setPhone(phone);
  };

  let editPhone = (event, idx) => {
    phone[idx] = event.target.value;
    setPhone([...phone]);
  };

  let deletePhone = idx => {
    phone.splice(idx, 1);
    setPhone([...phone]);
  };

  let {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client && data.client.user ? data.client.user.login : ''); //привести к геолокации

  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(data.client.address[0])) data.client.address.map(addres => [addres]);
  let {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.address : []);
  let {
    0: birthday,
    1: setBirthday
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_27__["pdDatePicker"])(new Date(data.client.birthday)) : null);
  let {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.city : '');
  let {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.type : '');

  let handleType = event => {
    setType(event.target.value);
  };

  const types = ['частное лицо', 'торговая точка'];
  let {
    0: newAddress,
    1: setNewAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');

  let addAddress = () => {
    address = [...address, [newAddress]];
    setAddress(address);
    setNewAddress('');
  };

  let editAddress = (event, idx) => {
    address[idx][0] = event.target.value;
    setAddress([...address]);
  };

  let editAddressName = (event, idx) => {
    address[idx][2] = event.target.value;
    setAddress([...address]);
  };

  let deleteAddress = idx => {
    address.splice(idx, 1);
    setAddress([...address]);
  };

  let setAddressGeo = (geo, idx) => {
    address[idx][1] = geo;
    setAddress([...address]);
  };

  let {
    0: info,
    1: setInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.info : '');
  let {
    0: preview,
    1: setPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.client ? data.client.image : '');
  let {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);

  let handleChangeImage = event => {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setImage(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  let {
    0: patent,
    1: setPatent
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);

  let handleChangePatent = event => {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setPatent(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  let patentUrl = data.client ? data.client.patent : '';
  let patentRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  let {
    0: passport,
    1: setPassport
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);

  let handleChangePassport = event => {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setPassport(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  let passportUrl = data.client ? data.client.passport : '';
  let passportRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  let {
    0: certificate,
    1: setCertificate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);

  let handleChangeCertificate = event => {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setCertificate(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  let certificateUrl = data.client ? data.client.certificate : '';
  let certificateRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    logout
  } = props.userActions;
  let {
    0: newPass,
    1: setNewPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');

  let handleNewPass = event => {
    setNewPass(event.target.value);
  };

  let {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('password');

  let handleHide = () => {
    setHide(!hide);
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_26__["useRouter"])();
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: data.client ? data.client.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, router.query.id === 'new' ? 'Добавить' : data.client ? data.client.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:title",
    content: data.client ? data.client.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image",
    content: preview ? preview : '/static/add.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:url",
    content: `${_redux_constants_other__WEBPACK_IMPORTED_MODULE_23__["urlMain"]}/client/${router.query.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx("link", {
    rel: "canonical",
    href: `${_redux_constants_other__WEBPACK_IMPORTED_MODULE_23__["urlMain"]}/client/${router.query.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: isMobileApp ? classes.column : classes.row,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, data.client ? (router.query.id === 'new' || data.client.organization && data.client.organization._id === profile.organization) && ['организация', 'менеджер', 'агент'].includes(profile.role) || profile.role === 'admin' || data.client.user && profile._id === data.client.user._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("img", {
    className: classes.media,
    src: preview ? preview : '/static/add.png',
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  })), type === 'торговая точка' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "C\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E:\xA0"), certificateUrl && certificateUrl.length > 0 ? __jsx("a", {
    href: certificateUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: certificate || certificateUrl && certificateUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: () => {
      certificateRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, certificate || certificateUrl && certificateUrl.length > 0 ? 'Изменить' : 'Добавить')), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442:\xA0"), passportUrl && passportUrl.length > 0 ? __jsx("a", {
    href: passportUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: passport || passportUrl && passportUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: () => {
      passportRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, passport || passportUrl && passportUrl.length > 0 ? 'Изменить' : 'Добавить')), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, "\u041F\u0430\u0442\u0435\u043D\u0442:\xA0"), patentUrl && patentUrl.length > 0 ? __jsx("a", {
    href: patentUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: patent || patentUrl && patentUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: () => {
      patentRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, patent || patentUrl && patentUrl.length > 0 ? 'Изменить' : 'Добавить'))) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    label: "\u0418\u043C\u044F",
    value: name,
    className: classes.input,
    onChange: event => {
      setName(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }), router.query.id === 'new' || data.client.organization ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    label: "\u041B\u043E\u0433\u0438\u043D",
    value: login,
    className: classes.input,
    onChange: event => {
      setLogin(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: hide ? 'password' : 'text',
    value: newPass,
    onChange: handleNewPass,
    className: classes.input,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29___default.a, {
    value: type,
    onChange: handleType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, types.map(element => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28___default.a, {
    key: element,
    value: element,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, element)))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    className: classes.input,
    label: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: birthday,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: event => setBirthday(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    className: classes.input,
    label: "\u0413\u043E\u0440\u043E\u0434",
    type: "text",
    InputLabelProps: {
      shrink: true
    },
    value: city,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: event => setCity(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }), phone ? phone.map((element, idx) => __jsx("div", {
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: undefined
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
    value: element,
    className: classes.input,
    onChange: event => {
      editPhone(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      onClick: () => {
        deletePhone(idx);
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  })))) : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      addPhone();
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }), address ? address.map((element, idx) => __jsx("div", {
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, type === 'торговая точка' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
    value: element[2],
    className: classes.input,
    onChange: event => {
      editAddressName(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      onClick: () => {
        deleteAddress(idx);
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: undefined
  })) : null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: undefined
  }, "\u0410\u0434\u0440\u0435\u0441", type === 'торговая точка' ? ' магазина' : ''), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    placeholder: "\u0410\u0434\u0440\u0435\u0441",
    value: element[0],
    className: classes.input,
    onChange: event => {
      editAddress(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: type === 'торговая точка' ? null : __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      onClick: () => {
        deleteAddress(idx);
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  })), __jsx("div", {
    className: classes.geo,
    style: {
      color: element[1] ? '#ffb300' : 'red'
    },
    onClick: () => {
      setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_25__["default"], {
        change: true,
        geo: element[1],
        setAddressGeo: setAddressGeo,
        idx: idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: undefined
      }), true);
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: undefined
  }, element[1] ? 'Изменить геолокацию' : 'Задайте геолокацию'))) : __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: undefined
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      addAddress();
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: undefined
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    label: "email",
    value: email,
    className: classes.input,
    onChange: event => {
      setEmail(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_20___default.a, {
    multiline: true,
    label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    value: info,
    className: classes.input,
    onChange: event => {
      setInfo(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }, data.client.organization && profile.organization === data.client.organization._id && ['организация', 'менеджер', 'агент'].includes(profile.role) || profile.role === 'admin' || data.client.user && profile._id === data.client.user._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      let editElement = {
        _id: data.client._id
      };
      if (image) editElement.image = image;
      if (passport) editElement.passport = passport;
      if (patent) editElement.patent = patent;
      if (certificate) editElement.certificate = certificate;
      if (name && name.length > 0 && name !== data.client.name) editElement.name = name;
      editElement.address = address;
      if (email && email.length > 0 && email !== data.client.email) editElement.email = email;
      if (login && login.length > 0 && data.client.user.login !== login) editElement.login = login;
      editElement.phone = phone;
      if (info && info.length > 0 && info !== data.client.info) editElement.info = info;
      if (city && city.length > 0 && city !== data.client.city) editElement.city = city;
      if (type && type.length > 0 && type !== data.client.type) editElement.type = type;
      if (birthday && birthday !== data.client.birthday) editElement.birthday = new Date(birthday);
      if (newPass && newPass.length > 0) editElement.newPass = newPass;

      const action = async () => {
        await Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_14__["setClient"])(editElement);
      };

      setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      const action = async () => {
        await Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_14__["onoffClient"])([data.client._id]);
        setStatus(status === 'active' ? 'deactive' : 'active');
      };

      setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, status === 'active' ? 'Отключить' : 'Включить') : data.client.user && profile._id === data.client.user._id ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: () => {
      const action = async () => {
        logout(true);
      };

      setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: undefined
  }, "\u0412\u044B\u0439\u0442\u0438") : null) : router.query.id === 'new' && ['организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      if (name.length > 0 && address.length > 0 && city.length > 0 && phone.length > 0) {
        let editElement = {};
        if (image !== undefined) editElement.image = image;
        if (passport !== undefined) editElement.passport = passport;
        if (patent !== undefined) editElement.patent = patent;
        if (certificate !== undefined) editElement.certificate = certificate;
        if (name.length > 0) editElement.name = name;
        editElement.address = address;
        if (email.length > 0) editElement.email = email;
        editElement.phone = phone;
        if (info.length > 0) editElement.info = info;
        if (city.length > 0) editElement.city = city;
        if (type && type.length > 0) editElement.type = type;
        editElement.birthday = new Date(birthday);

        const action = async () => {
          await Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_14__["addClient"])(editElement);
          next_router__WEBPACK_IMPORTED_MODULE_26___default.a.push('/clients');
        };

        setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__["default"], {
          action: action,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: undefined
        }));
        showMiniDialog(true);
      } else {
        showSnackBar('Заполните поля: имя, адрес, город и телефон');
      }
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: undefined
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : null))) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: undefined
  }, __jsx("img", {
    className: classes.media,
    src: preview,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: undefined
  }), ['admin', 'организация', 'менеджер'].includes(profile.role) && certificateUrl && certificateUrl.length > 0 ? __jsx("a", {
    href: certificateUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442")) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) && passportUrl && passportUrl.length > 0 ? __jsx("a", {
    href: passportUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0430\u0441\u043F\u043E\u0440\u0442")) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) && patentUrl && patentUrl.length > 0 ? __jsx("a", {
    href: patentUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: undefined
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0430\u0442\u0435\u043D\u0442")) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: undefined
  }, name), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: undefined
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: undefined
  }, address ? address.map((element, idx) => __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, type === 'торговая точка' ? __jsx("div", {
    className: classes.value,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: undefined
  }, element[2]) : null, __jsx("div", {
    className: classes.value,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: undefined
  }, element[0]), __jsx("div", {
    className: classes.geo,
    style: {
      color: element[1] ? '#ffb300' : 'red'
    },
    onClick: () => {
      if (element[1]) {
        setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_25__["default"], {
          geo: element[1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592
          },
          __self: undefined
        }), true);
        showMiniDialog(true);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: undefined
  }, element[1] ? 'Посмотреть геолокацию' : 'Геолокация не задана'))) : null)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: undefined
  }, "E-mail:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: undefined
  }, email)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: undefined
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: undefined
  }, phone ? phone.map((element, idx) => __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classes.value,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: undefined
  }, element))) : null))), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: undefined
  }, info))) : 'Ничего не найдено')), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: undefined
  }), __jsx("input", {
    ref: passportRef,
    style: {
      display: 'none'
    },
    id: "input-passport",
    type: "file",
    onChange: handleChangePassport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: undefined
  }), __jsx("input", {
    ref: certificateRef,
    style: {
      display: 'none'
    },
    id: "input-certificate",
    type: "file",
    onChange: handleChangeCertificate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: undefined
  }), __jsx("input", {
    ref: patentRef,
    style: {
      display: 'none'
    },
    id: "input-patent",
    type: "file",
    onChange: handleChangePatent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: undefined
  }));
});

Client.getInitialProps = async function (ctx) {
  return {
    data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ctx.query.id === 'new' ? {
      client: {
        name: '',
        email: '',
        phone: [],
        address: [],
        info: '',
        image: '/static/add.png',
        reiting: 0,
        city: '',
        type: '',
        birthday: null,
        user: null,
        patent: null,
        passport: null,
        certificate: null
      }
    } : await Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_14__["getClient"])({
      _id: ctx.query.id
    }))
  };
};

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_12__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_13__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_30__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Client));

/***/ }),

/***/ "./redux/actions/app.js":
/*!******************************!*\
  !*** ./redux/actions/app.js ***!
  \******************************/
/*! exports provided: showDrawer, setFilter, setDate, setCountBasket, setSort, setSearch, setIsMobileApp, showLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return setDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountBasket", function() { return setCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearch", function() { return setSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMobileApp", function() { return setIsMobileApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoad", function() { return showLoad; });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");

function showDrawer(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SHOW_DRAWER"],
    payload: data
  };
}
function setFilter(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"],
    payload: data
  };
}
function setDate(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_DATE"],
    payload: data
  };
}
function setCountBasket(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_BASKET"],
    payload: data
  };
}
function setSort(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_SORT"],
    payload: data
  };
}
function setSearch(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH"],
    payload: data
  };
}
function setIsMobileApp(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_IS_MOBILE_APP"],
    payload: data
  };
}
function showLoad(show) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SHOW_LOAD"],
    payload: show
  };
}

/***/ }),

/***/ "./redux/actions/mini_dialog.js":
/*!**************************************!*\
  !*** ./redux/actions/mini_dialog.js ***!
  \**************************************/
/*! exports provided: setMiniDialog, showMiniDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMiniDialog", function() { return setMiniDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMiniDialog", function() { return showMiniDialog; });
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");

function setMiniDialog(title, child, fullScreen) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SET_MINI_DIALOG"],
    payload: {
      title: title,
      child: child,
      fullScreen
    }
  };
}
function showMiniDialog(show) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SHOW_MINI_DIALOG"],
    payload: show
  };
}

/***/ }),

/***/ "./redux/actions/pagination.js":
/*!*************************************!*\
  !*** ./redux/actions/pagination.js ***!
  \*************************************/
/*! exports provided: next, disable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony import */ var _constants_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/pagination */ "./redux/constants/pagination.js");

function next(data) {
  return {
    type: _constants_pagination__WEBPACK_IMPORTED_MODULE_0__["NEXT"]
  };
}
function disable(data) {
  return {
    type: _constants_pagination__WEBPACK_IMPORTED_MODULE_0__["DISABLE"]
  };
}

/***/ }),

/***/ "./redux/actions/snackbar.js":
/*!***********************************!*\
  !*** ./redux/actions/snackbar.js ***!
  \***********************************/
/*! exports provided: showSnackBar, closeSnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackBar", function() { return showSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackBar", function() { return closeSnackBar; });
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snackbar */ "./redux/constants/snackbar.js");

function showSnackBar(title) {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["SHOW_SNACKBAR"],
    payload: {
      title: title
    }
  };
}
function closeSnackBar() {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SNACKBAR"]
  };
}

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/*! exports provided: signup, signin, checkAuthenticated, setAuthenticated, logout, setProfile, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function signup(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($login: String!, $password: String!) {
                        signupuser(login: $login, password: $password) {
                           role
                           status
                           login
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signupuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        }); //await Router.push('/')

        /*
        await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signupuser
        })*/

        window.location.reload();
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function signin(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($login: String!, $password: String!) {
                        signinuser(login: $login, password: $password) {
                           role
                           status
                           login
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signinuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        }); //await Router.push('/')

        window.location.reload();
        /*await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signinuser
        })*/
      }
    } catch (error) {
      console.error(error);
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function checkAuthenticated() {
  return async dispatch => {
    try {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('jwt')) {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]
        });
      } else {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
      });
    }
  };
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH"],
    payload: auth
  };
}
function logout(reload) {
  return async dispatch => {
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
    });
    if (reload) await next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    await js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt');
    await dispatch({
      type: _constants_app__WEBPACK_IMPORTED_MODULE_2__["SET_COUNT_BASKET"],
      payload: 0
    });
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_PROFILE"],
      payload: {}
    }); //setTimeout(()=>window.location.reload(),100)
  };
}
function setProfile() {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.query({
        query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    query {
                        getStatus {
                           role
                           status
                           login
                           organization
                           _id
                          }
                    }`
      });
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_PROFILE"],
        payload: result.data.getStatus
      });
    } catch (error) {
      console.error(error);
    }
  };
}
async function getProfile() {
  try {
    const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
    let result = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                   query {
                       getStatus {
                          role
                          status
                          login
                          organization
                          _id
                         }
                   }`
    });
    return result.data.getStatus;
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./redux/constants/app.js":
/*!********************************!*\
  !*** ./redux/constants/app.js ***!
  \********************************/
/*! exports provided: SHOW_DRAWER, SET_SEARCH, SET_SORT, SET_FILTER, SET_DATE, SET_COUNT_BASKET, SET_IS_MOBILE_APP, SHOW_LOAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DRAWER", function() { return SHOW_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORT", function() { return SET_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DATE", function() { return SET_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_BASKET", function() { return SET_COUNT_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_MOBILE_APP", function() { return SET_IS_MOBILE_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LOAD", function() { return SHOW_LOAD; });
const SHOW_DRAWER = 'SHOW_DRAWER';
const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_FILTER = 'SET_FILTER';
const SET_DATE = 'SET_DATE';
const SET_COUNT_BASKET = 'SET_COUNT_BASKET';
const SET_IS_MOBILE_APP = 'SET_IS_MOBILE_APP';
const SHOW_LOAD = 'SHOW_LOAD';

/***/ }),

/***/ "./redux/constants/mini_dialog.js":
/*!****************************************!*\
  !*** ./redux/constants/mini_dialog.js ***!
  \****************************************/
/*! exports provided: SET_MINI_DIALOG, SHOW_MINI_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MINI_DIALOG", function() { return SET_MINI_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MINI_DIALOG", function() { return SHOW_MINI_DIALOG; });
const SET_MINI_DIALOG = 'SET_MINI_DIALOG';
const SHOW_MINI_DIALOG = 'SHOW_MINI_DIALOG';

/***/ }),

/***/ "./redux/constants/other.js":
/*!**********************************!*\
  !*** ./redux/constants/other.js ***!
  \**********************************/
/*! exports provided: urlGQL, urlGQLws, urlMain, validMail, validPhone, checkInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQL", function() { return urlGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQLws", function() { return urlGQLws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlMain", function() { return urlMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

let urlGQL;
let urlGQLws;
let urlMain;

if ("localhost".trim() === 'azyk.store') {
  urlGQL = `https://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `https://${"localhost"}`;
} else {
  urlGQL = `http://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `http://${"localhost"}`;
}

const validMail = mail => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
};
const validPhone = phone => {
  return /^[+]{1}996[0-9]{9}$/.test(phone);
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int);
};

/***/ }),

/***/ "./redux/constants/pagination.js":
/*!***************************************!*\
  !*** ./redux/constants/pagination.js ***!
  \***************************************/
/*! exports provided: DISABLE, NEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE", function() { return DISABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT", function() { return NEXT; });
const DISABLE = 'DISABLE';
const NEXT = 'NEXT';

/***/ }),

/***/ "./redux/constants/snackbar.js":
/*!*************************************!*\
  !*** ./redux/constants/snackbar.js ***!
  \*************************************/
/*! exports provided: CLOSE_SNACKBAR, SHOW_SNACKBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SNACKBAR", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SNACKBAR", function() { return SHOW_SNACKBAR; });
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';

/***/ }),

/***/ "./redux/constants/user.js":
/*!*********************************!*\
  !*** ./redux/constants/user.js ***!
  \*********************************/
/*! exports provided: AUTHENTICATED, UNAUTHENTICATED, ERROR_AUTHENTICATED, SET_PROFILE, SET_AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTHENTICATED", function() { return UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_AUTHENTICATED", function() { return ERROR_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFILE", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH", function() { return SET_AUTH; });
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
const SET_PROFILE = 'SET_PROFILE';
const SET_AUTH = 'SET_AUTH';

/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/gql/basket.js":
/*!***************************!*\
  !*** ./src/gql/basket.js ***!
  \***************************/
/*! exports provided: getBasket, getCountBasket, deleteBasket, addBasket, setBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasket", function() { return getBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountBasket", function() { return getCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBasket", function() { return deleteBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBasket", function() { return addBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasket", function() { return setBasket; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");




const getBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query{
                        baskets {
                            _id
                            createdAt
                            item 
                                {
                                    _id 
                                    name 
                                    stock 
                                    image 
                                    price
                                    organization
                                        {_id name minimumOrder}
                                }
                            count
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getCountBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res;
    if (new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().user.authenticated) res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query {
                        countBasket 
                    }`
    });else if (localStorage.basket) {
      let basket = JSON.parse(localStorage.basket);
      res = {
        data: {
          countBasket: basket.length
        }
      };
    }
    new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__["setCountBasket"])(res.data.countBasket));
  } catch (err) {
    console.error(err);
  }
};
const deleteBasket = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteBasket(_id: $_id) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};
const addBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($item: ID!, $count: Int!) {
                        addBasket(item: $item, count: $count) {
                             data
                        }
                    }`
    });
    await getCountBasket();
  } catch (err) {
    console.error(err);
  }
};
const setBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $count: Int!) {
                        setBasket(_id: $_id, count: $count) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/gql/client.js":
/*!***************************!*\
  !*** ./src/gql/client.js ***!
  \***************************/
/*! exports provided: getClients, getClient, onoffClient, setClient, addClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClients", function() { return getClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClient", function() { return getClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffClient", function() { return onoffClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClient", function() { return setClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClient", function() { return addClient; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");



const getClients = async ({
  search: search,
  sort: sort,
  filter: filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        clients(search: $search, sort: $sort, filter: $filter) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            info
                            reiting
                            birthday
                            type
                            city
                            patent 
                            passport 
                            certificate
                            phone
                            organization 
                                {_id name}
                            user 
                                {_id role status login}
                          }
                          sortClient {
                           name
                            field
                          }
                          filterClient {
                           name
                           value
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getClient = async ({
  _id: _id
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        _id: _id
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query ($_id: ID!) {
                        client(_id: $_id) {
                            _id
                            image
                            createdAt
                            name
                            email
                            address
                            info
                            reiting
                            birthday
                            city
                            type
                            patent 
                            passport 
                            certificate
                            phone
                            organization 
                                {_id name}
                            user 
                                {_id role status login}
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const onoffClient = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        onoffClient(_id: $_id) {
                             data
                        }
                    }`
    });
    return await getClients(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};
const setClient = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $phone: [String], $login: String, $city: String, $type: String, $image: Upload, $patent: Upload, $passport: Upload, $certificate: Upload, $birthday: Date, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {
                        setClient(_id: $_id, phone: $phone, login: $login, city: $city, image: $image,, patent: $patent, passport: $passport, certificate: $certificate, type: $type, birthday: $birthday, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {
                             data
                        }
                    }`
    });
    /*let list = await getClients(new SingletonStore().getStore().getState().app)
    return list*/
  } catch (err) {
    console.error(err);
  }
};
const addClient = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($image: Upload, $name: String!, $birthday: Date, $email: String, $city: String!, $address: [[String]]!, $phone: [String]!, $info: String, $type: String, $patent: Upload, $passport: Upload, $certificate: Upload) {
                        addClient(image: $image, name: $name, birthday: $birthday, email: $email, city: $city, address: $address, phone: $phone, info: $info, type: $type, patent: $patent, passport: $passport, certificate: $certificate) {
                             data
                        }
                    }`
    }); //return await getEmployments(new SingletonStore().getStore().getState().app)
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/gql/items.js":
/*!**************************!*\
  !*** ./src/gql/items.js ***!
  \**************************/
/*! exports provided: getItems, getBrands, favorites, getItem, deleteItem, onoffItem, favoriteItem, addFavoriteItem, addItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favorites", function() { return favorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffItem", function() { return onoffItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteItem", function() { return favoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteItem", function() { return addFavoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




const getItems = async ({
  subCategory,
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        subCategory: subCategory,
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {
                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                        filterItem {
                           name
                           value
                        }
                        subCategory(_id: $subCategory) {
                           _id
                           name
                           category
                                {_id name}
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getBrands = async ({
  organization,
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        organization: organization,
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($organization: ID!,$search: String!, $sort: String!) {
                        brands(organization: $organization, search: $search, sort: $sort) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name info image}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const favorites = async ({
  search
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        search: search
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($search: String!) {
                        favorites(search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getItem = async ({
  _id
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        _id: _id
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($_id: ID!) {
                        item(_id: $_id) {
                            _id
                            subCategory
                                {
                                    _id 
                                    name 
                                    category
                                        {_id name}
                                }
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name minimumOrder}
                            hit
                            latest
                            favorite
                            basket
                            deliveryDays
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const deleteItem = async (ids, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteItem(_id: $_id) {
                             data
                        }
                    }`
    });
    return await getItems(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      subCategory: subCategory
    }, new _singleton_store__WEBPACK_IMPORTED_MODULE_3__["SingletonStore"]().getStore().getState().app));
  } catch (err) {
    console.error(err);
  }
};
const onoffItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        onoffItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const favoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        favoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addFavoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        addFavoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addItem = async (element, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element, {
        subCategory: subCategory
      }),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($stock: Int!, $deliveryDays: [String], $name: String!, $image: Upload, $info: String!, $price: Int!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {
                        addItem(stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const setItem = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: ID!, $stock: Int, $deliveryDays: [String], $name: String, $image: Upload, $info: String, $price: Int, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {
                        setItem(_id: $_id, stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: checkMobile, checkAuth, getJWT, checkInt, pdDDMMYYYY, pdDDMMYY, pdDatePicker, pdDDMMYYHHMM, pdDDMMYYHHMMCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMobile", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYYY", function() { return pdDDMMYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYY", function() { return pdDDMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDatePicker", function() { return pdDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYHHMM", function() { return pdDDMMYYHHMM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYHHMMCancel", function() { return pdDDMMYYHHMMCancel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);


const regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/;
const checkMobile = ua => {
  return regexpUA.exec(ua) !== null;
};
const regexpAuth = /(\s)?jwt=(\S)+(;)?/;
const checkAuth = auth => {
  return regexpAuth.exec(auth) !== null;
};
const getJWT = auth => {
  let res = regexpAuth.exec(auth);
  return res !== null ? res[0].trim().replace('jwt=', '') : undefined;
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int);
};
const pdDDMMYYYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '');
  return date;
};
const pdDDMMYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4);
  return date;
};
const pdDatePicker = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[0].replace('"', '') + '-' + date[1] + '-' + date[2].split('T')[0];
  return date;
};
const pdDDMMYYHHMM = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};
const pdDDMMYYHHMMCancel = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date.setMinutes(date.getMinutes() + 10);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};

/***/ }),

/***/ "./src/singleton/client.js":
/*!*********************************!*\
  !*** ./src/singleton/client.js ***!
  \*********************************/
/*! exports provided: SingletonApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonApolloClient", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-utilities */ "apollo-utilities");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");


/* eslint-disable no-extra-boolean-cast */








 //import { WebSocketLink } from 'apollo-link-ws';

 //import * as ws from 'ws';



class SingletonApolloClient {
  constructor(req) {
    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQL"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
      credentials: 'include'
    });
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
          authorization: this.jwt ? `Bearer ${this.jwt}` : ''
        })
      };
    });
    const linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__["onError"])(ctx => {
      if (ctx.graphQLErrors) ctx.graphQLErrors.map(({
        message,
        locations,
        path
      }) => {
        new _singleton_store__WEBPACK_IMPORTED_MODULE_11__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__["showSnackBar"])('Ошибка'));
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
      if (ctx.networkError) console.log(`[Network error]: ${ctx.networkError}`);
    });
    /*const wsLink = new WebSocketLink({
        uri: urlGQLws,
        options: {
            reconnect: true
        },
        webSocketImpl: process.browser?WebSocket:ws
    });*/

    const mainLink =
    /*split(
    ({ query }) => {
    const definition = getMainDefinition(query);
    return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
    );
    },
    wsLink,*/
    uploadLink;
    /*,
    );*/

    const link = apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"].from([linkError, authLink, mainLink]);
    this.client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
      link: link,
      cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  getClient() {
    return this.client;
  }

}

/***/ }),

/***/ "./src/singleton/store.js":
/*!********************************!*\
  !*** ./src/singleton/store.js ***!
  \********************************/
/*! exports provided: SingletonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonStore", function() { return SingletonStore; });
/* eslint-disable no-extra-boolean-cast */
class SingletonStore {
  constructor(store) {
    if (!!SingletonStore.instance) {
      return SingletonStore.instance;
    }

    SingletonStore.instance = this;
    this.store = store;
    return this;
  }

  getStore() {
    return this.store;
  }

}

/***/ }),

/***/ "./src/styleMUI/appbar.js":
/*!********************************!*\
  !*** ./src/styleMUI/appbar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  appBar: {
    zIndex: 1201
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  searchD: {
    position: 'fixed',
    top: 6,
    right: 6
  },
  searchM: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '56px',
    width: '100vw'
  },
  textField: {
    width: 'calc(100% - 20px)',
    margin: 10
  },
  searchField: {
    width: 'calc(100% - 20px)',
    margin: 10
  }
}));

/***/ }),

/***/ "./src/styleMUI/client/client.js":
/*!***************************************!*\
  !*** ./src/styleMUI/client/client.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  page: {
    margin: '20px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    objectFit: 'cover',
    maxHeight: 300,
    maxWidth: 300,
    height: 'calc(100vw - 72px)',
    width: 'calc(100vw - 72px)',
    marginRight: 10,
    marginBottom: 10,
    cursor: 'pointer'
  },
  name: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    fontFamily: 'Roboto'
  },
  value: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Roboto'
  },
  nameField: {
    width: 80,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  info: {
    color: '#455A64',
    marginBottom: 10,
    fontSize: '1rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap'
  },
  geo: {
    width: 170,
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 20,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap',
    cursor: 'pointer',
    borderBottom: '1px dashed #ffb300'
  },
  doc: {
    marginBottom: 10,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#A0A0A0'
  },
  docUrl: {
    marginBottom: 10,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 10,
    width: '100%'
  }
}));

/***/ }),

/***/ "./src/styleMUI/dialogContent.js":
/*!***************************************!*\
  !*** ./src/styleMUI/dialogContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: 'indigo',
    fontWeight: 'bold',
    cursor: 'pointer',
    overflowWrap: 'break-word',
    fontSize: '1rem'
  },
  itogo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 500
  },
  error_message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'red',
    fontWeight: 'bold'
  },
  nameField: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  value: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: '0.875rem',
    fontFamily: 'Roboto'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  fabGeo: {
    position: 'fixed',
    bottom: 70,
    right: 35
  },
  geo: {
    width: 170,
    textAlign: 'center',
    marginTop: -5,
    marginBottom: 10,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap',
    cursor: 'pointer',
    borderBottom: '1px dashed #ffb300'
  },
  counterbtn: {
    marginRight: 10,
    marginLeft: 10,
    userSelect: 'none',
    cursor: 'pointer',
    width: 16,
    height: 16,
    fontSize: '0.875rem',
    fontWeight: 700,
    background: '#e6e6e6',
    color: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chip: {
    margin: theme.spacing(0.5),
    cursor: 'pointer'
  }
}));

/***/ }),

/***/ "./src/styleMUI/drawer.js":
/*!********************************!*\
  !*** ./src/styleMUI/drawer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
  drawer: {
    width: 300,
    flexShrink: 0
  },
  drawerPaper: {
    width: 300
  },
  toolbar: theme.mixins.toolbar
}));

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/client/[id].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\azyk\azyk-admin\pages\client\[id].js */"./pages/client/[id].js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SwipeableDrawer":
/*!****************************************************!*\
  !*** external "@material-ui/core/SwipeableDrawer" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/ArtTrack":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ArtTrack" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "@material-ui/icons/AssignmentInd":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AssignmentInd" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssignmentInd");

/***/ }),

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/DateRange":
/*!***********************************************!*\
  !*** external "@material-ui/icons/DateRange" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/FilterListRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/FilterListRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterListRounded");

/***/ }),

/***/ "@material-ui/icons/FormatListNumbered":
/*!********************************************************!*\
  !*** external "@material-ui/icons/FormatListNumbered" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatListNumbered");

/***/ }),

/***/ "@material-ui/icons/GpsFixed":
/*!**********************************************!*\
  !*** external "@material-ui/icons/GpsFixed" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GpsFixed");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/LocalGroceryStore":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/LocalGroceryStore" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalGroceryStore");

/***/ }),

/***/ "@material-ui/icons/LocationCity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LocationCity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationCity");

/***/ }),

/***/ "@material-ui/icons/Loyalty":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Loyalty" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Loyalty");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Money":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Money" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Money");

/***/ }),

/***/ "@material-ui/icons/PermIdentity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PermIdentity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermIdentity");

/***/ }),

/***/ "@material-ui/icons/Receipt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Receipt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "@material-ui/icons/SearchRounded":
/*!***************************************************!*\
  !*** external "@material-ui/icons/SearchRounded" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchRounded");

/***/ }),

/***/ "@material-ui/icons/SortRounded":
/*!*************************************************!*\
  !*** external "@material-ui/icons/SortRounded" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SortRounded");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/UnfoldLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/UnfoldLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/UnfoldLess");

/***/ }),

/***/ "@material-ui/icons/UnfoldMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/UnfoldMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/UnfoldMore");

/***/ }),

/***/ "@material-ui/icons/ViewList":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ViewList" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/icons/Whatshot":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Whatshot" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Whatshot");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bottom-scroll-listener":
/*!***********************************************!*\
  !*** external "react-bottom-scroll-listener" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bottom-scroll-listener");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-yandex-maps":
/*!************************************!*\
  !*** external "react-yandex-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-yandex-maps");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map