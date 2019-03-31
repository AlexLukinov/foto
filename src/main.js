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
import HeaderMenuMobile from './page/HeaderMenuMobile.vue'
import Footer from './page/Footer.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueMq from 'vue-mq'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import Info from './page/Info.vue'
import Album from './page/Album.vue'
import Post from './page/Post.vue'

window.EventBus = new Vue();

Vue.component('Info', Info);
Vue.component('album', Album);
Vue.component('Post', Post)
Vue.component('slidesPortfolio', SlidesPortfolio);
Vue.use(VueRouter);
Vue.component('VueGallerySlideshow', VueGallerySlideshow);
Vue.component('slidesHome', SlidesHome);
Vue.component('modal-order', ModalOrder);
Vue.component('my-menu', Menu);
Vue.component('my-header', Header);
Vue.component('headerWidthBack', HeaderWidthBack);
Vue.component('headerMenuMobile', HeaderMenuMobile);
Vue.component('my-footer', Footer);
Vue.component('previu', Previu);


Vue.use(VueMq, {
    breakpoints: {
        mobile: 769,
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