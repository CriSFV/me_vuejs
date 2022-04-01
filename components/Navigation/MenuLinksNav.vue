<template>

    <b-dropdown class="m-2 menu__button" text="Menu" variant="#eee1bb">  
        <b-dropdown-item variant="#eee1bb" class="header__link" to="./projects"
          >Proyectos</b-dropdown-item>
        <b-dropdown-item variant="#eee1bb" class="header__link" to="/aboutme">Conoceme</b-dropdown-item>
        <b-dropdown-item variant="#eee1bb" class="header__link" to="./contact"
          >Contacto</b-dropdown-item>
    </b-dropdown>

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