import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import CONSTANTS from '@/constants/'

const state = {
  messages: [],
  contacts: CONSTANTS.CONTACTS
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
