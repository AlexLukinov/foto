<template>
    <div class="page-slides">
        <transition name="myanim" mode="out-in">
            <div class="slides-body" :class="$mq"
                 v-for="number in [currentNumber]" v-bind:key="number">
                <h2 class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</h2>
                <h3 class="slides_text_description" :class="$mq">{{data.slides_text_description[currentNumber]}}</h3>
            </div>
        </transition>
        <!--<transition name="slider"-->
                    <!--mode="out-in"-->
                    <!--enter-active-class="animated fadeInRight"-->
                    <!--leave-active-class="animated fadeOut">-->
            <!--<div class="image-slides" :class="$mq"-->
                 <!--v-for="number in [currentNumber]" v-bind:key="number">-->
                <!--<img :src="data.slides[currentNumber]" class="jopa">-->
            <!--</div>-->
        <!--</transition>-->
        <vgl-renderer antialias class="render">
            <vgl-scene>
                <vgl-texture name="tex" src="src/assets/img/Gemma_chair_Baxter_2018/Gemma_chair_Baxter_obj.obj"></vgl-texture>
                <vgl-object3d src="src/assets/img/Gemma_chair_Baxter_2018/Gemma_chair_Baxter_obj.obj">                              >
                </vgl-object3d>
                <vgl-material src="src/assets/img/Gemma_chair_Baxter_2018/Gemma_chair_Baxter_obj.mtl"></vgl-material>
                <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
                <vgl-directional-light position="0 1 2"></vgl-directional-light>
            </vgl-scene>
            <vgl-perspective-camera
                    fov="75"
                    far="10000"
                    orbit-position="10 1 0.5">
            </vgl-perspective-camera>
        </vgl-renderer>
        <div class="button-box" :class="$mq">
            <button class="btn-slide btn-prev" @click="prev" :class="$mq">
                <i class="fas fa-angle-left"></i>
            </button>
            <button class="btn-slide btn-next" @click="next" :class="$mq">
                <i class="fas fa-angle-right"></i>
            </button>
        </div>

        <!--<div class="slide_line">-->
        <!--<span>{{currentNumber + 1}}</span>-->
        <!--<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="5px" >-->
        <!--<line x1="0" y1="10" stroke="black" v-bind:stroke-width="[strokeWidth]"></line>-->
        <!--</svg>-->
        <!--<span>{{this.data.slides.length}}</span>-->
        <!--</div>-->

    </div>
</template>
<script>
    import VglObject3d from "vue-gl/src/core/vgl-object3d";
    export default {
        components: {VglObject3d},
        data() {
            return {
                data: {
                    slides: [
                        'src/assets/img/vase.png',
                        'src/assets/img/pen.png',
                        'src/assets/img/hand.png',
                        'src/assets/img/pen.png'
                    ],
                    slides_text: [
                        'дизайн',
                        'разработка',
                        'продвижение',
                        'поддержка'
                    ],
                    slides_text_description: [
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj'
                    ]
                },
                currentNumber: 0,
                timer: null,
                activeLiIndex: null
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.slides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }

                this.animateImg();
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.slides.length - 1
                }

                this.animateImg();
            },
            animateImg: function () {
                this.$anime({
                    targets: '.image-slides',
                    scale: [
                        {value: .1, easing: 'easeOutSine', duration: 500},
                        {value: 1, easing: 'easeInOutQuad', duration: 1200}
                    ],
                    delay: this.$anime.stagger(200, {grid: [14, 5], from: 'center'})
                });
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

            this.animateImg();
        }
    }


</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .render {
        width: 100%;
        height: 100vh;
        position: absolute;
    }
    .page-slides {
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 80vh;
        align-items: center;
        margin-top: 5vh;
    }
    .slides-body {
        width: 40%;
        &.mobile {
            width: 55%;
        }
    }
    .slides-body>div {
        display: flex;
        align-items: center;
    }
    .slides_text {
        font-size: 6.5vh;
        font-weight: bold;
        text-transform: capitalize;
        text-align: left;
        &.mobile {
            font-size: 30px;
        }
    }
    .image-slides {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
    }
    .slider-nav {
        width: 40%;
        height: 70%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .slider-nav ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65%;
    }
    .image-slides.mobile img {
        width: 100%;
        z-index: -1;
    }
    .button-box {
        position: absolute;
        top: 80%;
        right: 13%;
        display: flex;
        justify-content: space-between;
        width: 150px;
        &.mobile {
            width: 100px;
        }
    }
    .btn-slide {
        background-color: #242135;
        width: 60px;
        height: 60px;
        transition: all 1s ease;
        &.mobile {
            width: 45px;
            height: 45px;
        }
    }
    .btn-slide:hover {
        background-color: #9e0760;
    }
    .slide_line {
        position: absolute;
        bottom: 10vh;
        left: 22%;
    }
    .myanim-enter-active {
        animation: myanim ease 1s;
    }
    .myanim-leave-active {
        animation: myanimout ease 1s;
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
    .roll-enter-active {
        transform: scale(0.5);
    }
    .roll-leave-active {
        transform: scale(0);
    }
    .active {
        background-color: palegreen;
    }


</style>