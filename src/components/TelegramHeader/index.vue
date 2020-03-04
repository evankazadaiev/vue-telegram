<template>
  <header class="header">
    <div class="header_inner">
      <h2>Telegram</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TelegramHeader'
}
</script>

<style lang="scss" scoped>
  @mixin center-flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .header {
    width: 100%;
    @include center-flex;
    margin: 0 auto;
    height: 48px;
    background: $brand-color;
    &_inner {
      padding: 0 20px;
    }
    h2 {
      color: $white;
    }
  }
</style>
