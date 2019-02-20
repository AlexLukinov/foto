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
    import * as THREE from 'three';
    import GLTFLoader from 'three-gltf-loader';

    export default {
            data () {
                return {
                    renderer: null,
                    scene: null,
                    camera: null,
                    geometry: null,
                    material: null,
                    mesh: null,
                }
            },
            methods:
                {
                    // initialization() {
                    //     this.scene = new THREE.Scene();
                    //
                    //     this.camera = new THREE.PerspectiveCamera(30.0, aspect, 1, 1000);
                    //     this.scene.add(this.camera);
                    //
                    //     let light = new THREE.AmbientLight();
                    //     this.scene.add(light);
                    //
                    //     this.renderer = new THREE.WebGLRenderer({
                    //         canvas: this.$refs.threejs,
                    //         antialias: true,
                    //         alpha: true
                    //     });
                    //
                    //     this.renderer.setSize(1024, 768);
                    //
                    //     this.renderer.render(this.scene, this.camera);
                    // },
                    loadMyModel() {
                        var scene = new THREE.Scene();
                        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
                        camera.position.z = 7;
                        camera.position.y = 10;
                        camera.position.x = 10;
                        var renderer = new THREE.WebGLRenderer({
                            canvas: this.$refs.threejs,
                            antialias: true,
                            alpha: true
                        });

                        renderer.setSize( 1920, 1000 );

                        var controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true;
                        controls.dampingFactor = 0.25;
                        controls.enableZoom = true;

                        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
                        keyLight.position.set(-100, 0, 100);

                        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
                        fillLight.position.set(100, 0, 100);

                        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
                        backLight.position.set(100, 0, -100).normalize();

                        scene.add(keyLight);
                        scene.add(fillLight);
                        scene.add(backLight);

                        // var loader = new GLTFLoader();
                        //
                        // loader.load( 'scene.gltf', function ( gltf ) {
                        //     scene.add( gltf.scene );
                        // }, undefined, function ( error ) {
                        //     console.error( error );
                        // } );

                        //
                        // var mtlLoader = new THREE.MTLLoader();
                        // mtlLoader.setTexturePath('./');
                        // mtlLoader.setPath('./');
                        // mtlLoader.load('lotus_petal_diffuse.jpg', function (materials) {
                        //
                        //     materials.preload();
                        //
                        //     var objLoader = new THREE.OBJLoader();
                        //     objLoader.setMaterials(materials);
                        //     objLoader.setPath('./');
                        //     objLoader.load('lotus_OBJ_high.obj', function (object) {
                        //
                        //         scene.add(object);
                        //         object.position.y = 0;
                        //
                        //     });
                        //
                        // });
                        var texture = new THREE.Texture();

                        var loader = new THREE.ImageLoader();
                        loader.load('lotus_petal_bump.jpg', function(image) {
                            texture.image = image;
                            texture.needsUpdate = true;
                        });

                        var loader = new THREE.OBJLoader();
                        loader.load('lotus_OBJ_high.obj', function(object) {
                            object.traverse(function(child) {
                                if (child instanceof THREE.Mesh) {
                                    child.material.map = texture;
                                }
                            });
                            // object.scale.x = 45;
                            // object.scale.y = 45;
                            // object.scale.z = 45;
                            // object.rotation.y = 3;
                            // object.position.y = -10.5;
                            object.position.y = 0;
                            scene.add(object);

                        });

                        // из частиц
                        // var textureLoader = new THREE.TextureLoader();
                        // textureLoader.setPath('./');
                        // textureLoader.load('lotus_petal_diffuse.jpg', function (texture) {
                        //
                        //     var objLoader = new THREE.OBJLoader();
                        //     objLoader.setPath('./');
                        //     objLoader.load('lotus_OBJ_high.obj', object => {
                        //
                        //         object.traverse(child => {
                        //             if (child instanceof THREE.Mesh) {
                        //                 child.material.map = object;
                        //             }
                        //         });
                        //
                        //         scene.add(object);
                        //         object.position.y = 0;
                        //
                        //     });
                        //
                        // });


                        var animate = function () {
                            requestAnimationFrame( animate );
                            controls.update();
                            renderer.render(scene, camera);
                        };
                        animate();
                    },
                    animate()
                    {
                        requestAnimationFrame(this.animate);

                        this.object.rotation.x += 0.01;
                        this.object.rotation.y += 0.02;
                        this.renderer.render(this.scene, this.camera);
                    }
                },
                mounted: function () {
                    // this.init();
                    // this.animate();
                    this.loadMyModel();
                }
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