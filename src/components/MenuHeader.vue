<script>
export default {
    props: {
        menu: {
            type: Array,
            required: true
        },
    },

    data() {
        return {


        }
    }
}
</script>

<template>
    <div>
        <ul v-for="link in menu">
            <li><a :href="link.href">{{ link.text }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>