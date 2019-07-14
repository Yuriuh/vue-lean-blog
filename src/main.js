import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios-defult'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.directive('theme',{
	bind(el, binding, vnode){
		if (binding.value === 'wide') {
			el.style.maxWidth = "1260px";
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = "560px";
		}
		if (binding.arg == 'column') {
			el.style.background = "#6677cc";
			el.style.padding = '20px';
		}
	}
})

Vue.filter("snippet", function(value) {
	return value.slice(0, 100) + "..."
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
