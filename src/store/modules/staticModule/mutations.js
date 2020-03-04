import { GET_COUNTRIES_SUCCESS, GET_COUNTRIES_REQUEST, GET_COUNTRIES_FAILURE } from './types'

const mutations = {
  [GET_COUNTRIES_REQUEST] () {

  },
  [GET_COUNTRIES_SUCCESS] (state, payload) {
    state.countriesAndCodes = payload
  },
  [GET_COUNTRIES_FAILURE] (state, error) {

  }
}

export default mutations
