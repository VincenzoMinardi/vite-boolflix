<script>
import AppMovies from './AppMovies.vue'
import AppSeries from './AppSeries.vue'
import { store } from '../store'

export default{
    data() {
        return {
            store,
        }
    },

    components:{
        AppMovies,
        AppSeries,
    }
}
</script>

<template>
    <div class="container">
        <h1 class="title">Film</h1>
        <div class="movies">
            <AppMovies class="content-movies" v-for="movie in store.ArrMovies"
            
            :key="movie.id"
            :poster_path="movie.poster_path"
            :title="movie.title"
           :original_title="movie.original_title"
            :original_language="movie.original_language"
            :vote_average="movie.vote_average"
            />
        </div>
        <h1 class ="title">Serie TV</h1>
        <div class="series">
            <AppSeries class="content-series" v-for="series in store.ArrSeries" 
            :key="series.id"
            :poster_path="series.poster_path"
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
    background-color:black;
    height: 100%;

    
    .title{
        color: red;
    }

    .movies{
       
       
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        border: 1px solid white;
        .content-movies{
            color: white;
        }
    }

    .series{
        
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        border: 1px solid white;
        .content-series{
            color: white;
        }
    }
    
}
</style>