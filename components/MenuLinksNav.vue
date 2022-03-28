<template>
    <nav>
        <ul class="header__links">
            <li>
                <nuxt-link class="header__link" to="./projects">Proyectos</nuxt-link>
                <nuxt-link class="header__link" to="/about_me">CV</nuxt-link>
                <nuxt-link class="header__link" to="./contact">Contacto</nuxt-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: ' MenuLinksNav',
    
}
</script>
<style>
.header__link{
    background-image: linear-gradient(#273bec, rgb(58, 58, 52));
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
</style>