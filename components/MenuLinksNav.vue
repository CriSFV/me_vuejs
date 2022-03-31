<template>
    <b-dropdown pill split class="m-2 menu__button" dropright text="Menu" variant="warning" >  
        <b-dropdown-item variant="warning" class="header__link" to="./projects"
          >Proyectos</b-dropdown-item>
        <b-dropdown-item variant="warning" class="header__link" to="/aboutme">CV</b-dropdown-item>
        <b-dropdown-item variant="warning" class="header__link" to="./contact"
          >Contacto</b-dropdown-item>
    </b-dropdown>

</template>
<script>
export default {
  name: ' MenuLinksNav',
}
</script>
<style>
.header__link {
  background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  border-radius: 15px;
  padding: 5px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  margin: 0.3rem;
  transition: transform ease 1s;
  @media (min-width: 768px) {
    margin: 1rem 1rem;
  }
}
.dropdown-menu.show{
  background-color: #eee1bb;
  border-radius: 15px;
}

</style>