<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import axios from 'axios';



export default{
  
  data() {
    return {
        store
    }
},
  components:{
    AppHeader,
    AppMain,
   
  },
  
  
  methods: {
    formApi(SearchMovies){
      axios
         .get('https://api.themoviedb.org/3/movie/550',{
            params: {
            api_key:'9e04c5da40305d4ce8cd80dd04de004b',
            query: SearchMovies,
            
          },
        })
        .then(response => (this.store.ArrMovies = response.data.results));
        
      },
    },

    created(){
      this.formApi
    },
  };


</script>

<template>
 
  <AppHeader @SearchMovies="formApi()"/> 
  <AppMain /> 
</template>

<style>
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }  
</style>
