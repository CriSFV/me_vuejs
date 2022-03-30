<template>
  <div>
    <Header />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import AboutMe from '../components/AboutMe.vue'

export default {
  components: { Header, Footer, AboutMe },
  name: 'IndexPage',
}
</script>

<style>

</style>