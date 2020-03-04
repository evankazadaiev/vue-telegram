<template>
    <div class="telegram-label">
      <TelegramIcon/>
      <h3>Telegram</h3>
    </div>
</template>

<script>
import TelegramIcon from '@/assets/telegram.svg?inline'

export default {
  name: 'TelegramLabel',
  components: {
    TelegramIcon
  }
}
</script>

<style lang="scss" scoped>
  .telegram-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    svg {
      height: 35px;
      width: 35px;
    }
    h3 {
      color: #fff;
    }
  }
</style>
