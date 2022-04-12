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
body {
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(117, 121, 9, 0.8855917366946778) 27%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>