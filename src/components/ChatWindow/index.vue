<template>
  <div class="chat_window">
    <ChatContacts class="chat_window_contacts"/>
    <router-view :key="$route.fullPath" class="chat_window_messaging"/>
  </div>
</template>

<script>
const ChatContacts = () => import('@/components/ChatContacts/')
// const Messaging = () => import('@/components/ChatMessaging/')
export default {
  name: 'ChatWindow',
  components: {
    ChatContacts
    // Messaging
  }
}
</script>

<style lang="scss" scoped>
  .chat_window {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: calc(100vh - 48px);
    width: 100%;
    overflow: hidden;
    &_contacts {
      flex: 0 0 30%;
      max-width: 30%;
    }
    &_messaging {
      flex: 0 0 70%;
      max-width: 70%;
    }
  }
</style>
