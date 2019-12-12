webpackHotUpdate("static\\development\\pages\\ads.js",{

/***/ "./components/app/AppBar.js":
/*!**********************************!*\
  !*** ./components/app/AppBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "./node_modules/@material-ui/icons/LocalGroceryStore.js");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "./node_modules/@material-ui/icons/AssignmentInd.js");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/styleMUI/appbar */ "./src/styleMUI/appbar.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/SearchRounded */ "./node_modules/@material-ui/icons/SearchRounded.js");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/SortRounded */ "./node_modules/@material-ui/icons/SortRounded.js");
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "./node_modules/@material-ui/icons/FilterListRounded.js");
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "./node_modules/@material-ui/icons/DateRange.js");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "./node_modules/@material-ui/icons/PermIdentity.js");
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _dialog_Sign__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../dialog/Sign */ "./components/dialog/Sign.js");
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _dialog_SetDate__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../dialog/SetDate */ "./components/dialog/SetDate.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




































var MyAppBar = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(function (props) {
  //props
  var classes = Object(_src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_20__["default"])();
  var filters = props.filters,
      sorts = props.sorts,
      pageName = props.pageName,
      dates = props.dates;
  var _props$app = props.app,
      drawer = _props$app.drawer,
      search = _props$app.search,
      filter = _props$app.filter,
      sort = _props$app.sort,
      isMobileApp = _props$app.isMobileApp,
      countBasket = _props$app.countBasket,
      date = _props$app.date;
  var _props$appActions = props.appActions,
      showDrawer = _props$appActions.showDrawer,
      setSearch = _props$appActions.setSearch,
      setFilter = _props$appActions.setFilter,
      setSort = _props$appActions.setSort,
      setDate = _props$appActions.setDate;
  var _props$user = props.user,
      authenticated = _props$user.authenticated,
      profile = _props$user.profile;
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var logout = props.userActions.logout; //state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      anchorElMobileMenu = _React$useState2[0],
      setAnchorElMobileMenu = _React$useState2[1];

  var openMobileMenu = Boolean(anchorElMobileMenu);

  var handleMobileMenu = function handleMobileMenu(event) {
    setAnchorElMobileMenu(event.currentTarget);
  };

  var handleCloseMobileMenu = function handleCloseMobileMenu() {
    setAnchorElMobileMenu(null);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElSort = _useState[0],
      setAnchorElSort = _useState[1];

  var openSort = Boolean(anchorElSort);

  var handleMenuSort = function handleMenuSort(event) {
    setAnchorElSort(event.currentTarget);
  };

  var handleCloseSort = function handleCloseSort() {
    setAnchorElSort(null);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElProfile = _useState2[0],
      setAnchorElProfile = _useState2[1];

  var openProfile = Boolean(anchorElProfile);

  var handleMenuProfile = function handleMenuProfile(event) {
    setAnchorElProfile(event.currentTarget);
  };

  var handleCloseProfile = function handleCloseProfile() {
    setAnchorElProfile(null);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElFilter = _useState3[0],
      setAnchorElFilter = _useState3[1];

  var openFilter = Boolean(anchorElFilter);

  var handleMenuFilter = function handleMenuFilter(event) {
    setAnchorElFilter(event.currentTarget);
  };

  var handleCloseFilter = function handleCloseFilter() {
    setAnchorElFilter(null);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElDate = _useState4[0],
      setAnchorElDate = _useState4[1];

  var openDate = Boolean(anchorElDate);

  var handleMenuDate = function handleMenuDate(event) {
    setAnchorElDate(event.currentTarget);
  };

  var handleCloseDate = function handleCloseDate() {
    setAnchorElDate(null);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      openSearch = _useState5[0],
      setOpenSearch = _useState5[1];

  var handleSearch = function handleSearch(event) {
    setSearch(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_21__["getCountBasket"])();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "fixed",
    className: "appBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: function onClick() {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, pageName), isMobileApp ? openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: classes.searchM,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_27__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Search",
      onClick: function onClick() {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openMobileMenu ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMobileMenu,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      setOpenSearch(true);
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), "\xA0\u041F\u043E\u0438\u0441\u043A")), filters && filters.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: handleMenuFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), "\xA0\u0424\u0438\u043B\u044C\u0442\u0440")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, filters.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: 'filter' + idx,
      style: {
        background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
      },
      onClick: function onClick() {
        setFilter(elem.value);
        handleCloseFilter();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, elem.name);
  }))] : null, dates ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: handleMenuDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), "\xA0\u0414\u0430\u0442\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: function onClick() {
      setMiniDialog('Дата', __jsx(_dialog_SetDate__WEBPACK_IMPORTED_MODULE_38__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }));
      showMiniDialog(true);
      handleCloseDate();
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: function onClick() {
      setDate('');
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "\u0412\u0441\u0435"))] : null, sorts && sorts.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: handleMenuSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), "\xA0\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, sorts.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: 'sort' + idx,
      onClick: function onClick() {
        sort === "-".concat(elem.field) ? setSort(elem.field) : setSort("-".concat(elem.field));
        /*handleCloseSort();handleCloseMobileMenu()*/
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, sort === "-".concat(elem.field) ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }) : __jsx("div", {
      style: {
        width: '24px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }), elem.name);
  }))] : null), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, !authenticated || ['client', 'агент'].includes(profile.role) ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))) : null, !authenticated || profile.role === 'client' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))) : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/[id]"),
    as: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/").concat(profile._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();

      var action =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  logout(true);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function action() {
          return _ref2.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_36__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))) : openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: classes.searchD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_27__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Search",
      onClick: function onClick() {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, dates ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0414\u0430\u0442\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openDate ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuDate,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: function onClick() {
      setMiniDialog('Дата', __jsx(_dialog_SetDate__WEBPACK_IMPORTED_MODULE_38__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }));
      showMiniDialog(true);
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: function onClick() {
      setDate('');
      handleCloseDate();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "\u0412\u0441\u0435")), "\xA0") : null, filters && filters.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0424\u0438\u043B\u044C\u0442\u0440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openFilter ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuFilter,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, filters.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: 'filter' + idx,
      style: {
        background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
      },
      onClick: function onClick() {
        setFilter(elem.value);
        handleCloseFilter();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, elem.name);
  })), "\xA0") : null, sorts && sorts.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openSort ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuSort,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, sorts.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: 'sort' + idx,
      onClick: function onClick() {
        sort === "-".concat(elem.field) ? setSort(elem.field) : setSort("-".concat(elem.field));
        handleCloseSort();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, sort === "-".concat(elem.field) ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }) : __jsx("div", {
      style: {
        width: '24px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }), elem.name);
  })), "\xA0") : null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u043E\u0438\u0441\u043A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openSearch ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: function onClick() {
      setOpenSearch(true);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    __self: this
  }, !authenticated || ['client', 'агент'].includes(profile.role) ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))) : null, !authenticated || profile.role === 'client' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"))) : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/[id]"),
    as: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/").concat(profile._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();

      var action =
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  logout(true);

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function action() {
          return _ref3.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_36__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
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
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_19__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_18__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_17__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps)(MyAppBar));

/***/ })

})
//# sourceMappingURL=ads.js.6a90bca48327bbb0c4ed.hot-update.js.map