<template>
  <div class="controls-wr">
    <div class="input-wrapper">
      <textarea
        ref="messageInput"
        v-model="message"
        type="text"
        class="scrollbar"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendMessage"/>
      <div class="buttons-wr">
        <label class="attach-btn">
          <AttachIcon/>
          <input type="file" hidden>
        </label>
        <button class="send-btn" @click="sendMessage">
          <SendIcon/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SendIcon from '@/assets/send-btn.svg?inline'
import AttachIcon from '@/assets/attach-icon.svg?inline'
import helpers from '@/helpers/'

export default {
  name: 'Controls',
  components: {
    SendIcon,
    AttachIcon
  },
  data: () => ({
    message: ''
  }),
  methods: {
    sendMessage () {
      if (this.message.length > 0) {
        const message = {
          my: true,
          text: this.message,
          id: helpers.getRandomId(),
          time: new Date()
        }
        this.$emit('sendMessage', message)
        this.message = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .controls-wr {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .input-wrapper {
      width: 100%;
    }
  .buttons-wr {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      button,
      label {
        cursor: pointer;
        outline: 0;
        border: 0;
        background: transparent;
      }
    }
    textarea {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      max-height: 53px;
      resize: none;
      border-radius: 6px;
      border: solid 1px $brand-color;
      background-color: $white;
      outline: 0;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.43;
      letter-spacing: -0.03px;
      color: #000;
      font-size: 13px;
      padding: 11px 100px 14px 25px;
    }
  }
</style>
