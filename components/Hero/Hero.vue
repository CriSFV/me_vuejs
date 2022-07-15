<template>
  <section class="generalContainer hero__content" id="home">
    <div class="hero__content__photo">
      <img
        class="hero__photo"
        src="/assets/images/editorimg.jpg"
        alt="this is me"
      />
    </div>
    <h2 class="hero__title">¡¡Hola!!</h2>
    <h2 class="hero__subtitle hero__name">Soy Cris, Front-End Developer</h2>
    <h3 class="hero__subtitle">Creadora de experiencias digitales</h3>

    <article class="hero__info">
      <h5>¡Gracias por haber llegado hasta aquí!</h5>
      <p>
        Apasionada de la vida y de la gente, muchos años gestionando grupos me
        han ayudado a trabajar mejor en equipo, contribuyendo al desarrollo de
        las personas.
      </p>
      <p>
        Me gusta la tecnología y aprender cosas nuevas, y si es en equipo,
        mejor!!
      </p>
      <div class="btn-container">
        <b-button class="hero__btn" v-b-modal.modal-1>Comenzar</b-button>
      </div>
    </article>
    <b-modal
      id="modal-1"
      title="¿Por donde quieres empezar?"
      size="lg"
      hide-footer
      centered
      no-close-on-esc
      no-close-on-backdrop
    >
      <a class="header__link" href="/aboutme"> Cónoceme </a>
      <a class="header__link" href="/projects"> Proyectos </a>
      <a class="header__link" href="/contact"> Contacto </a>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" >
@import '@/assets/styles/hero.scss';
</style>