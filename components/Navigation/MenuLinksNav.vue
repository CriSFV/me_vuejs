<template>
  <b-dropdown class="m-2 menu__button" text="Menu" variant="#eee1bb">
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
  <!-- Boton Toggle -->
  <!-- <b-navbar toggleable="lg" variant="info" type="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
 <b-collapse id="nav-collapse" is-nav>
   <b-navbar-nav class="ml-auto">
     <b-nav-item-dropdown text="Menu" right>
          <b-dropdown-item href="/projects">Proyectos</b-dropdown-item>
          <b-dropdown-item href="/aboutme">Conoceme</b-dropdown-item>
          <b-dropdown-item href="/contacto">Contacto</b-dropdown-item>
        </b-nav-item-dropdown>
   </b-navbar-nav>
 </b-collapse>

</b-navbar> -->
</template>
<script>
export default {
  name: 'MenuLinksNav',
}
</script>
<style>
</style>