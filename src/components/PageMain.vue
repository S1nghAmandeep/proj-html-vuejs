<script>

import PageHero from './PageHero.vue';
export default {
    components: {
        PageHero,
    },

    data() {
        return {

        };
    }
}
</script>

<template>
    <main>
        <PageHero />

        <!-- inizio sezione 1 -->
        <section class="debug section-one">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <h1 class="titles caps-letter">
                            We are here to <br>make your <span class="green-text">website</span> look more <span
                                class="green-text">elegant</span> and stylish!
                        </h1>
                        <hr class="divider">
                        <button class="button">View all</button>
                    </div>
                    <div class="col-8 row">
                        <div class="col-6">
                            <div class="card">
                                <ul>
                                    <li class="card-icon">
                                        <font-awesome-icon :icon="['fas', 'gauge-high']" />
                                    </li>
                                    <li>
                                        <h2 class="card-title">Speed Optimization</h2>
                                    </li>
                                    <li>
                                        <p class="text">
                                            Far far away, behind the word ,ountains, far from the countries Vokalia
                                            Separated...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <ul>
                                    <li class="card-icon">
                                        <font-awesome-icon :icon="['fas', 'gauge-high']" />
                                    </li>
                                    <li>
                                        <h2 class="card-title">Speed Optimization</h2>
                                    </li>
                                    <li>
                                        <p class="text">
                                            Far far away, behind the word ,ountains, far from the countries Vokalia
                                            Separated...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <ul>
                                    <li class="card-icon">
                                        <font-awesome-icon :icon="['fas', 'gauge-high']" />
                                    </li>
                                    <li>
                                        <h2 class="card-title">Speed Optimization</h2>
                                    </li>
                                    <li>
                                        <p class="text">
                                            Far far away, behind the word ,ountains, far from the countries Vokalia
                                            Separated...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <ul>
                                    <li class="card-icon">
                                        <font-awesome-icon :icon="['fas', 'gauge-high']" />
                                    </li>
                                    <li>
                                        <h2 class="card-title">Speed Optimization</h2>
                                    </li>
                                    <li>
                                        <p class="text">
                                            Far far away, behind the word ,ountains, far from the countries Vokalia
                                            Separated...
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
}

.card-icon {
    font-size: 50px;
}

.card-title {
    font-size: 30px;
    font-weight: 400;
    padding: 15px 0;
}

.section-one [class^='col-6'] {
    padding: 15px;
}
</style>