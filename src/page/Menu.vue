<template>
    <transition name="menu-anim" mode="out-in">
        <div class="page page-menu">
               <div class="menu-list">
                   <div class="menu-left-column" :class="$mq">
                       <div class="menu-header">
                           <div class="logo">
                               <img class="menu-logo" src="src/assets/img/logo.png" alt="Букетное Бюро">
                           </div>
                       </div>
                       <div class="my-nav">
                           <router-link to="/">
                               <button>
                                   <span class="nav-item">главная</span>
                               </button>
                           </router-link>
                           <router-link to="/">
                               <button>
                                   <span class="nav-item" @click="toggleIsActive('services')">наши услуги
                                       <span class="nav-item-span">
                                         <span @click="toggleIsActive('services')"
                                               class="vertical-line"
                                               :style="lineServicesHeight">
                                         </span>
                                         <span  class="horizontal-line"></span>
                                       </span>
                                   </span>
                               </button>
                           </router-link>
                           <div v-if="isActiveServices">
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Букеты и композиции
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Свадебная флористика и декор
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Оформление мероприятий
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Отели и корпоративные клиенты
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Ритуальная флористика
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Мастер-классы
                                   </span>
                                   </button>
                               </router-link>
                           </div>
                           <router-link to="/aboutUs">
                               <button>
                                   <span class="nav-item">о нас</span>
                               </button>
                           </router-link>
                           <router-link to="/">
                               <button>
                                   <span class="nav-item" @click="toggleIsActive('blog')" >блог
                                       <span class="nav-item-span">
                                         <span class="vertical-line" :style="lineBlogHeight"></span>
                                         <span @click="toggleIsActive('blog')" class="horizontal-line"></span>
                                       </span>
                                   </span>
                               </button>
                           </router-link>
                           <div v-if="isActiveBlog">
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                         <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Наши истории
                                   </span>
                                   </button>
                               </router-link>
                               <router-link to="/">
                                   <button>
                                   <span class="nav-item nav-item-inner">
                                       <span class="nav-item-span">
                                        <span class="vertical-line"></span>
                                         <span class="horizontal-line"></span>
                                       </span>
                                       Другие статьи
                                   </span>
                                   </button>
                               </router-link>
                           </div>
                           <router-link to="/contacts">
                               <button>
                                   <span class="nav-item">контакты</span>
                               </button>
                           </router-link>
                       </div>
                       <div class="contacts">
                           <a href="" class="a-text" :class="$mq">Facebook</a>
                           <a href="" class="a-text" :class="$mq">Vk</a>
                           <a href="" class="a-text" :class="$mq">Instagram</a>
                       </div>
                   </div>
                   <div class="menu-right-column">
                       <img src="src/assets/img/close.png"
                            class="menu-close"
                            @click="$emit('close')"
                            alt="Букетное бюро">
                       <div class="arrow-around arrow-rotate" @click="toggleIsActive('developers')">
                           <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                           <img class="arrow arrow-left" src="src/assets/img/arrow-left.png" alt="Буектное бюро">
                       </div>
                       <div class="lang" :class="$mq">
                           <span :class="$mq">en</span>
                           <div class="lang-divider" :class="$mq"></div>
                           <span class="lang-active" :class="$mq">ru</span>
                       </div>
                   </div>
                   <div class="developers-column"  v-if="isActiveDevelopers">
                       <div class="developers">
                           <div class="nav-item">DEVELOPERS</div>
                           <div class="developers-list">
                               <a href="" class="a-text" :class="$mq">Web design:<br>
                                   <span class="developers-name">
                                      Helen Tihomolova
                                   </span>
                               </a>
                               <a href="" class="a-text" :class="$mq">Front end:<br>
                                   <span class="developers-name">
                                       Ekaterina Lukinova
                                   </span>
                               </a>
                               <a href="" class="a-text" :class="$mq">Back end:<br>
                                   <span class="developers-name">
                                       Alexey Lukinov
                                   </span>
                               </a>
                           </div>
                           <span class="a-text">2019</span>

                       </div>
                   </div>
               </div>

        </div>
    </transition>
</template>
<script>
 export default {
     data() {
         return {
             showTopMenu: false,
             isActiveServices: false,
             isActiveBlog: false,
             isActiveDevelopers: false,
             servicesHeight: 0,
             blogHeight: 0,
         };
     },
     methods: {
         toggleIsActive: function (link) {
             switch (link) {
                 case 'services':
                     this.isActiveServices = !this.isActiveServices;
                     break;
                 case 'blog':
                     this.isActiveBlog = !this.isActiveBlog;
                     break;
                 case 'developers':
                     this.isActiveDevelopers = !this.isActiveDevelopers;
                     break;
             }
         }
     },
     computed: {
         lineServicesHeight: function () {
             return `height: ${this.isActiveServices ? 0 : 11}px`;
         },
         lineBlogHeight: function () {
             return `height: ${this.isActiveBlog ? 0 : 11}px`;
         },
     }
 }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    button {
        justify-content: flex-start;
    }
    .page-menu {
        width: 100%;
        height: 100vh;
        background-color: rgba(243, 240, 234, 0.7);
        position: fixed;
        display: flex;
        align-items: flex-end;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .menu-list {
        display: flex;
        width: 42%;
        background-color: $bgc-menu;
        height: 100vh;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 0 40px -5px #333;
        position: relative;
        &.mobile {
            margin: 15vh 0 0 50%;
            width: 50%;
        }
    }
    .menu-left-column {
        width: 62%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 16%;
    }
    .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        width: 28%;
    }
    .menu-logo {
        width: 100%;
    }
    .nav-item {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: $text-color;
        font-family: Montserrat-SemiBold;
        text-align: left;
        font-size: 1.25vw;
        margin-block-end: 0.5em;
        margin-block-start: 0.5em;
    }
    .my-nav {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-self: flex-start;
        margin-bottom: 5%;
    }
    .contacts {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .contacts .a-text {
        margin-left: 0;
    }
    .menu-right-column {
        width: 22%;
        height: 100%;
        border-left: 1px solid #dacfb1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
    }
    .arrow-around {
        margin-left: 15%;
    }
    .menu-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .menu-anim-leave-active {
        animation: going 1s;
    }
    .menu-close {
        margin-top: 35%;
    }

    .lang {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5vh;
    }
    .lang span {
        font-family: $font-element;
        text-transform: uppercase;
        font-size: 1vw;
        letter-spacing: 1px;
        cursor: pointer;
        color: $text-color;
        margin: 5px;
        /*&.laptop {*/
            /*font-size: 26px;*/
        /*}*/
        /*&.tablet {*/
            /*font-size: 22px;*/
        /*}*/
        /*&.mobile {*/
            /*font-size: 20px;*/
        /*}*/
    }
    span.lang-active {
        color: #a37855;
    }
    .lang-divider {
        width: 1px;
        height: 1vh;
        background-color: $text-color;
        margin-bottom: 6px;
        /*&.laptop {*/
            /*height: 8px;*/
        /*}*/
        /*&.tablet {*/
        /*font-size: 22px;*/
        /*}*/
        /*&.mobile {*/
        /*font-size: 20px;*/
        /*}*/
    }
    .nav-item-span {
        width: 11px;
        height: 11px;
        position: relative;
        margin-left: 20px;
        margin-right: 20px;
        display: block;
        transition-property: transform;
        transition-duration: 0.35s;
        transition-timing-function: ease;
    }

    .vertical-line {
        width: 1px;
        height: 11px;
        background: black;
        position: absolute;
        top: 0;
        left: 5px;
        /*animation: vertical-line 0.5s ease;*/
        transition: height 200ms ease;
    }
    @keyframes vertical-line {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
            clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
        }

    }
    .vertical-line-after {
        content: '';
        height: 1px;
        background: #000;
        position: absolute;
        top: 5px;
        left: 5px;
        right: 0;
        width: 1px;
    }
    .horizontal-line {
        width: 11px;
        position: absolute;
        top: 5px;
        height: 1px;
        background-color: black;
    }
    .menu-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .menu-anim-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
        to {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        }

    }
    @keyframes coming {
        from {
            transform: translateX(210px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .nav-item-inner {
        text-transform: none;
        font-family: 'Montserrat-Medium';
        font-size: 0.9vw;
        margin-block-end: 1em;
        margin-block-start:1em;
    }
    .nav-item-inner:hover {
        color: #a37855;
    }
    .developers-column {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fcfcfc;
    }
    .developers {
        width: 100%;
        height: 50%;
        background-color: #fcfcfc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 15%;
    }
    .developers-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .developers .a-text {
        margin: 0;
        line-height: 1.5;
        margin-block-end: 0.5em;
        margin-block-start: 0.5em;
    }
    .developers-name {
        font-family: Montserrat-Medium;
        font-size: 0.8vw;
    }
</style>