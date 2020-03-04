import types from './types'

const sendMessage = ({ state, commit }, message) => {
  commit(types.SEND_MESSAGE, message)
  return state.messages
}
const removeMessages = ({ state, commit }) => {
  commit(types.REMOVE_MESSAGES)
  return state.messages
}

const getMessages = ({ commit, state }, roomId) => {
  commit(types.GET_MESSAGES, roomId)
  return state
}

export default {
  sendMessage,
  removeMessages,
  getMessages
}
