<template>


    <b-dropdown class="m-2 menu__button" text="Menu" variant="#eee1bb">  
        <b-dropdown-item variant="#eee1bb" class="header__link" to="/projects"
          >Proyectos</b-dropdown-item>
        <b-dropdown-item variant="#eee1bb" class="header__link" to="/aboutme">CV</b-dropdown-item>
        <b-dropdown-item variant="#eee1bb" class="header__link" to="/contact"
          >Contacto</b-dropdown-item>
    </b-dropdown>
 <!-- Boton Toggle -->
<!-- <b-navbar toggleable="lg" variant="info" type="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
 <b-collapse id="nav-collapse" is-nav>
   <b-navbar-nav class="ml-auto">
     <b-nav-item-dropdown text="Menu" right>
          <b-dropdown-item href="/projects">Proyectos</b-dropdown-item>
          <b-dropdown-item href="/aboutme">Conoceme</b-dropdown-item>
          <b-dropdown-item href="/contacto">Contacto</b-dropdown-item>
        </b-nav-item-dropdown>
   </b-navbar-nav>
 </b-collapse>

</b-navbar> -->



</template>
<script>
export default {
  name: 'MenuLinksNav',
}
</script>
<style>
.menu__button{
  position: absolute;
  right: 10px;
  background-color: #eee1bb !important;
  border-radius: 15px;
}

.header__link {
  background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  margin: 0.3rem;
  transition: transform ease 1s;

}
 .dropdown-item:hover{
   border-radius: 15px;
   border: #273bec 0.5px solid;
   background-color: #eee1bb;
   color: #273bec;
     font-size: 18px;
} 

.dropdown-item{
    color:#eee1bb;
}

.dropdown-menu.show{
  background-color: transparent;
  border: none;
}

</style>