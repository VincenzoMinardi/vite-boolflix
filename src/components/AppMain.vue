<script>
import { store } from '../store'
import AppMovies from './AppMovies.vue'
import AppSeries from './AppSeries.vue'


export default{
    data() {
        return {
            store,
        }
    },

    components:{
        AppMovies,
        AppSeries
    }
}
</script>

<template>
    <div class="container">
        <div class="movies">
            <AppMovies v-for="movie in ArrMovies"
            :key="movie.id"
            :title="movie.title"
           :original_title="movie.original_title"
            :original_language="movie.original_language"
            :vote_average="movie.vote_average"
            />
        </div>
        <div class="series">
            <AppSeries v-for="series in ArrSeries" 
            :key="series.id"
            :name="series.name"
            :original_name="series.original_name"
            :original_language="series.original_language"
            :vote_average="series.vote_average"
            />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container{
    height: 100vh;
}
</style>