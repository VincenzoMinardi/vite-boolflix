<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import axios from 'axios';



export default {

  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain,


  },


  methods: {
    formApi() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '9e04c5da40305d4ce8cd80dd04de004b',
            query: this.store.SearchMovies,

          },
        })
        .then(response => (this.store.ArrMovies = response.data.results));

      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '9e04c5da40305d4ce8cd80dd04de004b',
            query: this.store.SearchMovies,

          },
        })
        .then(response => (this.store.ArrSeries = response.data.results));

    },
  },


  created() {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '21df2f399925b36ce74442455c67fc8a'
        }
      })
      .then(response => (this.store.ArrMovies = response.data.results));

    axios
      .get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '21df2f399925b36ce74442455c67fc8a'
        }
      })
      .then(response => (this.store.ArrSeries = response.data.results));

  }
};



</script>

<template>
  <AppHeader @SearchMovies="formApi" />
  <AppMain />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
