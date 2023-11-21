import { reactive } from 'vue';

export const store = reactive({
    goToSection(value) {
        // console.log('goToSection', value);
        const top = window.document.getElementById(value).offsetTop;
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth'
        })
    }
});