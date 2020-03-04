<template>
  <div class="wrapper-page">
    <div class="head_bg"/>
    <div class="wrapper-page__inner">
      <SendCodeForm/>
    </div>
  </div>
</template>

<script>
const SendCodeForm = () => import('@/components/SendCodeForm/')

export default {
  name: 'LoginPage',
  components: {
    SendCodeForm
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-page {
    .head_bg {
      width: 100%;
      background: #0088CC;
      height: 226px;
    }
    &__inner {
      margin: -131px auto 90px;
      max-width: 404px;
    }
  }
</style>
