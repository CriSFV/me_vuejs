<template>
  <div class="generalContainer">
    <Contact></Contact>
  </div>
</template>
<script>
export default {
  components: {
    Contact: () => import('@/components/contact.vue'),
  },
}
</script>