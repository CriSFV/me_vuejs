/**footer utilizado en todo el proyecto */
<template>
  <footer class="footer" id="contact">
    <small class="footer__copy"> Cris F. Valverde @ {{ year }} </small>
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

<style>
@import '@/assets/styles/footer.scss';
</style>