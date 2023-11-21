<script>
import { store } from '../store';

export default {
    props: {
        menu: {
            type: Array,
            required: true
        },
    },

    data() {
        return {
            store,
        }
    },

    methods: {
    },

}
</script>

<template>
    <div>
        <ul v-for="link in menu">
            <li><a :href="link.href" @click="store.goToSection(link.text)">{{ link.text }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>