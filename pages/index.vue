<template>
  <div>
    <AppHeader />

    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__content__photo">
          <img className="hero__photo" src="#" alt="this is me" />
        </div>
        <h1 className="hero__title">¡¡Hola!!</h1>
        <h2 className="hero__subtitle">Soy Yo</h2>

        <h3 className="hero__subtitle2">Titulo descripción</h3>
        <article className="hero__info">
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
import AboutMe from '../components/AboutMe.vue';


export default {
  components: { AppHeader, AppFooter, AboutMe },
  name: 'IndexPage',

}
</script>

<style lang="scss" >

.hero {
  height: 100vh;
}
.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 25px 80px 25px;
}

.hero__photo {
  margin-top: 30px;
  width: 8em;
  border: 2px solid black;
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
</style>>

 