<script>

import MenuHeader from './MenuHeader.vue';

export default {

    components: {
        MenuHeader,
    },

    data() {
        return {
            menu: [
                {
                    text: 'Home',
                    link: '#'
                },
                {
                    text: 'About',
                    link: '#'
                },
                {
                    text: 'Services',
                    link: '#'
                },
                {
                    text: 'Showcase',
                    link: '#'
                },
                {
                    text: 'Blog',
                    link: '#'
                },
                {
                    text: 'Contacts',
                    link: '#'
                },
            ]
        };
    }
}
</script>

<template>
    <header>
        <nav class="row nav-bar container">
            <div>
                <img class="page-logo" src="/cropped-Group-39-2x.png" alt="">
            </div>
            <div>
                <MenuHeader class="row nav-items" :menu="menu" />
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
