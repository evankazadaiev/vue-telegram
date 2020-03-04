<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created () {
    console.log(process.env)
    // this.clearAuthModule()
  },
  methods: {
    ...mapActions({
      clearAuthModule: 'auth/clearModule'
    })
  }
}
</script>

<style lang="scss">
  @import './assets/styles/index';
</style>
