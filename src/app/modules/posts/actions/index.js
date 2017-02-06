import * as types from '../constants/actiontypes'

export function fetchList(page, offset) {
  return {type: types.FETCH_LIST, page, offset}
}

export function filterList(status = []) {
  return {type: types.FILTER_LIST, status}
}

export function sortList(property = []) {
  return {type: types.SORT_LIST, property}
}
