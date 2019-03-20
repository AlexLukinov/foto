<template>
    <div class="page info_page">
        <headerWidthBack></headerWidthBack>
        <div class="info-block">
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
            };
        },
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
        height: 70%;
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
        font-size: 3.2vw;
        font-weight: normal;
        color: #333333;
        letter-spacing: 1px;
        margin: 0;
    }
    .info-content-left h3 {
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
        font-size: 1.1vw;
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
</style>