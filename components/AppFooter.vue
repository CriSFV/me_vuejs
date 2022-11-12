/**footer utilizado en todo el proyecto */
<template>
  <footer class="footer">
    <p class="footer__copy">
      <span> Made with</span> <i class="fas fa-heart"></i>
      <span>by Cris F. Valverde</span>
      <!-- <i class="fab fa-gratipay"></i> -->
      <span>{{ year }}</span>
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