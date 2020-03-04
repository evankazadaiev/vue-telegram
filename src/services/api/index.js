import { MTProto } from 'telegram-mtproto'
import Storage from 'mtproto-storage-browser'

const config = {
  api_id: 1267866,
  api_hash: 'a6b881428e60b116a8409fdecac9f620'
}

const api = {
  layer: 57,
  invokeWithLayer: 0xda9b0d0d,
  initConnection: 0x69796de9,
  api_id: config.api_id
}

const app = {
  storage: new Storage()
}

const server = {
  webogram: true,
  dev: false
}
class TelegramAPI {
  constructor () {
    this.client = MTProto({ server, api, app })
  }

  async checkPhone (phoneNumber) {
    const { phone_registered } = await this.client('auth.checkPhone', {
      phone_number: phoneNumber
    })
    return phone_registered
  }

  async sendAuthCode (phoneNumber) {
    const { phone_code_hash } = await this.client('auth.sendCode', {
      phone_number: phoneNumber,
      api_id: config.api_id,
      api_hash: config.api_hash
    })

    return phone_code_hash
  }

  async resendAuthCode (phoneNumber) {
    const { phone_code_hash } = await this.client('auth.resendCode', {
      phone_number: phoneNumber,
      api_id: config.api_id,
      api_hash: config.api_hash
    })

    return phone_code_hash
  }

  async signIn ({ phoneNumber, phoneCode, phoneCodeHash }) {
    return this.client('auth.signIn', {
      phone_number: phoneNumber,
      phone_code_hash: phoneCodeHash,
      phone_code: phoneCode
    })
  }

  async logOut () {
    const isLogOutSuccessful = await this.client('auth.logOut')
    return isLogOutSuccessful
  }

  async getDialogs () {
    const dialogs = await this.client('messages.getDialogs', {
      limit: 20
    })

    return dialogs
  }

  async getHistory (userId, accessHash) {
    const { messages } = await this.client('messages.getHistory', {
      peer: {
        _: 'inputPeerUser',
        user_id: userId,
        access_hash: accessHash
      },
      limit: 20
    })

    return messages
  }

  async sendMessage (userId, accessHash, message, messageId) {
    const sentMessage = await this.client('messages.sendMessage', {
      peer: {
        _: 'inputPeerUser',
        user_id: userId,
        access_hash: accessHash
      },
      message,
      random_id: messageId
    })

    return sentMessage
  }

  async readHistory (userId, accessHash) {
    const readMark = await this.client('messages.readHistory', {
      peer: {
        _: 'inputPeerUser',
        user_id: userId,
        access_hash: accessHash
      }
    })

    return readMark
  }
}

const API = new TelegramAPI()

export default API
