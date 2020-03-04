<template>
  <div class="message" :class="{ my: message.my }">
    <div class="message__text">
      <div class="message__text__content">
        <span>{{ message.text }}</span>
        <div class="message__time">{{ messageTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '@/helpers/'
export default {
  name: 'Message',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    messageTime () {
      const time = this.message.time ?? helpers.randomDate(new Date(1, 2, 1998), new Date())
      const fullDate = new Date(time)
      let hours = fullDate.getHours()
      let minutes = fullDate.getMinutes()
      const amOrPm = hours >= 12 ? 'pm' : 'am'
      hours %= 12
      hours = hours || 12
      minutes = minutes < 10 ? `0${minutes}` : minutes
      const newTime = `${hours}:${minutes} ${amOrPm}`
      return newTime
    }
  }
}
</script>

<style lang="scss" scoped>
  .message {
    padding: 4px 8px 8px 8px;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 30px;
    max-width: 420px;
    margin: 10px;
    z-index: 2;
    box-shadow: 0 1px 4px 0 rgba(160,172,182,.5);
    background: $white;
    border-radius: .4em;
    &::before, &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      margin-top: -1px;
      margin-left: -11px;
    }
    &::before {
      left: 0;
      top: 50%;
      border-right-color: #fff;
      border-left: 0;
      border-top: 0;
    }
    &.my {
      margin-left: auto;
      background-color: #effdde;
      box-shadow: 0 1px 4px 0 rgba(93,196,82,.5);
      .message__time {
        color: #5dc452;
      }
      &::before {
        content: '';
        border: none;
      }
      &::after {
        right: -12px;
        top: 50%;
        border-left-color: #effdde;
        border-right: 0;
        border-top: 0;
      }
    }
    &__text {
      width: 100%;
      &__content {
        span {
          font-size: 14px;
          letter-spacing: 0.3px;
        }
      }
    }
    &__time {
      position: absolute;
      bottom: 5px;
      right: 6px;
      display: inline-block;
      float: right;
      text-align: right;
      font-size: 12px;
      color: #a0acb6;
    }
  }
</style>
