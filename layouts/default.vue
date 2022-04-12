<template>
  <div>
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
</style>