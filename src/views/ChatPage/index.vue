<template>
  <div class="wrapper-page">
    <TelegramHeader/>
    <ChatWindow/>
  </div>
</template>

<script>
const TelegramHeader = () => import('@/components/TelegramHeader')
const ChatWindow = () => import('@/components/ChatWindow')
export default {
  name: 'ChatPage',
  components: {
    TelegramHeader,
    ChatWindow
  }
}
</script>

<style scoped>

</style>
