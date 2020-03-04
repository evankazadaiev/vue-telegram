import types from './types'

export default {
  [types.SET_PHONE] (state, data) {
    state.auth = {
      ...state.auth,
      ...data
    }
  },
  [types.LOGOUT] (state) {
    state = {
      user: null,
      auth: { }
    }
  },
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SEND_CODE_REQUEST] (state, payload) {
    state.loading = true
    state.userInitialInfo = payload
  },
  [types.SEND_CODE_SUCCESS] (state, payload) {
    state.loading = false
    state.auth = payload
    console.warn('Send code success!')
  },
  [types.SEND_CODE_FAILURE] (state) {
    state.loading = false
  },
  [types.SIGN_IN_REQUEST] (state) {
    state.loading = true
  },
  [types.SIGN_IN_SUCCESS] (state, payload) {
    console.log(payload)
    state.loading = false
  },
  [types.SIGN_IN_FAILURE] (state, error) {
    state.loading = false
  },
  [types.CLEAR_MODULE] (state) {
    state.auth = {}
    state.user = null
    state.userInitialInfo = null
  },
  [types.CHECK_PHONE_REQUEST] (state) {
    state.loading = true
  },
  [types.CHECK_PHONE_SUCCESS] (state) {
    state.loading = false
    state.isRegistered = true
  },
  [types.CHECK_PHONE_FAILURE] (state) {
    state.loading = false
    state.isRegistered = false
  }
}
