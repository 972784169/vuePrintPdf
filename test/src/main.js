// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import {getRequest,postRequest} from '@/utils/api'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$axios=axios
Vue.prototype.getRequest=getRequest
Vue.prototype.postRequest=postRequest
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
