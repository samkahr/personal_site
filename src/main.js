import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  render: h => h(App),
}).$mount('#app')
