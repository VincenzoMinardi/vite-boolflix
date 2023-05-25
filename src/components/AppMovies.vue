<script>
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  },
};
</script>
<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ origina_title }}</h2>
        <h3>{{ original_language }}</h3>
        <div>{{ vote_average }}</div>
    </div>
</template>


<style lang="scss" scoped>
</style>