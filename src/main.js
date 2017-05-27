import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index);
};

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
