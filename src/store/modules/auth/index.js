import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  user: null,
  auth: { },
  userInitialInfo: null,
  isRegistered: null,
  loading: false
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
