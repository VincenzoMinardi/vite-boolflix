<script>
export default{
    props: { 
        poster_path: String,
        name: String,
        original_name: String,
        original_Language: String,
        vote_average: Number
       
    }
}
</script>

<template>
    <div>
         <img :src="poster_path" alt="">
         <div>
            <h1>{{ name }}</h1>
            <h2>{{ original_name }}</h2>
            <h2>{{ original_Language }}</h2>
            <div>{{ vote_average }}</div>
         </div>
       
    </div>
</template>


<style lang="scss" scoped>
</style>