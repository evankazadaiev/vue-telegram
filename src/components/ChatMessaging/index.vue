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
        <Message/>
        <Message class="my"/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </template>
    </MessagesWrapper>
    <Controls/>
  </div>
</template>

<script>
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
    defaultRoute () {
      return this.$route.path === '/'
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
