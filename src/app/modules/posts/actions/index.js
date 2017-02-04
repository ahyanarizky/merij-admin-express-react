import * as types from '../constants/actiontypes'

export function fetchContent(page, offset){
  return {type: types.FETCH_CONTENT, page, offset}
}
