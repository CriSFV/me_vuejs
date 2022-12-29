<template>
  <header class="header" id="header">
    <!-- <MenuLinks /> -->
    <b-navbar toggleable="sm" class="header">
      <b-navbar-brand>
        <a class="header__link__home" href="/">
          <i class="fas fa-heart"></i>
        </a>
      </b-navbar-brand>
      <div
        id="go-up"
        :class="{ hide: scrollPosition < 300, goUp: scrollPosition > 300 }"
        @click="goUp"
      >
        <span style="vertical-align: middle"
          ><i class="fas fa-angle-up icons"
        /></span>
      </div>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav class="menu__button">
        <b-nav-item variant="#eee1bb" class="header__link" to="/projects">
          <span> Proyectos </span>
        </b-nav-item>
        <b-nav-item variant="#eee1bb" class="header__link" to="/aboutme">
          <span> Sobre mi </span>
        </b-nav-item>
        <b-nav-item variant="#eee1bb" class="header__link" to="/contact">
          <span> Contacto </span>
        </b-nav-item>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  name: 'Appheader',
  components: {
    MenuLinks: () => import('./MenuLinks.vue'),
  },
  data() {
    return {
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    goUp() {
      console.log('goup')
      const div = document.querySelector('#header')
      if (div) {
        div.scrollIntoView()
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/header.sass';
</style>
<style lang="sass" scoped>
.goUp
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
  position: fixed
  bottom: 2%
  right: 16px
  width: 40px
  height: 40px
  text-align: center
  background: #ddd
  color: #666
  opacity: 0.7
  border-radius: 2px
  display: flex
  justify-content: center
  align-items: center
  @media (min-width: 992px)
    bottom: 14%
    right: 50px
.hide
  opacity: 0
</style>