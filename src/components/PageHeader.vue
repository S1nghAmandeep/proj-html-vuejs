<script>

import MenuHeader from './MenuHeader.vue';
import { store } from '../store';

export default {

    components: {
        MenuHeader,
    },

    data() {
        return {
            store,
            menu: [
                {
                    text: 'home',
                    href: '#'
                },
                {
                    text: 'about',
                    href: '#'
                },
                {
                    text: 'services',
                    href: '#'
                },
                {
                    text: 'showcase',
                    href: '#'
                },
                {
                    text: 'blog',
                    href: '#'
                },
                {
                    text: 'contacts',
                    href: '#'
                },
            ]
        };
    },
    methods: {
        goToSection(value) {
            /*
            const top = this.$refs[(value)].offsetTop;
            window.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            })
            */
            // console.log('goToSection', value);
        }
    },
}
</script>

<template>
    <header id="home">
        <nav class="row nav-bar container">
            <div>
                <img class="page-logo" src="/cropped-Group-39-2x.png" alt="">
            </div>
            <div>
                <MenuHeader @goSection="goToSection" class="row nav-items" :menu="menu" />
            </div>
            <div>
                <ul class="row nav-items">
                    <li><button class="button">Purchase</button></li>
                    <li class="search-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/parstials/variables' as*;

header {
    background-color: $bg-white;
}

.nav-bar {
    padding: 20px 40px;
    align-items: center;
    justify-content: space-between;
}

.nav-items {
    display: flex;
    gap: 30px;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
}

.search-icon {
    color: $bg-green;
}
</style>
