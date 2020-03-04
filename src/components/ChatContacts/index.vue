<template>
    <ul class="chat-contacts-wr scrollbar">
          <Contact @click="openChat(3)"/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
    </ul>
</template>

<script>
const Contact = () => import('@/components/Contact/')
export default {
  name: 'ChatContacts',
  components: {
    Contact
  },
  methods: {
    openChat (id) {
      this.$router.push(`/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-contacts-wr {
    padding: 10px 0;
    border-right: 2px solid $grey;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
