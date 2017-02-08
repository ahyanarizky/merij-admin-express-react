import * as types from '../constants/actiontypes'

export function fetchList(page, offset) {
  return {type: types.FETCH_LIST, page, offset}
}

export function searchList(value) {
  return {type: types.SEARCH_LIST, value}
}

export function filterList(property = []) {
  return {type: types.FILTER_LIST, property}
}

export function sortList(property = []) {
  return {type: types.SORT_LIST, property}
}
