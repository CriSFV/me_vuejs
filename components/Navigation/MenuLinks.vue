<template>
  <nav class="home">
    <nuxt-link class="header__link__home" to="/">
      <i class="fas fa-home"></i>
    </nuxt-link>
    <b-dropdown class="m-2 menu__button" text="Menu" variant="#eee1bb" dropleft>
      <b-dropdown-item variant="#eee1bb" class="header__link" to="/projects"
        >Proyectos</b-dropdown-item
      >
      <b-dropdown-item variant="#eee1bb" class="header__link" to="/aboutme"
        >Sobre mi</b-dropdown-item
      >
      <b-dropdown-item variant="#eee1bb" class="header__link" to="/contact"
        >Contacto</b-dropdown-item
      >
    </b-dropdown>
    <!-- <MenuLinksNav /> -->
  </nav>
</template>
<script>
export default {}
</script>
<style scoped>
@import '@/assets/styles/headerStyle.scss';
</style>