<template>
    <div class="page album_page">
        <headerWidthBack></headerWidthBack>
        <div class="album-content">
            <div class="album_name">
                {{album.nameAlbum}}
            </div>
            <div class="photographer">Ph:
                <span class="photographer">
                {{album.photographer}}
                </span>
            </div>
            <div class="album-photo">
                <div v-for="photo in album.photos" :class="photo.isHorizontal ? 'horizontal-photo' : 'photo-item'">
                    <img :src="photo.src">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                albums: [
                    {
                        id: 'Previsokov',
                        photographer: 'Slava Vladzimirskaya',
                        nameAlbum: 'Съемка для каталога свадебного салона  Marylin. Отель Превысоковъ',
                        photos: [
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/1.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/2.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/3.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/4.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/5.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/6.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/7.jpg'
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/8.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/9.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/10.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/11.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/12.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/13.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/14.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/Previsokov/15.jpg',
                                isHorizontal: true
                            },
                        ]
                    },
                    {
                        id: 'CompoziciiPodborka',
                        photographer: 'Olga Karpova',
                        nameAlbum: 'Композиции. Подборка',
                        photos: [
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/1.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/2.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/3.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/4.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/5.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/6.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/7.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/8.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/9.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/10.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/11.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/12.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/13.jpg',
                                isHorizontal: false
                            },
                            {
                                src: 'src/assets/img/portfolio-gallery/CompoziciiPodborka/14.jpg',
                                isHorizontal: false
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
                let albumArray = this.albums.filter(album => {
                    return album.id === albumId;
                });

                if (albumArray) {
                    this.album = albumArray[0];
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .album_page {
        background-color: #fcfcfc;
        z-index: 10;
        height: auto;
        position: absolute;
        top: 0;
    }
    .author-photo {
        font-size: 0.8vw;
        text-align: left;
        color: #dfcfc0;
        transform: rotate(-90deg);
        width: 5%;
        white-space: nowrap;
        margin-bottom: 1%;
    }
    .album-content {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 77%;
    }
    .album_name {
        font-family: 'Merriweather-Regular';
        font-size: 1.1vw;
        color: #333333;
        margin: 3vh;
    }
    .album-photo {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .photo-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        width: 43%;
        border: 15px solid #fcfcfc;
        outline: 1px solid #dacfb1;

        margin: 1%;
    }
    .horizontal-photo {
        width: 96%;
        border: 1px solid #dacfb1;
        padding: 1.5%;
        margin: 1%;
    }
    .photo-item img, .horizontal-photo img {
        width: 100%;
    }
    .photographer {
        color: #333333;
        margin-top: 1vh;
        margin-bottom: 3vh;
        font-family: "ArnoProCaption";
        font-size: 1vw;
    }
</style>