<script>

export default {


    data() {
        return {
            navBar: ['Home', 'About', 'Services', 'Showcase', 'Blog', 'Contact']
        };
    }
}
</script>

<template>
    <header class="container">
        <nav class="row nav-bar">
            <div>
                <img class="nav-logo" src="/cropped-Group-39-2x.png" alt="">
            </div>
            <div>
                <ul class="row nav-items">
                    <li v-for="item in navBar"><a href="#">{{ item }}</a></li>
                </ul>
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

.nav-bar {
    padding: 20px 0;
    align-items: center;
    justify-content: space-around;
}

.nav-logo {
    height: 40px;
}

.nav-items {
    display: flex;
    gap: 30px;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
}

.search-icon {
    color: $bg-green;
}
</style>
