export const phoneData = state => ({
  phoneNumber: state.auth.phoneNumber,
  phoneCodeHash: state.auth.phone_code_hash
})
export const user = state => state.user
export const userInitialInfo = state => state.userInitialInfo
export const phoneSent = state => !!state.userInitialInfo
export const isPhoneRegistered = state => !!state.isRegistered
export const loading = state => state.loading

export default {
  loading,
  phoneSent,
  phoneData,
  user,
  isPhoneRegistered,
  userInitialInfo
}
