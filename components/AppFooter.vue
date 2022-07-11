/**footer utilizado en todo el proyecto */
<template>
  <footer class="footer" id="contact">
    <p class="footer__copy">
      Made with <i class="fas fa-heart"></i> by Cris F. Valverde
      <!-- <i class="fab fa-gratipay"></i> -->
      {{ year }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/styles/footer.sass'
</style>