<template>
    <nav class="home">
<nuxt-link class="header__link__home" to="/"> Home </nuxt-link>
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

</style>