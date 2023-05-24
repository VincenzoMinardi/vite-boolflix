<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import Searchbar from './components/Searchbar.vue'
import store from './store'
import SeachbarVue from './components/Seachbar.vue'



export default{

  data() {
    return {
        store,
    }
  },

  components:{
    AppHeader,
    AppMain,
    Searchbar,
  }
}
</script>

<template>
<AppHeader /> 
<AppMain /> 
</template>

<style>
</style>
