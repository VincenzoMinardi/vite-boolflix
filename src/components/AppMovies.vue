<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        languageImage(index) {
            if (index == 'en') {
                return 'https://flagsapi.com/GB/flat/32.png'
            } else if (index == 'ja') {
                return 'https://flagsapi.com/JP/flat/32.png'
            } else {
                return ('https://flagsapi.com/' + index.toUpperCase() + '/flat/32.png')
            }
        },

        transformPrintReview(number) {
            // Trasformazione del numero
            const trasformNumber = Math.floor((number - 1) / 2) + 1;

            // Creazione della recensione
            let review = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= trasformNumber) {
                    review += "★ "; // stella piena
                } else {
                    review += "☆ "; // stella vuota
                }
            }

            return review;
        }






    },
    props: {
        poster_path: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
    },
};


</script>
<template>
    <div>

        <img class="image" v-if="poster_path" :src="`http://image.tmdb.org/t/p/w342${poster_path}`" :alt="poster_path">
        <img v-else src="../assets/img/Non-disponibile-_04.jpg" alt="">
        <div>
            <h1>{{ title }}</h1>
            <h2>{{ original_title }}</h2>
            <span><img :src="languageImage(original_language)" alt=""></span>
            <div>{{ transformPrintReview(vote_average) }}</div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.image {
    height: 500px;
    width: 350px;

}
</style>