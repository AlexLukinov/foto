<template>
    <div class="page about-us_page">
        <div class="about-page-block">
            <headerWidthBack></headerWidthBack>
            <div class="page-slides">
                <transition name="myanim"
                            mode="out-in">
                    <div class="image-slides" :class="$mq">
                        <div class="text-element author-foto" :class="$mq">Ph: Slava Vladzimirskaya</div>
                        <img src="src/assets/img/aboutUs1.jpg">
                    </div>
                </transition>
                <transition name="myanim" mode="out-in">
                    <div class="slides-body" :class="$mq">
                        <div class="name-page">ABOUT</div>
                        <h2 class="slides_text" :class="$mq">Flowers & event design</h2>
                        <h3 class="slides_text_description" :class="$mq">
                            БУКЕТНОЕ БЮРО - команда профессионалов, влюбленных в свое дело и в красоту цветов.
                        </h3>
                        <router-link to="/portfolio" class="nav-link">
                            <span class="nav-link-text">Портфолио</span>
                            <div class="arrow-around arrow-rotate">
                                <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                                <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                            </div>
                        </router-link>
                    </div>
                </transition>
                <div class="slide_line">
                    <span class="slide_line_span">01</span>
                    <div class="slide-progress"></div>
                    <span class="slide_line_span" >05</span>
                </div>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block">
            <div class="content-left">
                <transition name="myanim" mode="out-in">
                    <div class="text-about">About</div>
                </transition>
            </div>
            <div class="content-right">
                <p>Мы стремимся привнести гармонию в жизнь каждого из наших
                    клиентов посредством чудесных букетов и цветочных композиций вне зависимости от их повода.
                </p>
                <p>
                    Cоздаем концептуальные свадебные оформления.
                    Украшаем частные и корпоративные события, мероприятия любого масштаба.
                </p>
                <div class="quote">
                    «Мы влюблены в свое дело и в красоту цветов»
                </div>
                <div class="content-block">
                    <span class="span-text"><a class="nav-link-text" href="#">Ольга Карпова</a> -
                        основатель<br> студии БУКЕТНОЕ БЮРО
                    </span>
                    <router-link to="/contacts" class="nav-link">
                        <span class="nav-link-text">Наши контакты</span>
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="slide_line">
                <span class="slide_line_span">02</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block bcg-image">
            <div class="content-left">
                <p>Мы с особой заботой относимся к развитию  крепких отношений
                    с нашими партнерами в Крыму и за его пределами, а также
                    поставщиками местного и импортного цветка.
                </p>
                <p>
                    Мы предъявляем высокие требования к себе и постоянно совершенствуемся.
                    Внимание к деталям и перфекционизм в исполнении - это о нас.
                </p>
            </div>
            <div class="content-right jcc">
                <p>Ежегодно мы разрабатываем и реализуем ряд уникальных свадебных проектов,
                    презентаций и официальных мероприятий, собираем сотни букетов
                    и цветочных композиций, проводим мастер-классы для детей и взрослых,
                    оформляем отели и офисы.
                </p>
            </div>
                <div class="slide_line">
                    <span class="slide_line_span">03</span>
                    <div class="slide-progress"></div>
                    <span class="slide_line_span" >05</span>
                </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block">
            <div class="content-left">
                <h2 class="caption">
                    Оправдываем ваше доверие
                </h2>
                <div class="content-block about-link">
                    <p class="p-link">
                        БУКЕТНОЕ БЮРО - ежегодный официальный флорист
                        Большого Севастопольского Благотворительного Офицерского бала
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Партнер международной службы доставки цветов FLOWWOW
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Обладатель сертификата Moscow Flower School
                        “II ступень курса свадебных декораторов”
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Участники MK Gregor Lersch /Германия/, Стаса Зубова /Москва/,
                        Лоры Белобровик-Садовской /Белоруссия/ и др.
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="content-right otstup">
                <div class="empty-div">
                    <h2 class="caption">
                        Оправдываем ваше доверие
                    </h2>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Обладатель сертификата ARAIK GALSTYAN<br> Moscow International Floral
                        Design School<br> “Wedding design”
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Партнер международного конкурса красоты «Мисс Ялта» в “Mriya Resort & SPA”
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Нас рекомендует: Международный Свадебный портал Zankyou
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
                <div class="content-block about-link">
                    <p class="p-link">
                        Нас рекомендует: Всероссийский Свадебный портал СВАДЕБНЫЙ ЭКСПЕРТ
                    </p>
                    <router-link to="/contacts" class="nav-link">
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="slide_line">
                <span class="slide_line_span">04</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="about-page-block">
            <div class="content-right">
                <p>Мы известны своим персональным подходом к каждому клиенту,
                    непреклонной приверженностью качеству и верности чувству красоты и эстетики.
                </p>
                <p>
                    Желаете доверить нам Ваш цветочный повод? Свяжитесь с нами прямо сейчас!
                </p>
                <div class="quote">
                    «В день торжества мы были уверены, что нам не о чем беспокоиться»
                </div>
                <div class="content-block">
                    <span class="span-text"><a class="nav-link-text" href="#">Даниил и Анна</a> -
                        жених и невеста, клиенты студии БУКЕТНОЕ БЮРО
                    </span>
                    <router-link to="/contacts" class="nav-link">
                        <span class="nav-link-text">Наши истории</span>
                        <div class="arrow-around arrow-rotate">
                            <img class="arrow arrow-right" src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                            <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="content-left text-why">
                <div class="text-about text-why">Why us?</div>
            </div>
            <div class="slide_line">
                <span class="slide_line_span">05</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >05</span>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-left.png" alt="Буектное бюро">
                <div class="text-element">TO TOP</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .about-us_page {
        background-color: #fcfcfc;
        height: auto;
    }
    .about-page-block {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .page-slides {
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 83vh;
        align-items: center;
    }
    .slides-body {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        justify-content: center;
        /*&.mobile {*/
        /*width: 55%;*/
        /*}*/
    }
    .slides-body>div {
        display: flex;
        align-items: center;
    }
    .slides_text {
        font-size: 6vw;
        text-align: left;
        font-weight: normal;
        width: 83%;
        /*&.mobile {*/
        /*font-size: 30px;*/
        /*}*/
    }
    .slides_text_description {
        margin-bottom: 5%;
        font-family: $font-text;
        width: 80%;
    }
    .image-slides {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 30%;
        margin-left: 10%;
    }
    .image-slides img {
        width: 100%;
        height: auto;
    }
   .image-slides.mobile img {
        width: 100%;
        z-index: -1;
   }
    .author-foto {
        font-size: 0.8vw;
        text-align: left;
        color: #dfcfc0;
        transform: rotate(-90deg);
        width: 5%;
        white-space: nowrap;
        margin-bottom: 1%;
    }
    .nav-link {
        display: flex;
        justify-content: space-between;
        width: 27%;
        align-items: center;
    }
    .nav-link-text {
        color: #997a5f;
        font-family: 'Merriweather-Regular';
        font-size: 1vw;
        letter-spacing: 0;
    }
    .slide_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        position: absolute;
        left: 4%;
        width: 20px;
    }
    .slide-progress {
        z-index: 1;
        width: 1px;
        background-color: #333333;
        height: 72%;
    }
    .slide_line_span {
        font-family: $font-element;
        color: #000000;
        font-size: 1.8vh;
        line-height: 1.5;
        padding: 5px;
    }
    .content-right, .content-left {
        width: 40%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .text-about {
        font-family: 'MinionVariableConcept';
        color: #dacfb1;
        font-size: 11vw;
        margin-top: 5%;
        text-align: left;
    }
    .quote {
        font-family: 'Merriweather-Italic';
        color: #333333;
        font-size: 3vw;
        letter-spacing: 2px;
        text-align: left;
        line-height: 1.5;
        margin-block-end: 0.5em;
        margin-block-start: 0.3em;

    }
    .content-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }
    .span-text {
        width: 53%;
        font-family: 'HelveticaNeueCyr-Light';
        font-size: 1vw;
        text-align: left;
        letter-spacing: 1px;
        line-height: 2;
    }
    .nav-link {
        width: 40%;
    }
    .jcc {
        justify-content: center;
        margin-left: 5%;
    }
    .bcg-image {
        background-image: url('../assets/img/flowerbcg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16%;
    }
    .about-link {
        align-items: flex-end;
    }
    .about-link .nav-link {
        width: 22%;
        justify-content: center;
    }
    .p-link {
        margin: 0;
        width: 78%;
        font-size: 1vw;
    }
    .caption {
        font-weight: normal;
        color: #333333;
        font-size: 3vw;
        letter-spacing: 1px;
        line-height: 1.4;
    }
    .otstup {
        margin-left: 3%;
    }
    .empty-div h2, .empty-div p{
     color: transparent;
    }
    .scroll-element {
        width: 9%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(90deg);
        position: absolute;
        right: 0;
        bottom: 10vh;
        height: max-content;
    }
    .scroll-element img {
        margin-bottom: 4px;
    }
    .scroll-element .text-element {
        color: #000000;
    }
    .text-why {
        margin-left: 2%;
    }
    .text-why .text-about {
        margin-left: 5%;
        font-size: 10vw;
    }
</style>