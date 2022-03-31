<template>
<div>
    <AppHeader/>
    <!-- <p> hoja proyectos principal y común a todos los proyectos en las paginas numeradas</p> -->
     <nuxt-child/>
     <AppFooter/>
</div>
</template>

<script>
import AppHeader from '../components/Navigation/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {

    components:{AppHeader, AppFooter}
}
</script>
<style>

</style>