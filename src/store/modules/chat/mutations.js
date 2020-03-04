import types from './types'
import CONSTANTS from '@/constants/'

const mutations = {
  [types.SEND_MESSAGE] (state, message) {
    state.messages = [...state.messages, message]
  },
  [types.REMOVE_MESSAGES] (state) {
    state.messages = []
  },
  [types.GET_MESSAGES] (state, roomId) {
    const stringRoomId = String(roomId)
    state.messages = CONSTANTS.MESSAGES.get(stringRoomId)
  }
}

export default mutations
