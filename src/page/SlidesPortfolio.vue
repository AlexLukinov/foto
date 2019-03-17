<template>
    <div class="page-slides" v-for="number in [currentNumber]" v-bind:key="number">
        <h3>Весь каталог наших работ</h3>
        <div class="image-slides" :class="$mq">
            <transition class="slider-body" name="myanim" mode="out-in">
                <div v-for="(photo, i) in data.portfolioSlides[0].photos" v-bind:key="number">
                    <img :src="data.slides[currentNumber]" width="100%">
                </div>
            </transition>
        </div>
        <div class="slide-container" :class="$mq">
            <transition name="text-anim" mode="out-in">
                <div >
                    <span class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</span>
              </div>
            </transition>
        </div>
        <div class="arrow-box" :class="$mq">
            <div class="arrow-around arrow-rotate" @click="prev">
                <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                <img class="arrow arrow-left" src="src/assets/img/arrow-left.png" alt="Буектное бюро">
            </div>
            <div class="arrow-around arrow-rotate" @click="next">
                <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
            </div>
        </div>
        <div class="portfolio-footer">
            <div class="text-element"><span class="pagination-slide">01</span>/07</div>
            <div class="info text-element">INFO</div>
        </div>
        <div class="see-album">
            <button class="text-element">
                СМОТРЕТЬ<br>АЛЬБОМ
            </button>
            <div class="see-album-line">
                <div class="see-album-circle"></div>
                <div class="album-line"></div>
                <div class="see-album-circle"></div>
            </div>
        </div>
        <h3 class="portfolio-h3 h3-border-bottom">ВЕСЬ КАТАЛОГ НАШИХ РАБОТ</h3>
        <div class="gallery" id="gallery-portfolio">
            <div class="image" v-for="(photo, i) in data.portfolioSlides[0].photos">
                <img :src="photo.src" @click="onClick(i)">
                <div class="catalog-name">{{photo.catalog}}</div>
                <div class="photo-name">{{photo.name}}</div>
            </div>
            <!--<vue-gallery-slideshow :images="data.images" :index="data.index" @close="data.index = null"></vue-gallery-slideshow>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    portfolioSlides: [
                        {
                            header: {
                                photo: 'src/assets/img/portfolio-slider1.jpg',
                                backgroundText: 'Portfolio'
                            },
                            photos: [
                                {
                                    src: 'src/assets/img/portfolio-gallery/1.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Иван & Даша. Балаклавский Эдем'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/2.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Коктебель'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/3.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Осеннее вдохновение'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/4.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Съемка для каталога свадебного салона  Marylin. Отель Превысоковъ'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/5.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Ольга. Оттенки багряного'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/6.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Анастасия. Silk & gold'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/7.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Валерий & Надежда. Новый Свет'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/8.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Александр & Валерия. Алые паруса'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/9.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Александра. Английский сад'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/10.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Композиции. Подборка'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/11.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Лебединая песнь'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/12.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Слава. Snowball'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/13.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Дарья. Партенит'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/14.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дарья & Юрий. Артиллерийская бухта'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/15.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Андрей & Мила. Форос'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/16.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'День Рождения. Южная терраса'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/17.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Закрытая презентация тихих вин «АртВин»'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/18.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Запуск кометы. Морпорт'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/19.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Даниил & Анна. Свадьба в яблоневом саду'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/20.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Николай & Снежана. Долина Гор'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/21.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Олег & Евгения. Цитрусовая свадьба'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/22.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Севастопольский бал'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/23.jpg',
                                    catalog: 'ОФОРМЛЕНИЕ МЕРОПРИЯТИЙ',
                                    name: 'Открытие салона «Галерея интерьера»'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/24.jpg',
                                    catalog: 'РИТУАЛЬНАЯ ФЛОРИСТИКА',
                                    name: '???'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/25.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Мария. Bohemian morning'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/26.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Наталья. Sweet peony'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/27.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Диляна. Wild & gentle.'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/28.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом УЗУНДЖА. Новогоднее оформление'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/29.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  '???'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/30.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Гостевой дом «VoyageSV». Новогоднее оформление'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/31.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Вадим & Анастасия'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/32.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Владимир & Олеся. Крымская Ривьера'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/33.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дмитрий & Яна. Воронцовский дворец'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/34.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Дарья & Даниил. Кружево'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/35.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Иван & Юлия. Power of love'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/36.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Ольга. Где ты, там я'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/37.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букет невесты. Подборка'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/38.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Букеты. Подборка'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/39.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Татьяна. Вместе навсегда'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/40.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Антон & Елена. Одной дорогой'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/41.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Павел & Юлия. Ялта'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/42.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Константин & Юлия. Меллас'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/43.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name:  'Алексей & Яна. Александрия'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/44.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Мария. Hidden Garden'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/45.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Сергей & Валерия. Полотна гобелена'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/46.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Евгений & Наталья. Юсуповский дворец'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/47.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Алена & Виталий. Озеро грез'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/48.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Игорь & Татьяна. Балаклава'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/49.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Aquamarine Resort & SPA'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/50.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Sevastopol Hotel & SPA'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/51.jpg',
                                    catalog: 'ОТЕЛИ И КОРПОРАТИВНЫЕ КЛИЕНТЫ',
                                    name:  'Открытие «Russian Beauty Academy» копия'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/51.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Рождественская и новогодняя флористика'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/51.jpg',
                                    catalog: 'МАСТЕР-КЛАССЫ',
                                    name:  '???'
                                }

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                        {
                            header: {
                                photo: 'src/assets/img/portfolio-slider2.jpg',
                                backgroundText: 'Flowers'
                            },
                            photos: [
                                {
                                    src: 'src/assets/img/flowers-gallery/1.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Иван & Даша. Балаклавский Эдем'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/2.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Коктебель'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/3.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Виктория. Осеннее вдохновение'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/4.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Съемка для каталога свадебного салона  Marylin. Отель Превысоковъ'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/5.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name: 'Ольга. Оттенки багряного'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/6.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Анастасия. Silk & gold'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/7.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Валерий & Надежда. Новый Свет'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/8.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Александр & Валерия. Алые паруса'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/9.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Александра. Английский сад'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/10.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Композиции. Подборка'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/11.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Лебединая песнь'
                                },
                                {
                                    src: 'src/assets/img/flowers-gallery/12.jpg',
                                    catalog: 'БУКЕТЫ И КОМПОЗИЦИИ',
                                    name:  'Слава. Snowball'
                                },
                                {
                                    src: 'src/assets/img/portfolio-gallery/13.jpg',
                                    catalog: 'СВАДЕБНАЯ ФЛОРИСТИКА И ДЕКОР',
                                    name: 'Дмитрий & Дарья. Партенит'
                                }

                            ],
                            info: {
                                header: 'header text',
                                mainText: 'main text',
                            }
                        },
                    ],
                    slides: [
                        'src/assets/img/portfolio-slider1.jpg',
                        'src/assets/img/portfolio-slider2.jpg',
                        'src/assets/img/portfolio-slider3.jpg',
                        'src/assets/img/portfolio-slider4.jpg',
                        'src/assets/img/portfolio-slider4.jpg',
                        'src/assets/img/portfolio-slider4.jpg',
                        'src/assets/img/portfolio-slider4.jpg'
                    ],
                    slides_text: [
                        'Portfolio',
                        'Flowers',
                        'Weddings',
                        'Events',
                        'Corporate',
                        'Funeral',
                        'Workshops'

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
        flex-direction: column;
        justify-content: space-around;
        width: 90%;
        height: 90vh;
        margin-top: 10vh;
        align-items: center;
        position: relative;
    }
    .page-slides h3 {
        font-family: HelveticaNeueCyr-Light;
        font-size: 0.9vw;
        color: #333333;
    }
    span.slides_text {
        font-family: 'MinionVariableConcept';
        font-size: 18.5vw;
        color: #dacfb1;
    }
    .image-slides {
        display: flex;
        justify-content: center;
        width: 27%;
        overflow: hidden;
        margin-top: 2vh;
        transition: all 0.3s ease;
    }
    .image-slides img {
        width: 100%;
    }
    .slide-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        z-index: -1;
    }
    .slide-container::before {
        content: '';
        transform: translateX(-50%);
    }

    /*.btn-slide {*/
        /*border: 1px solid white;*/
        /*z-index: 1;*/
        /*top: 0;*/
        /*width: 50px;*/
        /*height: 50px;*/
    /*}*/
    .arrow-box {
        position: absolute;
        top: 43%;
        right: 5%;
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
    .myanim-enter-active {
        animation: myanim cubic-bezier(1.0, 0.6, 0.9, 1.0) 1s;
    }
    .myanim-leave-active {
        animation: myanimout cubic-bezier(1.0, 0.6, 0.9, 1.0) 1s;
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
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    @keyframes myanimout {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
    }
    @keyframes text-anim {
       0% {

       }

    }
    .pageanim-enter-active {
        animation: pageanim ease 1s;
    }
    .pageanim-leave-active {
        animation: pageanimout ease 1s;
    }

    .portfolio-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20vh;
    }
    .see-album {
        position: absolute;
        top: 74%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 20%;
        height: auto;
    }
   .see-album button {
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 1px solid #dacfb1;
       font-size: 14px;
    }
    .see-album-line {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 5px;
        margin-top: -20px;
    }
    .album-line {
        width: 1px;
        height: 100px;
        background-color: #333333;
    }
    .see-album-circle {
        width: 5px;
        height: 5px;
        border: 1px solid #333333;
        background-color: transparent;
        border-radius: 100%;
    }
    .pagination-slide {
        color: #997a5f;
    }
    .image {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-size: contain;
        cursor: pointer;
        width: 30%;
    }
    .image img {
        width: 100%;
        margin: 1%;
    }
    .gallery {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: auto;
        width: 80%;
        height: auto;
    }
    .catalog-name {
        text-transform: uppercase;
        font-family: 'HelveticaNeueCyr-Roman';
        font-size: 0.85vw;
        letter-spacing: 1px;
        color: #666666;
    }
    .photo-name {
        font-family: 'Merriweather-Regular';
        font-size: 1.2vw;
        color: #333333;
    }
    .portfolio-h3 {
        border-bottom: 1px solid;
        padding: 10vh;
        margin-top: 11vh;
        margin-bottom: 10vh;
        width: 70%;
        text-align: center;
    }
    .h3-border-bottom {
        border-bottom: 1px solid #dacfb1;
    }
</style>