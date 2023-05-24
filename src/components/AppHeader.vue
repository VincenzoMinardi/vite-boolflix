<script>
export default{
}

</script>

<template>
    <div class="searchbar">
        <h1 class="title">Vite-Boolflix</h1>
        <div>
            <input class="text" type="text">
            <button class="bt-confirm">CERCA</button>
        </div>
      
    </div>
  
</template>

<style lang="scss" scoped>

.searchbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: black;

    .title{
        color: red;
        font-size: 3rem;
    }

    .text{
        height:50px;
    }

    .bt-confirm{
        height: 50px;
        background-color: red;
    }
}
</style>