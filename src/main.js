import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// style
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '@/styles/app.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    template: '<app />',
    components: { App },
}).$mount('#app');
