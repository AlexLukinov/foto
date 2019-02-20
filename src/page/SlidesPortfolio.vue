<template>
    <div class="page-slides">
        <div class="image-slides" :class="$mq">
            <transition class="slider-body"
                        name="myanim"
                        mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <img :src="data.slides[currentNumber]" width="100%">
                </div>
            </transition>
        </div>
        <div class="slide-container" :class="$mq">
            <transition name="text-anim" mode="out-in" class="text-anim">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <span class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</span>
                </div>
            </transition>
        </div>
        <div class="button-box" :class="$mq">
            <button class="btn-slide btn-prev" @click="prev">
                Смотреть альбом
            </button>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    // [{slide: , slideText}, {}]
                    slides: [
                        'src/assets/img/bouquet1.jpg',
                        'src/assets/img/bouquet2.jpg',
                        'src/assets/img/bouquet3.jpg',
                        'src/assets/img/bouquet4.jpg'
                    ],
                    slides_text: [
                        'Flowers',
                        'Corporate',
                        'Balerun',
                        'Shmalerun'
                    ]
                },
                currentNumber: 0,
                timer: null
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.slides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.slides.length - 1
                }
            }
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            }
        },
        mounted: function () {
            setInterval(() => {
                this.next();
            }, 5000);
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .page-slides {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 85vh;
        margin-top: 5vh;
        align-items: center;
    }
    span.slides_text {
        font-family: $font-h1;
        font-size: 20vh;
        &.mobile {
            font-size: 20px;
        }
    }
    .image-slides {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
       &.tablet {
            width: 90%;
        }
        &.mobile {
            width: 100%;
        }
    }
    .image-slides:hover {
        filter: none;
    }
    .slide-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 40%;
        height: 50vh;
        &.laptop {
            width: 70%;
            height: 60vh;
        }
        &.tablet {
            width: 90%;
            height: 80vh;
        }
        &.mobile {
            width: 90%;
            height: 100vh;
        }
    }
    .slide-container p {
        width: 80%;
        font-family: $font-text;
        font-size: 16px;
        margin: auto;
        line-height: 1.5;
        &.mobile {
            font-size: 13px;
        }
    }
    .button-box {
        position: absolute;
        top: 76%;
        right: 44%;
        display: flex;
        justify-content: center;
        width: 150px;
        height: 150px;
        border: 1px solid white;
        border-radius: 100%;
        align-items: center;
    }
    .myanim-enter-active {
        animation: myanim ease-in-out 2s;
    }
    .myanim-leave-active {
        animation: myanimout ease-in-out 2s;
    }
    .text-anim-enter-active {
        animation: text-anim ease-in-out 2s;
    }
    .text-anim-leave-active {
        animation: text-anim-out ease-in-out 2s;

    }
    a.slide-a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 250px;
        height: 60px;
        font-family: $font-h2;
        font-size: 16px;
        border: 1px solid white;
        &.tablet, &.mobile {
            width: 160px;
            height: 40px;
        }
    }
    @keyframes myanim {
        0% {
            transform: scale(0.5);
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
        50% {
            transform: scale(0.5);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes myanimout {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.5);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            transform: scale(0.5);
        }
    }
    @keyframes text-anim {
        0% {
            transform: translateX(160%);
        }
        100% {
            transform: translateX(0) scale(1);
        }
    }
    @keyframes text-anim-out {
        0% {
            transform: translateX(0) scale(1);
        }
        100% {
            transform: translateX(-160%);
        }
    }

</style>