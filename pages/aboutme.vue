<template>
  <div>
    <AppHeader />
    <div class="posts-page"></div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'AboutMe',
  components: {
    AppHeader: () => import('../components/Navigation/AppHeader.vue'),
    AppFooter: () => import('../components/AppFooter.vue'),
  },
}
</script>


<style>
/* .posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>