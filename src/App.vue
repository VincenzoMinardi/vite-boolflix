<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import axios from 'axios';



export default{
  
  data() {
    return {
        store,
    }
},
  components:{
    AppHeader,
    AppMain,
   
  },
  
  
  methods: {
    SearchMovie(){
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=21df2f399925b36ce74442455c67fc8a&query=all',)
        .then(response => (this.store.ArrMovies = response.data.results));
      },
    },

    created(){
      this.SearchMovie()
    },
  };


</script>

<template>
  <!-- <ul>
    <li v-for=" (movie, index) in store.ArrMovies" :key="index">
      {{movie}}
    </li>
  </ul> -->
  <AppHeader /> 
  <AppMain /> 
</template>

<style>
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }  
</style>
