<script>

export default {


    data() {
        return {
            slider: ['01', '02', '03'],
            slide: 0,
            autoPlay: null,
        };
    },
    methods: {
        onClick(i) {
            this.slide = i
            console.log(this.slide, i)
        },

        startSlide() {
            if (this.slide === 2) {
                this.slide = 0
            } else {
                this.slide++
            }
        },

        scroll() {
            this.autoPlay = setInterval(this.startSlide, 4000)
        },

        stopSlide() {
            clearInterval(this.autoPlay)
            this.autoPlay = null
        },

        bgImg() {
            if (this.slide === 0) {
                return 'bg-img-one'
            } else if (this.slide === 1) {
                return 'bg-img-two'
            } else {
                return 'bg-img-three'
            }
        }
    },
    mounted() {
        this.scroll()
    }
}
</script>

<template>
    <section class="hero">
        <div class="hero_body container" :class="bgImg()">
            <div class="row">
                <div class="hero_card col-6">
                    <h5>17 years of experience</h5>
                    <h1 class="hero_title ">We Are a <br> Web Design <span class="green-text">Agency</span></h1>
                    <p class="hero_text">Far far away, behind the word mountains, far form th ecountries Vokalia and
                        Consonantia, there live
                        the blind texts. Separated the live in Bookmarksgrove right at the cost of the Semantics, a large
                        language ocean. Separated they live in Bookmarksgrove.
                    </p>
                    <button class="button bg-black">Read more</button>
                    <div class="row bottom-text">
                        <ul class="row socials">
                            <li class="tag"><a href="#">Facebook</a></li>
                            <li class="tag"><a href="#">Instagram</a></li>
                            <li class="tag"><a href="#">Youtube</a></li>
                            <li class="tag"><a href="#">Twitter</a></li>
                        </ul>
                        <ul class="row slide-num" @mouseenter="stopSlide()" @mouseleave="scroll()">
                            <li @click="onClick(i)" v-for="(num, i) in slider" :class="slide === i ? 'active' : ''"
                                class="scroll-num">
                                {{ num }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/parstials/variables' as*;

.hero {
    background-color: $bg-light;

    .hero_body {
        background-size: 1175px;
        background-repeat: no-repeat;
        background-position-x: 560px;
        background-position-y: -40px;
        padding: 150px 0 200px;
    }

    .bg-img-one {
        background-image: url(../Group-36-2x.png);
    }

    .bg-img-two {
        background-image: url(../Group-35-2x.png);
    }

    .bg-img-three {
        background-image: url(../Group-40-2x.png);
    }
}

.hero_card {
    padding-left: 110px;

    .hero_title {
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
        padding-top: 10px;

        &::after {
            content: '';
            display: block;
            height: 4px;
            width: 50px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url('/public/divider.png');
            margin: 35px 0;
        }
    }

    .hero_text {
        padding: 15px 0 50px;
        font-size: 18px;
    }

    .bottom-text {
        padding-top: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .socials {
        gap: 10px;
        text-transform: uppercase;
        font-weight: 600;

        .tag:not(:last-child)::after {
            content: '-';
            display: inline-block;
            margin-left: 10px
        }
    }

    .slide-num {
        background: linear-gradient(90deg, #5f5f5f 0%, #2F2F2F 100%);
        font-size: 18px;
        color: $bg-grey;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 50px;
        box-shadow: 3px 7px 20px rgba(0, 0, 0, 0.30);

        &>li {
            width: 50px;
            text-align: center;
        }

        .active {
            background: $bg-gradient;
            padding: 6px 18px;
            margin: 5px;
            border-radius: 50px;
        }
    }


}

div>h5 {
    color: $bg-green;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 5px;
    text-transform: uppercase;
}
</style>