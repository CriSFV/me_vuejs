<template>
  <section class="goBack_container">
    <span @click="goBack" class="goBack">
      <i class="fas fa-angle-left" /> volver home
    </span>
    <div class="responsive_sm">
      <b-button v-b-toggle.sidebar-1 class="boton_menu">Menu</b-button>
      <b-sidebar id="sidebar-1" title="Menu" shadow>
        <ul class="list_decoration links_container_sm">
          <li class="header__link">
            <span
              ><a href="/projects" class="nav_link_header"> Proyectos </a></span
            >
          </li>
          <li class="header__link">
            <span
              ><a href="/aboutme" class="nav_link_header"> Cónoceme </a></span
            >
          </li>
          <li class="header__link">
            <span
              ><a href="/contact" class="nav_link_header"> Contacto </a></span
            >
          </li>
        </ul>
      </b-sidebar>
    </div>
    <div class="responsive_md">
      <ul class="list_decoration links_container">
        <li class="header__link">
          <span
            ><a href="/projects" class="nav_link_header"> Proyectos </a></span
          >
        </li>
        <li class="header__link">
          <span><a href="/aboutme" class="nav_link_header"> Cónoceme </a></span>
        </li>
        <li class="header__link">
          <span><a href="/contact" class="nav_link_header"> Contacto </a></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>



<style lang="sass">
.nav_link_header
  font-size: 14px
.goBack_container
  text-align: initial
  display: flex
  justify-content: space-between
  align-items: center
.goBack:hover
  cursor: pointer
.links_container
  display: flex
  width: 300px
.links_container_sm
  display: flex
  flex-direction: column
.b-sidebar
  width: 160px !important
.boton_menu
  background-color: transparent
  border: 1px solid #202234
  border-radius: 5px
  color: #202234
  padding: 0 5px
  &:hover
    background-color: #202234
    color: white
</style>