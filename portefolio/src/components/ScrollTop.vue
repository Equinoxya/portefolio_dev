<template>
    <button @click="remonter">↑</button>
</template>
<script setup>
function remonter(){
window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<style scoped>
button{
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
}
</style>
