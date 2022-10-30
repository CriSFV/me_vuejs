
<template>
  <Proyects />
</template>


<script>
export default {
  components: {
    Proyects: () => import('~/components/Project/projects.vue'),
  },
  layout: 'default',
}
</script>

<style>
</style>