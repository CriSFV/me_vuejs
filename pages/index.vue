// https://codepen.io/frgo/details/povZZVm

<template>
  <Hero />
</template>

<script>
export default {
  layout: 'default',
  components: {
    Hero: () => import('../components/Hero/Hero.vue'),
  },
  name: 'IndexPage',
  layouts: 'default',
}
</script>
<style>
</style>