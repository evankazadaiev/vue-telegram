import types from './types'
import telegramAPI from '@/services/api'

const setPhone = ({ commit }, data) => {
  commit(types.SET_PHONE, data)
}

const logout = ({ commit }) => {
  commit(types.LOGOUT)
}

const setUser = ({ commit }, user) => {
  commit(types.SET_USER, user)
}

const signIn = async ({ commit, dispatch }, params) => {
  commit(types.SIGN_IN_REQUEST)
  try {
    const user = await telegramAPI.signIn(params)
    console.log(user)
    dispatch('setUser', user)
    commit(types.SIGN_IN_SUCCESS, user)
    return user
  } catch (error) {
    commit(types.SIGN_IN_FAILURE, error)
  }
}

const sendCode = async ({ commit, dispatch }, params) => {
  const { phone, phoneNumber } = params
  const timer = setTimeout(() => {
    dispatch('resendCode', params)
  }, 30000)
  commit(types.SEND_CODE_REQUEST, { phone, phoneNumber })
  try {
    const phone_code_hash = await telegramAPI.sendAuthCode(phoneNumber)
    commit(types.SEND_CODE_SUCCESS, { phoneNumber, phone_code_hash })
    clearTimeout(timer)
    return phone_code_hash
  } catch (error) {
    commit(types.SEND_CODE_FAILURE, error)
  }
}

const resendCode = async ({ commit }, params) => {
  const { phone, phoneNumber } = params
  commit(types.SEND_CODE_REQUEST, { phone, phoneNumber })
  try {
    const phone_code_hash = await telegramAPI.resendAuthCode(phoneNumber)
    commit(types.SEND_CODE_SUCCESS, { phoneNumber, phone_code_hash })
    return phone_code_hash
  } catch (error) {
    commit(types.SEND_CODE_FAILURE, error)
  }
}

const checkPhone = async ({ commit }, phoneNumber) => {
  commit(types.CHECK_PHONE_REQUEST)
  try {
    const isRegistered = await telegramAPI.checkPhone(phoneNumber)
    commit(types.CHECK_PHONE_SUCCESS, isRegistered)
    return isRegistered
  } catch (error) {
    commit(types.CHECK_PHONE_FAILURE)
  }
}

const clearModule = ({ commit }) => commit(types.CLEAR_MODULE)

export default {
  resendCode,
  checkPhone,
  setPhone,
  setUser,
  logout,
  signIn,
  sendCode,
  clearModule
}
