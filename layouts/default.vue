<template>
  <div class="body">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('../components/Navigation/AppHeader.vue'),
    AppFooter: () => import('../components/AppFooter.vue'),
  },
}
</script>

<style>
.body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>