<template>
  <div>
    <section class="GoBack_container"><GoBack /></section>
    <hr />
    <section class="all_about_me extra_container">
      <article class="bocadillo">
        <p>Equipo</p>
      </article>
      <article class="bocadillo">
        <p>Adaptación a los cambios</p>
      </article>
      <article class="bocadillo">
        <p>Organización</p>
      </article>
      <article class="bocadillo">
        <p>Filosofía Agile</p>
      </article>
      <div class="all_about_photo_container">
        <img
          class="my_photo fade-in"
          src="/assets/images/editorimg.jpg"
          alt="me"
        />
      </div>
      <article class="bocadillo">
        <p>Autonomía</p>
      </article>
      <article class="bocadillo">
        <p>Marco-Scrum</p>
      </article>
      <article class="bocadillo">
        <p>Comunicación efectiva</p>
      </article>
      <article class="bocadillo">
        <p>Planificación</p>
      </article>
    </section>
    <section>
      <div class="center my-4 all_about_btn">
        <button
          v-show="showExperience"
          @click.prevent="showProfessionalExperience"
          class="secondary-btn"
        >
          Ver experiencia profesional
        </button>
      </div>
    </section>
    <section v-show="!showExperience" class="extra_container">
      <h3>Experiencia profesional:</h3>
      <ul>
        <li>
          <span><i>Febrero 2022 - Actualmente</i></span>
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
          <span><i>Abril 2021 - Mayo 2022</i></span>
          <h6><b>TECNICO RRHH,</b> WERKHAUS SL SCS</h6>
          <p>
            PNL certificado de profesionalidad nivel 3. Técnico de recursos
            humanos. Gestión y administración del personal
          </p>
        </li>
        <li>
          <span><i>Julio 2005 - Diciembre 2019</i></span>
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
          class="secondary-btn"
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
.extra_container
  @media (min-width: 768px)
    padding: 1rem 3rem
  @media (min-width: 992px)
    padding: 1rem 5rem
  @media (min-width: 1200px)
    padding: 1rem 8rem
  @media (min-width: 1400px)
    padding: 1rem 10rem

.all_about_me
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  @media(min-width: 576px)
    display: grid
    grid-template-columns: 1fr 3fr 1fr
    grid-template-rows: 1fr 3fr 1fr
    gap: 4%
    align-self: center
    align-items: center
    text-align: center
.all_about_photo_container
  grid-column: 2/3
  grid-row: 2/3
.my_photo
  width: 200px
  height: 200px
  border-radius: 50%
.bocadillo
  padding: 10px
  border: 1px solid #202234
  width: fit-content
  margin: 5px auto
  border-radius: 20px
  box-shadow: 1px 1px 7px rgba(0,0,0,0.5)
  animation: cascade 5s linear
.bocadillo:nth-child(8)
  animation-delay: 0.1s
.bocadillo:nth-child(7)
  animation-delay: 0.2s
.bocadillo:nth-child(6)
  animation-delay: 0.4s
.bocadillo:nth-child(5)
  animation-delay: 0.6s
.bocadillo:nth-child(4)
  animation-delay: 0.1s
.bocadillo:nth-child(3)
  animation-delay: 0.2s
.bocadillo:nth-child(2)
  animation-delay: 0.4s
.bocadillo:nth-child(1)
  animation-delay: 0.6s
.all_about_btn
  animation: fade-in 5s ease
</style>