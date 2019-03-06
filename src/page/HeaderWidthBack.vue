<template>
    <div class="header" :class="$mq">
        <div  class="text-element" :class="$mq">
            BACK
        </div>
        <router-link to="/" class="logo-wrap">
            <img class="logo" src="src/assets/img/logo.png" alt="Букетное бюро">
        </router-link>
            <div class="menu-icon">
                <div class="toggleTopMenu">
                        <div class="main-item menu text-element"
                             @click="showTopMenu = !showTopMenu" v-if="!showTopMenu" :class="$mq">
                           MENU
                        </div>
                </div>
            </div>
        <my-menu v-show="showTopMenu"></my-menu>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                showTopMenu: false,
            };
        },
        methods: {
            onCloseClicked: function () {
                this.showTopMenu = false;
                this.$router.go(-1);
            }
        },
        watch:{
            $route (to, from){
                if (to.path != '/menu') {
                    this.showTopMenu = false;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .header {
        z-index: 3;
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 10vh;
        color: white;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 3vh;
        left: 5%;
        &.mobile {
            height: 5vh;
         }
    }
    .menu-icon {
        z-index: 10;
    }
    .main-item {
        cursor: pointer;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: flex-end;
        &.laptop, &.tablet {
            width: 40px;
            height: 19px;
        }
        &.mobile {
            width: 30px;
            height: 17px;
        }
    }

    .line {
        height: 4px;
        width: 45px;
        background: white;
        &.laptop, &.tablet {
            width: 40px;
            height: 3px;
        }
        &.mobile {
            width: 30px;
            height: 3px;
        }
    }
    .line1-rotate {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
    }
    .line2-rotate {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
    }
    .main-item-close {
        justify-content: center;
        align-items: center;
    }
    a.logo {
        font-family: $font-h1;
        font-size: 4vh;
        color: white;
        &.laptop, &.tablet {
            font-size: 3.5vh;
        }
        &.mobile {
            font-size: 3vh;
        }
    }
</style>