<template>
    <ul class="chat-contacts-wr scrollbar">
          <Contact v-for="contact in contacts"
                   :key="contact.roomId"
                   :contact="contact"
                   @click="openChat(contact.roomId)"/>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const Contact = () => import('@/components/Contact/')
export default {
  name: 'ChatContacts',
  components: {
    Contact
  },
  computed: {
    ...mapGetters({
      contacts: 'chat/contacts'
    })
  },
  methods: {
    ...mapActions({
      getMessages: 'chat/getMessages'
    }),
    async openChat (id) {
      await this.getMessages(id)
      await this.$router.push(`/${id}`)
    }
  },
  async mounted () {
    const { id } = this.$route.params
    id && await this.getMessages(id)
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
