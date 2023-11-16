<script>

import PageHero from './PageHero.vue';
export default {
    components: {
        PageHero,
    },

    data() {
        return {
            options: [
                {
                    icon: ['fas', 'gauge-high'],
                    title: 'Speed Optimization',
                    text: 'Far far away, behind the word ,ountains, far from the countries Vokalia Separated ...'
                },
                {
                    icon: ['fas', 'cloud'],
                    title: 'Cloud Sloutions',
                    text: 'Far far away, behind the word ,ountains, far from the countries Vokalia Separated ...'
                },
                {
                    icon: ['fas', 'tablet-screen-button'],
                    title: 'Website Design',
                    text: 'Far far away, behind the word ,ountains, far from the countries Vokalia Separated ...'
                },
                {
                    icon: ['fas', 'stopwatch'],
                    title: 'Online Marketing',
                    text: 'Far far away, behind the word ,ountains, far from the countries Vokalia Separated ...'
                }

            ],
            imgs: [
                '/img1.jpg',
                '/img2.jpg',
                '/img3.jpg',
                '/img4.jpg',
                '/img5.jpg',
                '/img6.jpg',
                '/img7.jpg',
                '/img8.jpg'
            ]
        }

    }
}
</script>

<template>
    <main>
        <PageHero />

        <!-- inizio sezione 1 -->
        <section class="section-one">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <h1 class="titles caps-letter space-top">
                            We are here to <br>make your <span class="green-text">website</span> look more <span
                                class="green-text">elegant</span> <br>and stylish!
                        </h1>
                        <hr class="divider">
                        <button class="button">View all</button>
                    </div>
                    <div class="col-8 row">
                        <div class="col-6" v-for="(card, i) in options">
                            <div class="card">
                                <ul>
                                    <li class="card-icon">
                                        <font-awesome-icon :icon="card.icon" />
                                    </li>
                                    <li>
                                        <h2 class="card-title">{{ card.title }}</h2>
                                    </li>
                                    <li>
                                        <p class="text">
                                            {{ card.text }}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- inizio sezione 2 -->

        <section class="section-two">
            <div class="container">
                <div class="row card-about">
                    <div class="col-6 imgs-about">
                        <img class="about-img" src="/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                    </div>
                    <div class="col-6">
                        <div class="about-text">
                            <h1 class="titles space-top">learn more about <br> our <span class="green-text">missions</span>
                            </h1>
                            <p class="text">Far far away, behind the word mountains, far form th ecountries Vokalia and
                                Consonantia, there live
                                the blind texts. Separated the live in Bookmarksgrove right at the cost of the Semantics, a
                                large
                                language ocean. Separated they live in Bookmarksgrove.
                            </p>
                            <button class="button">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- inizio sezione 3 -->

        <section class="section-three">
            <div class="container">
                <div class="row justify-center">
                    <div class="col-6">
                        <h1 class="titles">Our recent <span class="green-text">web designs</span> & <br>some examples of
                            <br>past
                            <span class="green-text">projects</span>
                        </h1>
                    </div>
                    <div class="col-6 projects-text">
                        <p class="text">Far far away, behind the word mountains, far form th ecountries Vokalia and
                            Consonantia, there live
                            the blind texts. Separated the live in Bookmarksgrove right at the cost of the Semantics, a
                            large
                            language ocean. Separated they live in Bookmarksgrove. Far far away, behind the word mountains.
                            Separated the live in Bookmarksgrove
                        </p>
                    </div>
                    <div class="col-12 project-img-card">
                        <div class="col-3" v-for="img in imgs">
                            <img :src="img" alt="">
                        </div>
                    </div>
                    <button class="button">Read more</button>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/parstials/variables' as*;

.section-one {
    padding: 100px 5px;
}

.card {
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
    padding: 40px 30px 50px;
}

.card-icon {
    font-size: 50px;
}

.card-title {
    font-size: 30px;
    font-weight: 400;
    padding: 15px 0;
}

.section-one [class^='col-'] {
    padding: 15px;
}

// inizio sezione 2

.section-two {
    background-color: $bg-light;
    padding: 200px 0;


    .imgs-about {

        background-image: linear-gradient(90deg, rgba(97, 231, 1, 0.73), rgba(150, 225, 95, 0.9)),
            url('/busy-architect-PYVKWM4-1024x872.jpg');
        height: 550px;
        background-size: cover;
        border-radius: 0 30px 30px 0;

        .about-img {
            border-radius: 20px;
            margin: 50px 0 0 50px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
        }
    }


    .about-text {
        padding: 50px 20px 0 140px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: flex-start;
    }
}

// inizio sezione 3
.section-three {
    padding: 230px 0;

    .projects-text {
        align-self: flex-end;
    }

    .project-img-card {
        display: flex;
        flex-wrap: wrap;
        padding: 100px 0 120px;
    }
}

.section-three [class^='col-3'] {
    padding: 3px;
}
</style>