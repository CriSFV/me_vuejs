/**footer utilizado en todo el proyecto */
<template>
 
    <footer class='footer' id='contact'>
      <small class='copy'>
        Cris F. Valverde @ {{ year }}
      </small>
    </footer>
</template>

<script>
export default {
    name:'Footer',
      data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
.footer {
  font-size: 14px;
  padding-top: 15px;
  height: 30px;
  position: fixed;
  bottom: 10px;
  width: 100vw;
}



</style>