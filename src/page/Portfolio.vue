<template>
    <div class="page portfolio_page">
        <headerWidthBack></headerWidthBack>
        <div class="horizontal-divider" :class="$mq"></div>
        <slidesPortfolio></slidesPortfolio>
        <div class="media-block-columns columns-border-top" :class="$mq">
            <img src="src/assets/img/previu.png" :class="$mq" alt="Буектное бюро">
        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return{}
        }

    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .portfolio_page {
        overflow: hidden;
        height: auto;
    }
    .media-block-columns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85%;
        height: 30%;
        &.mobile {
            height: 100%;
        }
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
    .horizontal-divider {
        display: none;
        &.mobile {
            display: block;
            width: 111%;
            margin-top: 7vh;
            margin-bottom: 2vh;
            height: 1px;
            background-color: #dacfb1;
        }
    }
</style>
