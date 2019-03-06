<template>
    <div class="page blog-page">
        <canvas style="height: 100%;width: 100%;" ref="threejs"></canvas>
        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">07/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">blog</div>
        </div>
    </div>
</template>
<script>


    export default {

    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .blog-page {
        flex-direction: row;
     }
    .post-container {
        width: 90%;
        height: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-img {
        width: 50%;
        overflow: hidden;
    }
    .post-img img {
        width: 100%;
    }
    .post {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40%;
        align-items: flex-start;
    }
    .blog-text {
        font-family: $font-h2;
        font-size: 2.5vh;
    }
    .page-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        color: white;
        position: absolute;
        top: 48%;
        right: 5%;
    }
    .page-nav-number {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    span.number-big {
        font-family: $font-h2;
        font-size: 50px;
        line-height: 1;
        &.mobile {
            font-size: 30px;
        }
    }
    span.number-small {
        font-family: $font-h2;
        font-size: 25px;
        line-height: 1;
        &.mobile {
            font-size: 15px;
        }
    }
    .page-nav-text {
        font-size: 18px;
        font-family: $font-h2;
        letter-spacing: 2px;
        &.mobile {
            font-size: 12px;
        }
    }
    .blog-text {
        padding: 80px;
    }
    .three-object-wrapper {
        width: 50%;
        height: 50vh;
    }
</style>