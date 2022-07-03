<template>
  <section class="hero" id="home">
    <div class="hero__content">
      <div class="hero__content__photo">
        <img
          class="hero__photo"
          src="/assets/images/editorimg.jpg"
          alt="this is me"
        />
      </div>
      <h2 class="hero__title">¡¡Hola!!</h2>
      <h1 class="hero__subtitle">Soy Cris F. Valverde</h1>
      <h3 class="hero__subtitle2">Front-End Developer</h3>

      <article class="hero__info">
        <p>
          Apasionada de la vida y de la gente. Muchos años gestionando grupos me
          han ayudado a trabajar mejor en equipo, contribuyendo al desarrollo de
          las personas.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/hero.scss';
</style>