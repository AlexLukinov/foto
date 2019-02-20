import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import SlidesPortfolio from './page/SlidesPortfolio.vue'
import SlidesServices from './page/SlidesServices.vue'
import ModalOrder from './page/ModalOrder.vue'
import Menu from './page/Menu.vue'
import Header from './page/Header.vue'
import Footer from './page/Footer.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMq from 'vue-mq'
import VueAnime from 'vue-animejs';

Vue.use(VueAnime);
Vue.use(VueRouter);
Vue.component('slidesPortfolio', SlidesPortfolio);
Vue.component('slidesServices', SlidesServices);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('my-footer', Footer);
import * as VueGL from "vue-gl";

require('./assets/MTLLoader.js');
require('./assets/OBJLoader.js');
require('./assets/OrbitControls.js');

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});
Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});
