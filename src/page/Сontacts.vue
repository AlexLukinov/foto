<template>
    <div class="page contacts-page" :class="$mq">
        <headerWidthBack></headerWidthBack>
        <div class="about-page-block" :class="$mq">
            <div class="content-left m-dn" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
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
                            <button type="submit"
                                    :class="$mq"
                                    @click="showModal = true">
                                Отправить
                            </button>
                            <modal-order v-show="showModal" @close="showModal = false"></modal-order>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right content-right-mobile" :class="$mq">
                <div class="contacts-block-p contacts-block-border jcfe" :class="$mq">
                    <p :class="$mq">АДРЕС<br>
                        г.Севастополь , Пл. Восставших 4, ТК «Новый бульвар».<br>
                        <span class="m-dn" :class="$mq">
                            Для вашего удобства бесплатная гостевая парковка 30"
                        </span>
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">ТЕЛЕФОН<br>
                        + 7 (978) 214 45 05 (Viber,Telegram,WhatsApp)
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">EMAIL<br>
                        buketnoe_buro@mail.ru
                    </p>
                </div>
                <div class="contacts-block-p contacts-block-border" :class="$mq">
                    <p :class="$mq">СОЦИАЛЬНЫЕ СЕТИ</p>
                    <div class="contacts" :class="$mq">
                        <a href="" class="a-text" :class="$mq">Facebook</a>
                        <a href="" class="a-text" :class="$mq">Vk</a>
                        <a href="" class="a-text" :class="$mq">Instagram</a>
                    </div>
                </div>
            </div>
            <div class="see-album-line" :class="$mq">
                <div class="see-album-circle" :class="$mq"></div>
                <div class="album-line" :class="$mq"></div>
                <div class="see-album-circle" :class="$mq"></div>
                <div class="horizontal-divider" :class="$mq"></div>
            </div>
            <div class="slide_line" :class="$mq">
                <span class="slide_line_span">01</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >02</span>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="src/assets/img/arrow-right.png" alt="Буектное бюро">
                <div class="text-element">SCROLL</div>
            </div>
        </div>
        <div class="page-contacts-block-info" :class="$mq">
            <div class="info-column" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Работаем по всему Крыму и за его пределами</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Студия открыта с 9.00 до 18.00
                        (воскресенье выходной)</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p class="block-p-margin-left" :class="$mq">Мы говорим на RUS, ENG, FR <br> языках</p>
                </div>
            </div>
            <div class="info-column" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Всегда на связи по телефону и мессенджерам</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Курьерская доставка. Различные формы оплаты.</p>
                </div>
                <div class="contacts-block-p" :class="$mq">
                    <a href="https://yandex.ru/maps/?um=constructor%3A525bdf82a28509ec10121570025294f295b6324275bb5abaf46f1dc765ba8efa&source=constructorLink">
                        <p id="card" :class="$mq">Смотреть БУКЕТНОЕ БЮРО <br>
                            на карте
                            <span class="arrow-element" :class="$mq">
                            <img src="src/assets/img/arrow-right.png" alt="Букетное бюро">
                        </span>
                        </p>
                    </a>
                </div>
            </div>
            <div class="content-left d-dn" :class="$mq">
                <div class="contacts-block-p" :class="$mq">
                    <p :class="$mq">Не нашли ответ на свой вопрос? Задайте его нам!<br>
                        У вас есть предложение или комментарий к нашей работе? Оставьте<br>свой отзыв!
                    </p>
                </div>
                <div class="contacts-form" :class="$mq">
                    <div class="contacts-input-block input-margin-top" :class="$mq">
                        <div class="modal-input" :class="$mq">
                            <input type="text" :class="$mq" placeholder="Имя">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" :class="$mq" placeholder="Email">
                        </div>
                    </div>
                    <div class="contacts-input-block input-margin-top" :class="$mq">
                        <div class="modal-input" :class="$mq">
                            <input type="text" :class="$mq" placeholder="Телефон">
                        </div>
                        <div class="modal-input" :class="$mq">
                            <input type="email" :class="$mq" placeholder="Город">
                        </div>
                    </div>
                    <div class="contacts-textarea-block" :class="$mq">
                        <textarea rows="10"
                                  cols="30"
                                  name="text"
                                  :class="$mq"
                                  placeholder="Сообщение">
                        </textarea>
                    </div>
                    <div class="contacts-input-block submit-mobile" :class="$mq">
                        <div class="modal-input input-submit" :class="$mq">
                            <button type="submit"
                                    :class="$mq"
                                    @click="showModal = true">
                                Отправить
                            </button>
                            <modal-order v-show="showModal" @close="showModal = false"></modal-order>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-page-block aifs" :class="$mq">
            <div class="media-block" :class="$mq">
                <div class="media-block-columns columns-border-bottom" :class="$mq"></div>
                <div class="media-block-columns" :class="$mq">
                    <h3 :class="$mq">INSTAGRAM</h3>
                    <div class="media-block-line" :class="$mq"></div>
                    <div class="text-element" :class="$mq">@buketnoe_buro</div>
                </div>
                <div class="media-block-columns media-block-photo" :class="$mq">
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
            <div class="slide_line slide_line-media" :class="$mq">
                <span class="slide_line_span">02</span>
                <div class="slide-progress"></div>
                <span class="slide_line_span" >02</span>
            </div>
            <div class="scroll-element" :class="$mq">
                <img src="src/assets/img/arrow-left.png" alt="Буектное бюро">
                <div class="text-element">TO TOP</div>
            </div>
        </div>
        <div class="media-block" :class="$mq">
            <div class="media-block-columns columns-border-top" :class="$mq">
                <img src="src/assets/img/previu.png" :class="$mq" alt="Буектное бюро">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showModal: false,
            };
        },
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
        &.mobile {
            height: auto;
            margin-top: 6vh;
            flex-direction: column;
        }
    }
    .content-right, .content-left {
        width: 40%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: 1px solid #dacfb1;
        &.mobile {
            width: 100%;
            height: auto;
        }
    }
    .content-left {
        &.mobile {
            border: none;
        }
    }
    .content-right-mobile {
        &.mobile {
            padding-top: 8vh;

        }
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
        &.mobile {
            display: none;
        }
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
        &.mobile {
            display: none;
        }
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
        &.mobile {
            width: 70%;
            margin: auto;
        }
    }
    .contacts-block-p p {
        font-size: 1vw;
        &.mobile {
            font-size: 14px;
            text-align: center;
        }
    }
    .contacts-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 75%;
        margin-right: 5%;
        &.mobile {
            height: 320px;
            /*min-height: 70vh;*/
            margin: auto;
            width: 95%;
        }
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
        &.mobile {
           height: 45px;
           align-items: center;
        }
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
        &.mobile {
            font-size: 16px;
        }
    }
    .contacts-textarea-block {
        height: 45%;
        display: flex;
        align-items: flex-end;
        &.mobile {
            width: 101%;
            align-items: center;
            height: 200px;
        }
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
        &.mobile {
            font-size: 16px;
        }
    }
   .input-submit {
        width: 27.5%;
       &.mobile {
           width: 45%;
       }
    }
    .input-submit button {
        width: 100%;
        height: 100%;
        color: #333333;
        border: 1px solid #dacfb1;
        font-size: 1vw;
        &.mobile {
            font-size: 16px;
        }
    }
    .input-submit:hover button {
        color: #997a5f;
    }
    .contacts-block-border {
        border-bottom: 1px solid #dacfb1;
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        &.mobile {
            border: none;
            align-items: center;
            padding: 3%;
        }
    }
    .contacts {
        width: 60%;
        display: flex;
        justify-content: space-between;
        &.mobile {
            width: 100%;
        }
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
        &.mobile {
            height: auto;
            width: 100%;
        }
    }
    .info-column {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &.mobile {
            flex-direction: column;
            width: 100%;
        }
    }
    .info-column .contacts-block-p {
        width: 29%;
        margin-right: 5%;
        &.mobile {
            width: 70%;
            margin: auto;
        }
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
        &.mobile {
            height: 100%;
        }
    }
    .columns-border-bottom {
        height: 10%;
        border-bottom: 1px solid #dacfb1;
        &.mobile {
            display: none;
        }
    }
    .media-block-photo {
        flex-direction: row;
        justify-content: space-between;
        &.mobile {
            width: 120%;
            margin-top: 4vh;
        }
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
        &.mobile {
            margin-top: 5vh;
        }
    }
    .columns-border-top img {
        width: 15%;
        margin: 4%;
        &.mobile {
            width: 35%;
            margin: 3%;
        }
    }
    .slide_line-media {
        top: 25%;
    }
    .media-block-columns h3 {
         font-family: 'HelveticaNeueCyr-Light';
         font-size: 1.5vw;
         letter-spacing: 4px;
        &.mobile {
            font-size: 16px;
        }
     }
    .media-block-columns .text-element {
        font-size: 1.5vw;
        letter-spacing: 2px;
        &.mobile {
            font-size: 16px;
            line-height: 2;
        }
    }
    .aifs {
        align-items: flex-start;
        &.mobile {
            align-items: center;
        }
    }
    .jcfe {
        justify-content: flex-end;
    }
    .d-dn {
        display: none;
        &.mobile {
            display: block;
        }
    }
    .m-dn {
        &.mobile {
            display: none;
        }
    }
    .see-album-line {
        display: none;
        &.mobile {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 110px;
            width: 5px;
            margin-top: 8.5vh;
            position: relative;
        }

    }
    .album-line {
        display: none;
        &.mobile {
            display: flex;
            width: 1px;
            height: 100px;
            background-color: #333333;
        }
    }
    .see-album-circle {
        display: none;
        &.mobile {
            display: flex;
            width: 5px;
            height: 5px;
            border: 1px solid #333333;
            background-color: transparent;
            border-radius: 100%;
        }
    }
    .horizontal-divider {
        display: none;
        &.mobile {
            display: block;
            width: 320px;
            position: absolute;
            height: 1px;
            background-color: #dacfb1;
            margin-top: 2vh;
            margin-bottom: 2vh;
        }
    }
     a #card {
         cursor: pointer;
        &.mobile {
            width: 90%;
            border: 1px solid #dacfb1;
            margin: 7vh auto 7vh auto;
            padding: 5%;
        }
    }
    a #card .arrow-element {
        &.mobile {
            display: none;
        }
    }
    .submit-mobile {
        &.mobile{
            justify-content: flex-end;
            margin-right: -2%;
        }
    }
    .media-block-line {
        display: none;
        &.mobile {
            display: flex;
            height: 1px;
            width: 30px;
            background-color: #333333;
            margin: 2vh;
        }
    }
    .input-margin-top {
        &.mobile {
            margin-top: 8px;
        }
    }
    .block-p-margin-left {
        &.mobile {
            margin-left: 10%;
        }
    }
    button {

    }
</style>