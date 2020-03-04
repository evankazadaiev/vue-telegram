import axios from 'axios'
import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_REQUEST } from './types'

const getCountriesAndCodes = async ({ commit, rootGetters }) => {
  if (rootGetters['staticModule/countriesAndCodes'].length > 0) return
  commit(GET_COUNTRIES_REQUEST)
  try {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;callingCodes')
    commit(GET_COUNTRIES_SUCCESS, data)
  } catch (error) {
    commit(GET_COUNTRIES_FAILURE, error)
  }
}

export default {
  getCountriesAndCodes
}
