<template>
  <div>
    <AppHeader />
    <!-- <p> hoja proyectos principal y común a todos los proyectos en las paginas numeradas</p> -->
    <nuxt-child />
    <AppFooter />
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
<style>
</style>