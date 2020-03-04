<template>
  <div class="messages-wr scrollbar" ref="wrapper">
    <slot name="messages"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'MessagesWrapper',
  data: () => ({
    first: true
  }),
  methods: {
    scrollToBottom () {
      const wr = this.$refs.wrapper
      if (this.first) {
        wr.scrollTop = wr.scrollHeight
      } else if (wr.scrollTop + wr.clientHeight === wr.scrollHeight) {
        wr.scrollTop = wr.scrollHeight
      }
    }
  },
  updated () {
    this.scrollToBottom()
  }
}
</script>

<style lang="scss" scoped>
.messages-wr {
  min-height: 570px;
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
