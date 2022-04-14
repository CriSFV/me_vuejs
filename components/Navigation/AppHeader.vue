<template>
  <header class="header">
    <MenuLinks />
  </header>
</template>
<script>
export default {
  name: 'Appheader',
  components: {
    MenuLinks: () => import('./MenuLinks.vue'),
  },
}
</script>
<style >
@import '@/assets/styles/headerStyle.scss';
</style>