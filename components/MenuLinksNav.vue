<template>
  <nav>
      <b-button v-b-toggle.collapse-2 class="m-1" > Menu </b-button>
     
    <ul class="header__links">
         <b-collapse id="collapse-2">
      <li>
       
         <b-link class="header__link" to="./projects"> Proyectos </b-link>
      </li>
      <li><b-link class="header__link" to="/about_me">CV</b-link></li>
      <li><b-link class="header__link" to="./contact">Contacto</b-link></li>
        </b-collapse>
    </ul>
  </nav>
</template>
<script>
export default {
  name: ' MenuLinksNav',
}
</script>
<style>
.header__link {
  background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  color: aliceblue;
  border-radius: 15px;
  padding: 5px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  margin: 1.5rem 0rem 1rem 0.5rem;
  transition: transform ease 1s;
  @media (min-width: 768px) {
    margin: 1rem 1rem;
  }
}
.header__link:hover {
  transform: scale(1.1);
}
.header__links {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 1em;
}
</style>