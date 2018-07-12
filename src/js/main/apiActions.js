import { requestWithKey } from 'lp-redux-api'

export const REQ_ALL_MOVIES = 'REQ_ALL_MOVIES'

export function fetchAllMovies () {
  return requestWithKey(REQ_ALL_MOVIES, {
    url: '/movies'
  })
}
