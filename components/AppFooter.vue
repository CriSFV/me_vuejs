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
  background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  color:#eee1bb;
  height: 50px;
  position: fixed;
  bottom: 0%;
  width: 100vw;
}
.copy{
  
  margin-left: 20px;

}



</style>