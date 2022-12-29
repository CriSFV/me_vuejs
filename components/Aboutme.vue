<template>
  <div>
    <section class="GoBack_container"><GoBack /></section>
    <section class="mb-5">
      <h1 class="mb-4">Esta soy yo:</h1>
      <p>
        Estudié Educación Social hasta que, haciendo las prácticas de la
        carrera, vi que no era lo mío, así que me puse a trabajar en el sector
        de atención al cliente, donde mayoritariamente he estado gestionando
        equipos en diversas campañas y a distintos niveles.
      </p>
      <p>
        Después de unos años allí, quise mejorar mi formación y ampliar
        horizontes, surgió una oportunidad y no la dejé escapar.
      </p>
      <p>
        Siempre me había llamado la atención el tema de la programación y, tras
        dejarme aconsejar por amigos que conocían mis expectativas y
        capacidades, encontré
        <a href="https://www.adalab.es" target="_blank"><u>Adalab</u></a
        >, realicé su bootcamp y aquí estoy hoy, reinventada como Desarrolladora
        Front-End y dispuesta a aportar valor en cualquier equipo en el que me
        encuentre.
      </p>
    </section>
    <section class="mb-2">
      <h3>Aptitudes:</h3>
      <ul>
        <li>Alta capacidad de trabajo en equipo</li>
        <li>Trabajo bajo presión y con tiempos limitados</li>
        <li>Organización y adaptación a los cambios</li>
        <li>Autonomía</li>
        <li>Comunicación efectiva</li>
        <li>Filosofía Agile y marco de trabajo Scrum</li>
        <li>
          Planificación y gestión eficiente de tiempo y grandes volumenes de
          trabajo
        </li>
      </ul>
    </section>
    <section class="">
      <!-- <h3>Competencias:</h3> -->
      <div class="center my-3">
        <button
          v-show="showExperience"
          @click.prevent="showProfessionalExperience"
          class="secondary-btn"
        >
          Ver experiencia provesional
        </button>
      </div>
      <ul class="tagList">
        <li v-for="(tag, idxTag) in icons" :key="idxTag" class="tagList-item">
          <span class="tag">
            <i :class="tag.icon" class="tagIcon"> </i>
          </span>
          <span> {{ tag.name }} </span>
        </li>
      </ul>
    </section>
    <section v-show="!showExperience" class="">
      <h3>Experiencia profesional:</h3>
      <ul>
        <li>
          <span>Febrero 2022 - Actualmente</span>
          <h6><b>FRONT-END DEVELOPER JR</b>- CEPEISA</h6>
          <p>
            Desarrollo front-end de nueva aplicación de la compañia. Realización
            de maquetación responsive y diferentes funcionalidades.
          </p>
          <p>
            Stack utilizado: HTML5, CSS, SASS, Bootstrap, Element.io, VUE, Nuxt
          </p>
        </li>
        <li class="my-4">
          <span>Abril 2021 - Mayo 2022</span>
          <h6><b>TECNICO RRHH,</b> WERKHAUS SL SCS</h6>
          <p>
            PNL certificado de profesionalidad nivel 3. Técnico de recursos
            humanos. Gestión y administración del personal
          </p>
        </li>
        <li>
          <span>Julio 2005 - Diciembre 2019</span>
          <h6>
            <b
              >TEAM LEADER SENIOR (2017-2019), TEAM LEADER(2009-2017), TRAFFIC
              CONTROLER (2006-2009)</b
            >
            TRANSCOM WW
          </h6>
          <p>
            Gestión de equipos a diferentes niveles y realización de tareas de
            BU del responsable del servicio. Elaboración de previsiones,
            informes a distintos niveles y planes de acción para alcanzar los
            objetivos. Control del personal y seguimiento de agentes. Reparto de
            tareas de trabajo
          </p>
        </li>
      </ul>
      <nav class="center">
        <a
          href="/assets/Pdfs/cfv_CV_Spanish.pdf"
          class="btn-secondary"
          target="_blank"
        >
          Ver CV en Pdf
        </a>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    GoBack: () => import('@/components/Navigation/goback'),
  },
  data() {
    return {
      showExperience: true,
      icons: [
        { icon: 'fas fa-code', name: 'Code' },
        { icon: 'fab fa-html5', name: 'HTML' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        { icon: 'fab fa-vuejs', name: 'Vue' },
        { icon: 'fab fa-css3', name: 'CSS3' },
        { icon: 'fab fa-sass', name: 'SASS' },
        { icon: 'fab fa-bootstrap', name: 'BOOTSTRAP' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fab fa-git-square', name: 'Git' },
        { icon: 'fab fa-github', name: 'GitHub' },
        { icon: 'fab fa-gitkraken', name: 'Gitkraken' },
        { icon: 'fab fa-slack', name: 'VsCode' },
      ],
    }
  },
  methods: {
    showProfessionalExperience() {
      this.showExperience = false
    },
    downloadPdf() {
      window.open('/assets/Pdfs/cfv_CV_Spanish.pdf')
    },
  },
}
</script>

<style lang="sass">
@import '@/assets/styles/main.sass'
.aboutMe-section
  margin-top: 100px
.tagList
  list-style-type: none
  display: flex
  flex-direction: column
  align-items: center
  @media(min-width: 400px)
    flex-direction: row
    justify-content: center
    flex-wrap: wrap
  .tagList-item
    display: flex
    justify-content: center
    align-items: center
    width: 150px
    padding: 5px
    background-color: $principal-color
    margin: 10px
    border-radius: 20px
    border: 1px solid $principal-light
    transition: all ease .50s
    color: $principal-light
    &:hover
      transform: scale(1.02)
.tagIcon
  font-size: 1.5rem
  margin-right: 10px
</style>