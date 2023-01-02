<template>
  <div class="generalContainer">
    <AboutMe></AboutMe>
  </div>
</template>
<script>
export default {
  components: {
    AboutMe: () => import('@/components/AboutmeNew.vue'),
  },
}
</script>
<style>
.about-page {
  text-align: center;
  padding: 30px;
}
</style>