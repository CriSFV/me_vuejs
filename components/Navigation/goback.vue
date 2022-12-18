<template>
  <section class="goBack_container">
    <span @click="goBack" class="goBack">
      <i class="fas fa-angle-left" /> volver
    </span>
  </section>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>



<style lang="sass">
.goBack_container
  text-align: initial

.goBack:hover
  cursor: pointer
</style>