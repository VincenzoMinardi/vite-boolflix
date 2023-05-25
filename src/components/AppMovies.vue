<script>
export default {
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

        <img v.if="" :src="poster_path" alt="">
        <div>
            <h1>{{ title }}</h1>
            <h2>{{ original_title }}</h2>
            <h3>{{ original_language }}</h3>
            <div>{{ vote_average }}</div>
        </div>
       
    </div>
</template>


<style lang="scss" scoped>
</style>