<template>
  <div class="messaging">
    <div class="default_message" v-if="defaultRoute">
      <MessagesWrapper>
        <template v-slot:default>
          <SelectChatMessage/>
        </template>
      </MessagesWrapper>
    </div>
    <MessagesWrapper v-else>
      <template v-slot:messages>
        <Message v-for="message in messages" :key="message.id" :message="message"/>
      </template>
    </MessagesWrapper>
    <Controls @sendMessage="onSendMessage"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const Message = () => import('@/components/Message/')
const Controls = () => import('@/components/Controls/')
const SelectChatMessage = () => import('@/components/SelectChatMessage/')
const MessagesWrapper = () => import('@/components/MessagesWrapper/')
export default {
  name: 'ChatMessaging',
  components: {
    Message,
    Controls,
    SelectChatMessage,
    MessagesWrapper
  },
  computed: {
    ...mapGetters({
      messages: 'chat/messages'
    }),
    defaultRoute () {
      return this.$route.path === '/'
    }
  },
  methods: {
    ...mapActions({
      sendMessage: 'chat/sendMessage'
    }),
    onSendMessage (message) {
      this.sendMessage(message)
    }
  }
}
</script>

<style lang="scss" scoped>
  .messaging {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 20px 15px;
    background-image: url('https://raw.githubusercontent.com/telegramdesktop/tdesktop/dev/Telegram/Resources/art/bg_initial.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
</style>
