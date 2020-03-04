import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import staticModule from './modules/staticModule'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth.auth,
    staticModule: state.staticModule
  })
})

export default new Vuex.Store({
  modules: {
    auth,
    staticModule
  },
  plugins: [vuexLocal.plugin, createLogger()]
})
