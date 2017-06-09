import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Axios from 'axios';
import routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
Axios.defaults.baseURL = '/api';
Vue.prototype.$http = Axios;

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index);
};

const router = new VueRouter({
  // mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
