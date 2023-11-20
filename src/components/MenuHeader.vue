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
    },

    methods: {
        goSection(val) {
            this.$emit('go-section, val')
            console.log(val);
        }
    },

}
</script>

<template>
    <div>
        <ul v-for="link in menu">
            <li><a :href="link.href" @click="goSection(link.text)">{{ link.text }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>