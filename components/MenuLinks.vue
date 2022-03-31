<template>
    <nav class="home">
<b-link class="header__link__home" to="/"> Home </b-link>
<MenuLinksNav/>
    </nav>
</template>
<script>
import MenuLinksNav from './MenuLinksNav.vue'
export default {
  components: { MenuLinksNav },
    name:'MenuLinks'
}
</script>
<style scoped>
.header__link__home{
    font-size: 35px;
    position: relative;
    left:10px;
}
</style>