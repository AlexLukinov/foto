<template>
    <div class="page info_page">
        <headerWidthBack></headerWidthBack>
        <div v-if="isPortfolio" class="info-block">sadfasdf</div>
        <div v-if="isFlowers" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Букеты & композиции.</h2>
                <div class="info-text-block">
                    <h3>УДОБНЫЕ ФОРМЫ ОПЛАТЫ</h3>
                    <div class="info-ul">
                        - наличными у нас в студии<br>
                        - безналичный расчет на расчетный счет юридического лица<br>
                        - банковской картой при оформлении заказа через сайт/по телефону
                    </div>
                </div>
            </div>
            <div class="info-content-right">
                <div class="info-ul">
                    Профессионально собираем и бережно доставляем букет по любому поводу:<br>
                    - авторский<br>
                    - поздравительный<br>
                    - мужской<br>
                    - бизнес букет<br>
                    - праздничный<br>
                    - школьный/студенческий<br>
                    - новогодний<br>
                    - в корзине, коробке или ящике<br>
                    Только свежие цветы, только стильная упаковка
                </div>
            </div>
        </div>
        <div v-if="isWeddings" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Свадебная
                    флористика & декор</h2>
                <div class="info-text-block">
                    <h3>СВАДЕБНЫЙ БУКЕТ</h3>
                    <div class="info-ul info-ul-margin-bottom">
                        Хотите красивый букет, который идеально подойдет к Вашему свадебному образу?
                    </div>
                    <div class="info-ul">
                        Будем рады собрать для Вас любой: от классического до авангардного,
                        от небольшого до внушительных размеров, от моно
                        до букета со сложным экзотическим составом.
                    </div>
                </div>
            </div>
            <div class="info-content-right">
                <div class="info-text-block">
                    <h3>ОФОРМЛЕНИЕ СВАДЬБЫ</h3>
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Оформим элегантно и стильно, со вкусом и в деталях Вашу свадьбу.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Будь то небольшое торжество в семейном кругу или грандиозный праздник на 500 гостей, наша команда пройдет с Вами все этапы подготовки: от первой палитры вдохновения до финальной  реализации на площадке.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Каждый запрос будет рассмотрен с одинаково творческим подходом, вниманием к деталям и воплощением в жизнь.
                </div>
                <div class="info-ul">
                    Возможно дистанционное согласование.
                </div>
            </div>
        </div>
        <div v-if="isEvents" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Оформление мероприятий</h2>
            </div>
            <div class="info-content-right">
                <div class="info-ul info-ul-margin-bottom">
                    Оформим «под ключ» мероприятие любого масштаба семейного и корпоративного формата:
                    - крестины<br>
                    - юбилей<br>
                    - частное мероприятие<br>
                    - презентацию<br>
                    - выставку<br>
                    - конференцию<br>
                    - торжественный прием.
                </div>
                <div class="info-ul">
                    Индивидуальный дизайн, заключение договора,
                    предоставление всех закрывающих документов, оперативное взаимодействие.
                </div>
            </div>
        </div>
        <div v-if="isCorporate" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Отели & корпоративные клиенты</h2>
            </div>
            <div class="info-content-right">
                <div class="info-ul info-ul-margin-bottom">
                    Сделаем флористику, отражающую Ваш стиль.
                    Украсим холл, ресепшен, ресторан отеля.
                    Оформим офисное пространство и переговорную  зону.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                По звонку соберем и оперативно доставим качественный букет  для Ваших гостей, постояльцев, сотрудников, коллег, партнеров.
                </div>
                <div class="info-ul">
                    Заключаем договор на корпоративное обслуживание.
                </div>
            </div>
        </div>
        <div v-if="isFuneral" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Ритуальная флористика</h2>
            </div>
            <div class="info-content-right">
                <div class="info-ul info-ul-margin-bottom">
                    Выразить свои соболезнования и почтить память ушедших людей цветами – это установленная временем серьезная традиция.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Мы ценим желание клиентов украсить прощание с близкими и дорогими им людьми.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    В этот печальный момент мы максимально упростим для Вас выбор, заказ и доставку цветов (венка, букета, композиции, корзины с цветами).
                </div>
                <div class="info-ul">
                    Если Вы находитесь за пределами Крыма, мы позаботимся о доставке цветов от Вашего имени.
                </div>
            </div>
        </div>
        <div v-if="isWorkshops" class="info-block">
            <div class="info-content-left">
                <h2 class="info-h2">Мастер-классы</h2>
            </div>
            <div class="info-content-right">
                <div class="info-ul info-ul-margin-bottom">
                    От веночка из живых цветов до собранного своими руками букета, от свадебного украшения  до настольной композиции – мы предлагаем мастер-классы на любой вкус.
                    Более того, мы разработаем программу мастер-класса специально для Вас!
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Для детей и друзей, индивидуальные и корпоративные –
                    наши комфортные и вдохновляющие цветочные мастер-классы для Вас.
                </div>
                <div class="info-ul info-ul-margin-bottom">
                    Занятия проходят у нас в студии в центре Севастополя либо возможен выезд на Вашу площадку.
                </div>
                <div class="info-ul">
                    Запросы присылайте на нашу почту buketnoe_buro@mail.ru
                </div>
            </div>
        </div>
        <div class="scroll-element">
            <div class="arrow-around arrow-rotate" @click="toggleIsActive('developers')">
                <img class="around" src="src/assets/img/around.png" alt="Буектное бюро">
                <img class="arrow arrow-left" src="src/assets/img/arrow-left.png" alt="Буектное бюро">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isPortfolio: false,
                isFlowers: false,
                isWeddings: false,
                isEvents: false,
                isCorporate: false,
                isFuneral: false,
                isWorkshops: false
            };
        },
        methods: {
            makeAllFalse: function () {
                this.isPortfolio = false;
                this.isFlowers = false;
                this.isWeddings = false;
                this.isEvents = false;
                this.isCorporate = false;
                this.isFuneral = false;
                this.isWorkshops = false;
            }
        },
        mounted() {
            EventBus.$on('SLIDE_CHANGED', slideNumber => {
                this.makeAllFalse();

                switch (slideNumber) {
                    case 0: this.isPortfolio = true;
                        break;
                    case 1: this.isFlowers = true;
                        break;
                    case 2: this.isWeddings = true;
                        break;
                    case 3: this.isEvents = true;
                        break;
                    case 4: this.isCorporate = true;
                        break;
                    case 5: this.isFuneral = true;
                        break;
                    case 6: this.isWorkshops = true;
                        break;
                    default: this.isPortfolio = true;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .info_page {
        background-color: #fcfcfc;
        z-index: 10;
        height: 100vh;
        position: fixed;
        top: 0;
    }
    .info-block {
        position: relative;
        width: 80%;
        height: 80vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info-content-right, .info-content-left {
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .info-content-left {
        width: 40%;
        border-right: 1px solid #dacfb1;
    }
    .info-content-right {
        justify-content: flex-end;
    }
    .content-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }
    .info-h2 {
        font-size: 3vw;
        font-weight: normal;
        color: #333333;
        letter-spacing: 1px;
        margin: 0;
        width: 70%;
    }
    .info-text-block h3 {
        font-family: 'HelveticaNeueCyr-Light';
        color: #997a5f;
        letter-spacing: 2px;
    }
    .info-ul{
        text-align: left;
        line-height: 2.2;
        font-family: 'HelveticaNeueCyr-Light';
        color: #333333;
        letter-spacing: 1px;
        font-size: 1.08vw;
        width: 85%;
    }
    .scroll-element {
        width: 11%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(180deg);
        position: absolute;
        right: 0;
        bottom: 7vh;
        height: max-content;
    }
    .info-ul-margin-bottom {
        margin-bottom: 2.5vh;
    }
</style>