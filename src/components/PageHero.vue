<script>

export default {


    data() {
        return {

        };
    }
}
</script>

<template>
    <section class="hero">
        <div class="hero_body container">
            <div class="row">
                <div class="hero_card col-6">
                    <h5>17 years of experience</h5>
                    <h1 class="hero_title space-top">We Are a <br> Web Design <span class="green-text">Agency</span></h1>
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
                        <ul class="row slide-num">
                            <li class="active">01</li>
                            <li>02</li>
                            <li>03</li>
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
        background-image: url(../Group-36-2x.png);
        background-size: 75%;
        background-repeat: no-repeat;
        background-position-x: 600px;
        background-position-y: -35px;
        padding-bottom: 150px;
        display: flex;
    }
}

.hero_card {
    padding: 110px 0 0 110px;

    .hero_title {
        font-size: 50px;
        font-weight: 600;
        line-height: 60px;
    }

    .hero_text {
        padding: 80px 0 50px;
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
        background: linear-gradient(90deg, #848484 0%, #2F2F2F 100%);
        padding: 0px 10px;
        font-size: 18px;
        color: $bg-grey;
        display: flex;
        align-items: center;
        gap: 30px;
        border-radius: 50px;

        .active {
            background: $bg-gradient;
            padding: 6px 18px;
            margin: 5px 0 5px -3px;
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