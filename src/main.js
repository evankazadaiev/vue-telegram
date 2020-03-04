import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import globalMixin from './mixins/global'

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields'
})

Vue.mixin(globalMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
