<template>
    <header class="header">
        <MenuLinks/>
    </header>
</template>
<script>
import MenuLinks from './MenuLinks.vue'
export default {
    name:'Appheader',
    components:{
        MenuLinks
    },
}
</script>
<style >
.header {
    font-weight: 600;
    position: fixed;
    height: 60px;
    top: 0;
    width: 100%;
    background-image: linear-gradient(#273bec, rgb(58, 58, 52));
    z-index: 100;
    font-size: 5px;
    }
</style>