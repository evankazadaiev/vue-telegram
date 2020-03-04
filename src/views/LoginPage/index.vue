<template>
  <div class="wrapper-page">
    <div class="head_bg"/>
    <div class="wrapper-page__inner">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
const LoginForm = () => import('@/components/LoginForm/')

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-page {
    .head_bg {
      width: 100%;
      background: $brand-color;
      height: 226px;
    }
    &__inner {
      margin: -131px auto 90px;
      max-width: 404px;
    }
  }
</style>
