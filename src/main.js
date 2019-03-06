import './assets/scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import SlidesPortfolio from './page/SlidesPortfolio.vue'
import SlidesHome from './page/SlidesHome.vue'
import ModalOrder from './page/ModalOrder.vue'
import Menu from './page/Menu.vue'
import Header from './page/Header.vue'
import Previu from './page/Previu.vue'
import HeaderWidthBack from './page/HeaderWidthBack.vue'
import Footer from './page/Footer.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMq from 'vue-mq'
import VueAgile from 'vue-agile'

Vue.use(VueAgile);
Vue.use(VueRouter);
Vue.component('slidesPortfolio', SlidesPortfolio);
Vue.component('slidesHome', SlidesHome);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('headerWidthBack', HeaderWidthBack);
Vue.component('my-footer', Footer);
Vue.component('previu', Previu);


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
    router: router,
});