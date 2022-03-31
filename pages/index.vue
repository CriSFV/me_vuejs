<template>
  <div>
    <Header />
    <router-view v-slot="{AboutMe}">
      <component :is="AboutMe" />
    </router-view>
  
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