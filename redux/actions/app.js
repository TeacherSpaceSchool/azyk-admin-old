import { SHOW_DRAWER, SET_SEARCH, SET_FILTER, SET_SORT, SET_IS_MOBILE_APP, SHOW_LOAD, SET_COUNT_BASKET } from '../constants/app'

export function showDrawer(data) {
    return {
        type: SHOW_DRAWER,
        payload: data
    }
}

export function setFilter(data) {
    return {
        type: SET_FILTER,
        payload: data
    }
}

export function setCountBasket(data) {
    return {
        type: SET_COUNT_BASKET,
        payload: data
    }
}

export function setSort(data) {
    return {
        type: SET_SORT,
        payload: data
    }
}

export function setSearch(data) {
    return {
        type: SET_SEARCH,
        payload: data
    }
}

export function setIsMobileApp(data) {
    return {
        type: SET_IS_MOBILE_APP,
        payload: data
    }
}

export function showLoad(show) {
    return {
        type: SHOW_LOAD,
        payload: show
    }
}