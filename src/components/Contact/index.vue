<template>
  <li class="dialog" :class="{ active: isActive }">
    <a v-on="listeners" class="dialog-inner">
      <div class="left">
        <div class="dialog-photo">
          <img class="dialog-photo" :src="contact.profilePhoto" alt="">
        </div>
        <div class="dialog-message-wrap">
          <h3 class="dialog-title">{{ contact.name }}</h3>
          <span class="dialog-last_message">{{ contact.lastMessage.text }}</span>
        </div>
      </div>
      <div class="dialog-meta">
        <span class="dialog-date">{{ messageTime }}</span>
        <span class="dialog-unread-count">{{ contact.unread }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive () {
      return parseInt(this.$route.params.id, 10) === this.contact.roomId
    },
    listeners () {
      return { ...this.$listeners }
    },
    messageTime () {
      const { lastMessage: { createdAt } } = this.contact
      const fullDate = new Date(createdAt)
      let hours = fullDate.getHours()
      let minutes = fullDate.getMinutes()
      const amOrPm = hours >= 12 ? 'pm' : 'am'
      hours %= 12
      hours = hours || 12
      minutes = minutes < 10 ? `0${minutes}` : minutes
      const time = `${hours}:${minutes} ${amOrPm}`
      return time
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog {
    position: relative;
    display: block;
    margin-right: 1px;
    &.active {
      background-color: $blue-lighten;
    }
    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 auto;
      max-width: 225px;
      width: 100%;
    }
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      transition: background-color 300ms;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        background-color: $blue-lighten;
      }
    }
    &-photo {
      margin-right: 15px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }
    &-message-wrap {
      max-width: 145px;
      width: 100%;
    }
    &-meta {
      display: block;
      text-align: right;
      flex: 0 0 auto;
    }
    &-date {
      display: block;
      color: $grey-darken-1;
      font-size: 0.80em;
      margin-bottom: 2px;
    }
    &-unread-count {
      display: inline-block;
      background: $grey-darken-2;
      font-size: 11px;
      padding: 5px;
      border-radius: 11px;
      min-width: 21px;
      font-weight: 900;
      color: #fff;
      text-align: center;
      margin-top: 4px;
    }
    &-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $black-lighten;
      font-weight: 700;
      margin-top: 2px;
      font-size: 13px;
      margin-bottom: 2px;
      letter-spacing: 0.5px;
    }
    &-last_message {
      color: $grey;
      font-size: 13px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      letter-spacing: 0.2px;
      width: 95%;
      padding: 0.5px;
      display: inline-block;
    }
  }
</style>
