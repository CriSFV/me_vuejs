<template>
  <div>
    <AppHeader />

    <section class="hero" id="home">
      <div class="hero__content">
        <div class="hero__content__photo">
          <img class="hero__photo" src="../assets/images/editorimg.jpg" alt="this is me" />
        </div>
        <h1 class="hero__title">¡¡Hola!!</h1>
        <h2 class="hero__subtitle">Soy Yo</h2>

        <h3 class="hero__subtitle2">Titulo descripción</h3>
        <article class="hero__info">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos delectus quo voluptatem eveniet provident sed culpa
            atque quis, et dolor. Ad modi fuga soluta, in assumenda
            reprehenderit nostrum unde quisquam?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Reiciendis nesciunt ad ducimus totam
            amet harum repellat! Voluptatum, nam. Assumenda earum placeat hic ab
            eaque repellendus natus dolor tenetur sapiente totam. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Velit rerum quae
            ducimus et ab sed magnam reiciendis sapiente, natus voluptates
            necessitatibus distinctio aspernatur possimus suscipit alias.
            Distinctio obcaecati iure laudantium.
          </p>
        </article>
      </div>
    </section>
    <nuxt-child/>

  
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';



export default {
  components: { AppHeader, AppFooter },
  name: 'IndexPage',

}
</script>
<style>

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 25px 0px 25px;
}

.hero__photo {
  margin-top: 30px;
width: 50vw;
  border-radius: 15%;
}

.hero__title {
  margin: 3px;

}

.hero__subtitle {
  font-size: 20px;
}

.hero__subtitle2 {
  font-size: 20px;
  margin-top: 5px;
}

.hero__info {
  margin-top: 1em;
  text-align: justify;
}

</style>