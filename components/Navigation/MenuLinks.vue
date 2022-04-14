<template>
  <nav class="home">
    <b-link class="header__link__home" to="/"> Home </b-link>
    <MenuLinksNav />
  </nav>
</template>
<script>
export default {
  components: {
    MenuLinksNav: () => import('./MenuLinksNav.vue'),
  },
  name: 'MenuLinks',
}
</script>
<style scoped>
@import '@/assets/styles/headerStyle.scss';
</style>