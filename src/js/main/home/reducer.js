import { handleActions } from 'redux-actions'
import * as apiActions from 'api-actions'
import { set } from 'lodash/fp'
import { selectorForSlice } from 'lp-redux-utils'

const reducerKey = 'home'
const slice = 'root.home'

const initialState = {
  movies: []
}

const reducer = handleActions({
  [apiActions.fetchAllMovies]: (state, { payload } ) => {
    return set('movies', payload, state)
  }
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  movies: select('movies')
}

export { reducer, selectors, reducerKey }
