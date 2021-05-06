import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css/dist/js/materialize.min'
import JwPagination from 'jw-vue-pagination'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component('Paginate', Paginate)
Vue.component('jw-pagination', JwPagination)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
