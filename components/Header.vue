<template>
    <header class="header">
        <MenuLinks/>
    </header>
</template>
<script>
import MenuLinks from './MenuLinks.vue'
export default {
    name:'header',
    components:{
        MenuLinks
    },
}
</script>
<style >
.header {
  font-weight: 600;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  z-index: 100;
  display: flex;
  font-size: 5px;}
</style>