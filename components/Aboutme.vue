<template>
  <div class="generalContainer">
    <section>
      <h1>Esta soy yo:</h1>
      <p>
        Estudié Educación Social hasta que, haciendo las prácticas de la
        carrera, vi que no era lo mío, así que me puse a trabajar en el sector
        de atención al cliente, donde mayoritariamente he estado gestionando
        equipos en diferentes campañas y a distintos niveles.
      </p>
      <p>
        Después de unos años allí, me dí cuenta de que necesitaba mejorar mi
        formación y ampliar horizontes.
      </p>
      <p>
        Siempre me había llamado la atención el tema de la programación y, tras
        dejarme aconsejar por amigos que conocían mis expectativas y
        capacidades, encontré Adalab, realicé su bootcamp y aquí estoy hoy,
        reinventada como Desarrolladora Front-End
      </p>
    </section>
    <section class="aboutMe-section">
      <h3>Habilidades:</h3>
      <ul class="tagList">
        <li v-for="(tag, idxTag) in icons" :key="idxTag" class="tagList-item">
          <span class="tag">
            <i :class="tag.icon" class="tagIcon"> </i>
          </span>
          <span> {{ tag.name }} </span>
        </li>
      </ul>
    </section>
    <button
      download
      @click="downloadPdf"
      href="/Pdfs/cfv_CV_Spanish.pdf"
      class="btn-principal"
    >
      Pulsa para ver CV
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: 'fas fa-code', name: 'Code' },
        { icon: 'fab fa-html5', name: 'HTML' },
        { icon: 'fab fa-css3', name: 'CSS3' },
        { icon: 'fab fa-sass', name: 'SASS' },
        { icon: 'fab fa-bootstrap', name: 'BOOTSTRAP' },
        { icon: 'fab fa-js-square', name: 'JavaScript' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fab fa-vuejs', name: 'Vue' },
        { icon: 'fab fa-git-square', name: 'Git' },
        { icon: 'fab fa-github', name: 'GitHub' },
        { icon: 'fab fa-gitkraken', name: 'Gitkraken' },
        { icon: 'fab fa-slack', name: 'VsCode' },
      ],
    }
  },
  methods: {
    downloadPdf() {
      window.open('/Pdfs/cfv_CV_Spanish.pdf')
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
    padding: 30px
    display: flex
    flex-wrap: wrap
    .tagList-item
        line-height: 30px
        width: 150px
        height: 50px
        padding: 10px
        background-color: #EBA3C9
        margin: 10px
        border-radius: 20%
        border: 1px solid #e24f9e
        &:hover
            transform: scale(1.2)

.tagIcon
    font-size: 1.5rem
    margin-right: 10px
</style>