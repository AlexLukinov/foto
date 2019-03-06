<template>
    <div class="page-slides">
        <div class="image-slides" :class="$mq">
            <transition class="slider-body" name="myanim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <img :src="data.slides[currentNumber]" width="100%">
                </div>
            </transition>
        </div>
        <div class="slide-container" :class="$mq">
            <transition name="text-anim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <span class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</span>
              </div>
            </transition>
        </div>
        <div class="button-box" :class="$mq">
            <button class="btn-slide btn-prev" @click="prev">
                <i class="fas fa-angle-left"></i>
            </button>
            <button class="btn-slide btn-next" @click="next">
                <i class="fas fa-angle-right"></i>
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    slides: [
                        'src/assets/img/portfolio-slider1.jpg',
                        'src/assets/img/portfolio-slider2.jpg',
                    ],
                    slides_text: [
                        'Flowers',
                        'Weddings',
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
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .page-slides {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 85vh;
        margin-top: 5vh;
        align-items: center;
        position: relative;
    }
    span.slides_text {
        font-family: $font-h2;
        font-size: 15vw;
    }
    .image-slides {
        display: flex;
        justify-content: center;
        width: 40%;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    .image-slides img {
        width: 65%;
    }
    .slide-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        z-index: -1;
    }

    .btn-slide {
        border: 1px solid white;
        z-index: 1;
        top: 0;
        width: 50px;
        height: 50px;
    }
    .button-box {
        position: absolute;
        top: 90%;
        right: 10%;
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    .myanim-enter-active {
        animation: myanim ease 1s;
    }
    .myanim-leave-active {
        animation: myanimout ease 1s;
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
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    @keyframes myanimout {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
    }
    .pageanim-enter-active {
        animation: pageanim ease 1s;
    }
    .pageanim-leave-active {
        animation: pageanimout ease 1s;
    }


</style>