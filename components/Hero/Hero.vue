<template>
  <div class="generalContainer hero__content" id="home">
    <section class="hero__content_presentation">
      <div class="hero__content__photo">
        <img
          class="hero__photo fade-in"
          src="/assets/images/editorimg.jpg"
          alt="this is me"
        />
      </div>
      <div>
        <h2 class="hero__title">¡¡Hola!!</h2>
        <h2 class="hero__subtitle hero__name fade-in">
          Soy Cris, Front-End Developer
        </h2>
        <h3 class="hero__subtitle">Creadora de experiencias digitales</h3>
      </div>
    </section>

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
        <b-button class="btn-principal" v-b-modal.modal-1>Comenzar</b-button>
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
      <ul class="list_decoration column-row">
        <li class="header__link">
          <a href="/aboutme" class="nav_link"> Cónoceme </a>
        </li>
        <li class="header__link">
          <a href="/projects" class="nav_link"> Proyectos </a>
        </li>
        <li class="header__link">
          <a href="/contact" class="nav_link"> Contacto </a>
        </li>
      </ul>
    </b-modal>
  </div>
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