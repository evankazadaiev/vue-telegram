<template>
    <div class="wrapper">
      <h2>Select contact to start chatting!</h2>
    </div>
</template>

<script>
export default {
  name: 'SelectChatMessage'
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: $grey;
    }
  }
</style>
