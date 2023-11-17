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
            ],

            news: [
                {
                    img: 'blog1.jpg',
                    date: 'May 24,2018 .by Alex',
                    title: 'Marketing ideas'
                },
                {
                    img: 'blog2.jpg',
                    date: 'May 24,2018 .by Alex',
                    title: 'Rest during working houres'
                },
                {
                    img: 'blog3.jpg',
                    date: 'May 24,2018 .by Alex',
                    title: 'Develop your startup idea'
                }
            ],

            logo: [
                '/client-1-2x.png',
                '/client-9-2x.png',
                '/client-7-2x.png',
                '/client-3-2x.png',
                '/client-4-2x.png',
                '/client-5-2x.png'
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
                        <h1 class="titles caps-letter space-top space-bottom">
                            We are here to <br>make your <span class="green-text">website</span> look more <span
                                class="green-text">elegant</span> <br>and stylish!
                        </h1>
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
                        <img class="about-img" src="/lisa.jpg" alt="">
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
                        <h1 class="titles divider">Our recent <span class="green-text">web designs</span> & <br>some
                            examples of
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
                    <div class="col-12 project-img-card-body">
                        <div class="col-3 project-img-card" v-for="img in imgs">
                            <img class="project-img" :src="img" alt="">
                            <div class="project-info">
                                <h2>Here goes the text</h2>
                                <p>Here goes the sector</p>
                            </div>
                        </div>
                    </div>
                    <button class="button">Read more</button>
                </div>
            </div>
        </section>

        <!-- inizio sezione 4 -->

        <section>
            <div class="container">
                <div class="row justify-center review-card-body">
                    <div class="col-4 review-card">
                        <span class="quote green-text">&#8220</span>
                        <p class="text corsive-text">
                            When it comes to barbequing, there are two main school of thought of the techniques that you can
                            use. Freshly scrambled eggs with applewood smoked bacon - are amazing!
                        </p>
                        <div>
                            <img class="reviewer-img" src="/lisa.jpg" alt="">
                            <h4 class="reviewer-name">Lissa Durbin</h4>
                            <span>Client</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- inizio sezione 5 -->

        <section class="section-five">
            <div class="container">
                <div class="blog-card-body ">
                    <h1 class="sect-five-title caps-letter">Latest news & our <span class="green-text">blog</span></h1>
                    <div class="row space-bottom">
                        <div class="col-4 blog-card" v-for="blog in news">
                            <img class="blog-card_img" :src="blog.img" alt="">
                            <div class="blog-card_info">
                                <p class="blog-card-date">{{ blog.date }}</p>
                                <h3 class="blog-card-title"><span class="dot">&#x2022;</span>{{ blog.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <button class="button bg-black blog-btn">View all post</button>
                </div>
                <div class="row form-body">
                    <div class="col-sei form-card bg-black">
                        <span class="form-question">Are you ready?</span>
                        <h1 class="form-title">Start a new project</h1>
                        <div class="input">
                            <input class="input-bar" type="email" placeholder="Enter Your Email Address">
                            <button class="form-btn">Submit</button>
                        </div>
                    </div>
                    <div class="col-sei form-card bg-gredient green-shadow">
                        <span class="form-question">Waht are you waiting for?</span>
                        <h1 class="form-title">Let's talk about work</h1>
                        <button class="button bg-black">Start now</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 client-logo" v-for="img in logo">
                        <img :src="img" alt="">
                    </div>
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

    &:hover {
        background: linear-gradient(90deg, #0BDAA1 0%, #5EDE7B 50%, #95E161 100%);
        color: $bg-white;
    }
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

        background-image: linear-gradient(60deg, rgba(148, 225, 97, 0.9), rgba(9, 218, 163, 0.83)),
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
    padding: 180px 0;

    .projects-text {
        align-self: flex-end;
    }

    .project-img-card-body {
        display: flex;
        flex-wrap: wrap;
        padding: 100px 0;
        position: relative;

        .project-img-card {
            position: relative;

            &:hover .project-info {
                display: flex
            }
        }

        .project-img {
            border-radius: 3px;
        }

        .project-info {
            position: absolute;
            left: 0px;
            right: 0;
            top: 0;
            bottom: 0;
            flex-direction: column;
            justify-content: flex-end;
            padding: 20px;
            border-radius: 3px;
            color: $bg-white;
            z-index: 99;
            background: $bg-gradient;
            opacity: 0.9;
            display: none;
        }
    }
}


.divider::before {
    content: '';
    display: block;
    height: 4px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/public/divider.png');
    margin: 15px 0;
}

.section-three [class^='col-3'] {
    padding: 3px;
}

.section-three [class^='col-6'] {
    padding: 0 10px;
}

// inizio sezione 4

.review-card-body {
    background-image: linear-gradient(90deg, rgba(28, 25, 25, 0.879), rgba(50, 47, 47, 0.9)),
        url('meeting.jpg');
    background-size: cover;
    background-position: 0;
    padding: 120px 0;

    .review-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        color: $bg-white;

        .reviewer-img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border: 2px solid black;
            border-radius: 100px;
        }

        .quote {
            font-size: 150px;
            line-height: 80px;
        }

        .corsive-text {
            font-style: oblique 40deg;
            line-height: 30px;
            font-weight: lighter;
        }

        .reviewer-name {
            text-transform: uppercase;
            color: $bg-green;
            padding-top: 20px;
        }

    }
}

// inizio sezione 5

.section-five [class^='col-'] {
    padding: 10px;
}

.section-five {
    padding: 200px 0 0 0;
    text-align: center;
    background-color: $bg-light;

    .blog-card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;


        .sect-five-title {
            font-size: 45px;
            font-weight: 500;
            display: block;
            line-height: 65px;

            &::after {
                content: '';
                display: block;
                height: 4px;
                width: 50px;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('/public/divider.png');
                margin: 30px auto 0;
            }
        }

        .blog-btn {
            margin-top: 50px;
        }
    }

    .blog-card {
        position: relative;

        .blog-card_img {
            border-radius: 10px;
        }

        .blog-card_info {
            position: absolute;
            background-color: $bg-white;
            width: 80%;
            left: 10%;
            bottom: -50px;
            height: 100px;
            border-radius: 5px;
            text-align: left;
            padding: 30px 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);


            .blog-card-date {
                color: $bg-lgt-grey;
                font-size: 12px;
                padding-left: 15px;
            }

            .blog-card-title {
                font-weight: 500;
                text-transform: capitalize;

                .dot {
                    color: $bg-green;
                    font-size: 35px;
                    vertical-align: -5px;
                    margin-right: 5px;
                    line-height: 10px;
                }
            }

        }
    }

    .col-sei {
        flex-basis: calc((100% / 12) * 6 - 20px);
    }

    .form-body {
        padding: 150px 0 80px;
    }

    .form-card {
        padding: 70px 0 70px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        .form-question {
            color: #f9f9f9c2;
            font-size: 17px;
            text-transform: capitalize;
        }

        .form-title {
            color: $bg-white;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 40px;
            margin-bottom: 50px;
        }

        .input {
            position: relative;

            .input-bar {
                width: 480px;
                height: 50px;
                border-radius: 50px;
                border: none;
                padding-left: 20px;
                background-color: $bg-lgt-black;
            }

            .form-btn {
                background-color: $bg-lgt-black;
                height: 30px;
                border: none;
                color: $bg-lgt-grey;
                text-transform: uppercase;
                position: absolute;
                right: 25px;
                bottom: 9px;
                cursor: pointer;
            }

        }
    }

    .client-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px;
    }

}
</style>