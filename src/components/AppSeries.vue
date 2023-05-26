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
        name: String,
        original_name: String,
        original_language: String,
        vote_average: Number,
    },
};

</script>

<template>
    <div class="big-container">
        <div class="card-front">
            <img v-if="poster_path" :src="`http://image.tmdb.org/t/p/w342${poster_path}`" :alt="poster_path">
            <img v-else src="../assets/img/Non-disponibile-_04.jpg" alt="">
        </div>
        <div class="card-black">
            <div>
                <div class="font">{{ name }}</div>+
            </div>
            <div>
                <div v-show="original_name !== name" class="font">{{ original_name }}</div>
            </div>
            <div>
                <span><img :src="languageImage(original_language)" alt=""></span>
            </div>
            <div>{{ transformPrintReview(vote_average) }}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.big-container {
    position: relative;
    width: 342px;
    margin-left: 1.5rem
}

.card-front {
    position: relative;
    width: 100%;
    height: auto;
    transition: opacity 0.5s ease;
}

.card-black {
    position: absolute;
    top: 0;
    left: 0;
    width: 342px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.font {
    font-size: 3rem;
}

.big-container:hover .card-front {
    opacity: 0;
}

.big-container:hover .card-black {
    opacity: 1;
}
</style>



 

