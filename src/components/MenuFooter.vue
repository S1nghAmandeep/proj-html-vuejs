<script>

export default {
    props: {
        menu: {
            type: Array,
            required: true
        },

        title: {
            type: String,
            required: true
        }
    },

    data() {
        return {


        }
    }
}
</script>

<template>
    <div>
        <h4 class="menu-title">{{ title }}</h4>
        <ul v-for="link in menu">
            <li><a :href="link.href">{{ link.text }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>