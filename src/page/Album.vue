<template>
    <div class="page info_page">
        <headerWidthBack></headerWidthBack>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                albums: [
                    {
                        id: 'idbe',
                        photographer: 'Иван Жимаев',
                        catalog: 'Флористика',
                        photos: [
                            {
                                src: 'asdsadf/sadfsdf/1.jpg'
                            },
                            {
                                src: 'asdsadf/sadfsdf/2.jpg'
                            },
                        ]
                    },
                    {
                        id: 'idbe',
                        photographer: 'Иван Жимаев',
                        catalog: 'Флористика',
                        photos: [
                            {
                                src: 'asdsadf/sadfsdf/1.jpg'
                            },
                            {
                                src: 'asdsadf/sadfsdf/2.jpg'
                            },
                        ]
                    },
                ],
                album: ''
            };
        },
        methods: {
        },
        mounted() {
            EventBus.$on('ALBUM_CLICKED', albumId => {
                this.album = albumId;
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