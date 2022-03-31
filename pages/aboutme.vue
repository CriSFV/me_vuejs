<template>
<div>
  <AppHeader/>
  
    <div class="posts-page">
<nuxt/>
    </div>

  <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
  name: 'AboutMe',
  components:{
    AppHeader,
    AppFooter
  }
}
</script>


<style>
.posts-page{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>