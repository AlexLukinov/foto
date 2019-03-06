<template>
    <div class="page contacts-page" :class="$mq">
        <headerWidthBack></headerWidthBack>
        <div class="about-page-block">
            <div class="content-left">
                <div class="contacts-block-p">
                    <p>Не нашли ответ на свой вопрос? Задайте его нам!<br>
                        У вас есть предложение или комментарий к нашей работе? Оставьте<br>свой отзыв!
                    </p>
                </div>
                <div class="contacts-form">
                    <div class="contacts-input-block">
                        <div class="modal-input" :class="$mq">
                            <input type="text" placeholder="Имя">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="contacts-input-block">
                        <div class="modal-input" :class="$mq">
                            <input type="text" placeholder="Телефон">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" placeholder="Город">
                        </div>
                    </div>
                    <div class="contacts-textarea-block">
                        <textarea rows="10" cols="45" name="text" placeholder="Сообщение"></textarea>
                    </div>
                    <div class="contacts-input-block">
                        <div class="modal-input input-submit" :class="$mq">
                            <input type="submit" placeholder="Отправить">
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="contacts-block-p contacts-block-border jcfe">
                    <p>АДРЕС<br>
                        г.Севастополь , Пл. Восставших 4, ТК «Новый бульвар».<br>
                        Для вашего удобства бесплатная гостевая парковка 30"
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border">
                    <p>ТЕЛЕФОН<br>
                        + 7 (978) 214 45 05 (Viber,Telegram,WhatsApp)
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border">
                    <p>EMAIL<br>
                        buketnoe_buro@mail.ru
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border">
                    <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                    <div class="contacts">
                        <a href="" class="a-text" :class="$mq">Facebook</a>
                        <a href="" class="a-text" :class="$mq">Vk</a>
                        <a href="" class="a-text" :class="$mq">Instagram</a>
                    </div>
                </div>
            </div>
            <div class="slide_line">
                <span class="slide_line_span">01</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >02</span>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="page-contacts-block-info">
            <div class="info-column">
                <div class="contacts-block-p">
                    <p>Работаем по всему Крыму и за его пределами</p>
                </div>
                <div class="contacts-block-p">
                    <p>Студия открыта с 9.00 до 18.00
                        (воскресенье выходной)</p>
                </div>
                <div class="contacts-block-p">
                    <p>Мы говорим на RUS, ENG, FR <br> языках</p>
                </div>
            </div>
            <div class="info-column">
                <div class="contacts-block-p">
                    <p>Всегда на связи по телефону и мессенджерам</p>
                </div>
                <div class="contacts-block-p">
                    <p>Курьерская доставка. Различные формы оплаты.</p>
                </div>
                <div class="contacts-block-p">
                    <p>Смотреть БУКЕТНОЕ БЮРО <br>
                        на карте
                        <span class="arrow-element">
                            <img src="src/assets/img/arrow-right.png" alt="Букетное бюро">
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="about-page-block aifs">
            <div class="media-block">
                <div class="media-block-columns columns-border-bottom"></div>
                <div class="media-block-columns">
                    <h3>INSTAGRAM</h3>
                    <div class="text-element">@buketnoe_buro</div>
                </div>
                <div class="media-block-columns media-block-photo">
                    <div class="photo-container">
                        <a href="#" class="photo-a">
                            <img src="src/assets/img/instagram-photo1.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="#" class="photo-a">
                            <img src="src/assets/img/instagram-photo2.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="#" class="photo-a">
                            <img src="src/assets/img/instagram-photo3.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                    <div class="photo-container">
                        <a href="#" class="photo-a">
                            <img src="src/assets/img/instagram-photo4.jpg" alt="@buketnoe_buro">
                        </a>
                        <div class="eye-open">
                            <img src="src/assets/img/eye-open.png" alt="@buketnoe_buro">
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide_line slide_line-media">
                <span class="slide_line_span">02</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >02</span>
            </div>
            <div class="scroll-element">
                <img src="src/assets/img/arrow-left.png" alt="Буектное бюро">
                <div class="text-element">TO TOP</div>
            </div>
        </div>
        <div class="media-block">
            <div class="media-block-columns columns-border-top">
                <img src="src/assets/img/previu.png" alt="Буектное бюро">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .contacts-page {
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
    .content-right, .content-left {
        width: 40%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 1px solid #dacfb1;
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
    .contacts-block-p {
        height: 25%;
        display: flex;
        align-items: flex-end;
    }
    .contacts-block-p p {
        font-size: 1vw;
    }
    .contacts-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 75%;
        margin-right: 5%;
    }
    .contacts-input-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 16%;
    }
    .modal-input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 45%;
        height: 80%;
        /*&.mobile {*/
            /*width: 80%;*/
        /*}*/
    }
    .modal-input input {
        width: 95.5%;
        height: 100%;
        border: 1px solid #dacfb1;
        font-size: 1vw;
        padding-left: 10px;
        font-family: $font-text;
        background-color: transparent;
        color: #333333;
    }
    .contacts-textarea-block {
        height: 45%;
        display: flex;
        align-items: flex-end;
    }
    textarea {
        outline: none;
        background-color: transparent;
        width: 100%;
        height: 85%;
        border: 1px solid #dacfb1;
        color:#333333;
        padding-left: 10px;
        line-height: 3;
        font-family: 'HelveticaNeueCyr-Light';
        font-size: 0.9vw;
    }
   .input-submit {
        width: 27.5%;
    }
    .input-submit input {
        color: #997a5f;
    }
    .contacts-block-border {
        border-bottom: 1px solid #dacfb1;
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .contacts {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }
    .contacts .a-text {
        margin-left: 0;
        font-family: $font-text;
    }
    .page-contacts-block-info {
        height: 25vh;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .info-column {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .info-column .contacts-block-p {
        width: 29%;
        margin-right: 5%;
    }
    .arrow-element img {
        margin-left: 4px;
        margin-bottom: 2px;
    }
    .media-block {
        width: 80%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .media-block-columns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30%;
    }
    .columns-border-bottom {
        height: 10%;
        border-bottom: 1px solid #dacfb1;
    }
    .media-block-photo {
        flex-direction: row;
        justify-content: space-between;
    }
    .photo-container {
        position: relative;
        width: 23%;
        height: auto;
    }
    .photo-container .photo-a img {
        width: 100%;
    }
    .eye-open {
        position: absolute;
        top: 40%;
        left: 45%;
        width: 60px;
        height: 60px;
        background-color: #ffffff;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        display: none;
        opacity: 0;
        transition: all 1s linear;
    }
    .eye-open img {

        width: 60%;
    }
    .photo-container:hover .eye-open {
        display: flex;
        opacity: 0.7;
        transition: all 1s linear;
    }
    .columns-border-top {
        border-top: 1px solid #dacfb1;
    }
    .columns-border-top img {
        width: 15%;
        margin: 4%;
    }
    .slide_line-media {
        top: 25%;
    }
    .media-block-columns h3 {
         font-family: 'HelveticaNeueCyr-Light';
         font-size: 1.5vw;
         letter-spacing: 4px;
     }
    .media-block-columns .text-element {
        font-size: 1.5vw;
        letter-spacing: 2px;
    }
    .aifs {
        align-items: flex-start;
    }
    .jcfe {
        justify-content: flex-end;
    }
</style>