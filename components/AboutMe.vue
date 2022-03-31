<template>
  <main>
    <section class="hero" id="home">
      <div class="hero__content">
        <div class="hero__content__photo">
          <img class="hero__photo" src="{photo}" alt="this is me" />
        </div>
        <h1 class="hero__title">¡¡Hola!!</h1>
        <h2 class="hero__subtitle">Soy Cris F. Valverde</h2>

        <h3 class="hero__subtitle2">Jr. Front-End Developer</h3>
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
  </main>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>


<style>
.hero {
  height: 100vh;
}
.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 25px 80px 25px;
  @media (min-width: 768px) {
    padding: 70px 150px 80px 150px;
  }
}

.hero__photo {
  margin-top: 30px;
  width: 8em;
  border: 2px solid black;
  border-radius: 15%;
}

.hero__title {
  margin: 3px;
  animation-duration: 3s;
  animation-name: intro;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}

.hero__subtitle {
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
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