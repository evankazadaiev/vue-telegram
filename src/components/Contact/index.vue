<template>
  <li class="dialog">
    <a v-on="listeners" class="dialog-inner">
      <div class="left">
        <div class="dialog-photo">
          <img class="dialog-photo" src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt="">
        </div>
        <div class="dialog-message-wrap">
          <h3 class="dialog-title">Anna</h3>
          <span class="dialog-last_message">Hello World</span>
        </div>
      </div>
      <div class="dialog-meta">
        <span class="dialog-date">10:39 P.M.</span>
        <span class="dialog-unread-count">123</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    listeners () {
      return { ...this.$listeners }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog {
    position: relative;
    display: block;
    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      transition: background-color 300ms;
      cursor: pointer;
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

    }
    &-meta {
      display: block;
      text-align: right;
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
    }
  }
</style>
