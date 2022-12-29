<template>
  <div>
    <section class="GoBack_container"><GoBack /></section>
    <section class="intro">
      <!-- <span>Selecciona el proyecto que quieras</span> -->
      <label for="selectTag">
        <b-form-select v-model="selected" :options="tagOptions"></b-form-select>
      </label>
    </section>
    <section class="featured-posts">
      <!-- <ProjectPreview :allProjects="data_projects" /> -->
      <div v-for="(item, indx) of projectsFiltered" :key="indx">
        <ProjectPreview
          :id="item.id"
          :title="item.title"
          :previewText="item.comment"
          :srcImage="item.img"
          @selectProject="selectProject"
          v-b-modal.modal1
        />
      </div>
    </section>
    <b-modal
      id="modal1"
      :title="projectSelected.title"
      size="lg"
      no-close-on-esc
      hide-footer
      centered
    >
      <div class="body_modal">
        <section class="body_modal_description">
          <div class="body_modal_list">
            <p>Herramientas utilizadas:</p>
            <ul>
              <li v-for="(tag, idtag) in projectSelected.tags" :key="idtag">
                {{ tag }}
              </li>
            </ul>
          </div>
          <img
            :src="projectSelected.img"
            :alt="'Imagen proyecto'[projectSelected.title]"
            class="modal_img"
          />
        </section>
        <section>
          <p class="my-3">
            <i>{{ projectSelected.comment }}</i>
          </p>
        </section>
        <nav class="m-2">
          <p>
            Consultar repositorio en GitHub
            <a :href="projectSelected.gitHub" target="_blank"> aquí</a>
          </p>
          <p v-if="projectSelected.gitHubPages">
            Ver web
            <a :href="projectSelected.gitHubPages" target="_blank"> aquí</a>
          </p>
        </nav>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {
    GoBack: () => import('@/components/Navigation/goback'),
  },
  data() {
    return {
      selected: 'all',
      projectSelected: {},
      projectsFiltered: [],
      tagOptions: [
        { value: 'all', text: 'Selecciona una opción' },
        'HTML5',
        'CSS3',
        'SASS',
        'JAVASCRIPT',
        'REACT',
        'VUEJS',
      ],
      data_projects: [
        {
          id: 'project3',
          title: 'Buscador de series',
          gitHub: 'https://github.com/CriSFV/Series-Searcher',
          gitHubPages: 'https://crisfv.github.io/Series-Searcher/',
          img: '/assets/images/project3.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'JAVASCRIPT'],
          comment:
            'Aplicación creada con JavaScript con llamada a API externa donde puedes buscar tus series favoritas',
        },
        {
          id: 'project4',
          title: 'Buscador de personajes',
          gitHub: 'https://github.com/CriSFV/Rick-Morty-directory',
          gitHubPages: 'https://crisfv.github.io/Rick-Morty-directory/#/',
          img: '/assets/images/project4.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'JAVASCRIPT', 'REACT'],
          comment:
            'SPA creada con React con llamada a API externa. Responsive Desing',
        },
        {
          id: 'project2',
          title: 'Adivina el número',
          gitHub: 'https://github.com/CriSFV/Guess-the-number',
          gitHubPages: 'https://crisfv.github.io/Guess-the-number/',
          img: '/assets/images/project2.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'JAVASCRIPT'],
          comment:
            'Aplicación creada con JavaScript en la que tienes que tratar de adivinar el número aleatorio',
        },
        {
          id: 'project5',
          title: 'Juego del ahorcado',
          gitHub: 'https://github.com/CriSFV/Hangmangame',
          gitHubPages: 'https://crisfv.github.io/Hangmangame/',
          img: '/assets/images/project5.png',
          tags: ['JAVASCRIPT', 'REACT'],
          comment:
            'Aplicación con maquetación heredada, funcionalidad realizada con React. Petición a API de palabra aleatoria que tienes que tratar de adivinar con el conocido juego del ahorcado.',
        },

        {
          id: 'project6',
          title: 'Awesome profile cards',
          gitHub: 'https://github.com/CriSFV/awesome-profile-cards',
          gitHubPages: 'https://crisfv.github.io/awesome-profile-cards/',
          img: '/assets/images/project6.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'JAVASCRIPT'],
          comment:
            'Aplicación responsive creada con JavaScript en la que puedes crear una tarjeta personalizada, creado en equipo bajo filosofía Agile',
        },
        {
          id: 'project8',
          title: 'Awesome profile cards',
          gitHub: 'https://github.com/CriSFV/project-promo-n-module-3-team-2',
          gitHubPages: 'https://sqlito-johnson.herokuapp.com/',
          img: '/assets/images/project8.jpg',
          tags: ['REACT', 'NODEJS'],
          comment:
            'Migración a ReactJS de código JavaScript heredado, utilizando también NodeJs y SQLite para la creación de tarjetas de contacto compartibles. Proyecto creado en equipo bajo filosofía Agile',
        },

        {
          id: 'project7',
          title: 'My favorites clubs',
          gitHub: 'https://github.com/CriSFV/My-favorites-clubs',
          gitHubPages: 'https://crisfv.github.io/My-favorites-clubs/',
          img: '/assets/images/project7.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'JAVASCRIPT', 'REACT'],
          comment:
            'SPA creada con React en la que añadir y modificar tu lista de clubs.',
        },

        {
          id: 'project1',
          title: 'Maquetación de una web',
          gitHub: 'https://github.com/CriSFV/Maquetacion-de-una-web',
          gitHubPages: 'https://crisfv.github.io/Maquetacion-de-una-web/',
          img: '/assets/images/project1.png',
          tags: ['HTML5', 'CSS3', 'SCSS', 'GULP'],
          comment:
            'Maquetación de una web responsive en equipo bajo filosofía agile',
        },
        {
          id: 'project9',
          title: 'Guess the pokemon',
          gitHub: 'https://github.com/CriSFV/Poke-game',
          gitHubPages: 'https://vue-pok.netlify.app/',
          img: '/assets/images/project9.jpg',
          tags: ['HTML5', 'CSS3', 'VUEJS'],
          comment: 'Proyecto creado como ejercicio de aprendizaje con VUE',
        },
        {
          id: 'project10',
          title: 'This is me',
          gitHub: 'https://github.com/CriSFV/this_is_me',
          gitHubPages: '',
          img: '/assets/images/project10.jpg',
          tags: ['HTML5', 'SCSS', 'SASS', 'VUEJS', 'BOOTSTRAP'],
          comment: 'Nuevo portfolio creado con VUEJS',
        },
      ],
    }
  },
  mounted() {
    console.log('data_projects:', this.data_projects)
    this.filterProjects()
  },
  watch: {
    selected() {
      this.filterProjects()
    },
  },

  methods: {
    filterProjects() {
      if (this.selected === 'all') {
        this.projectsFiltered = this.data_projects
      } else {
        this.projectsFiltered = this.data_projects.filter((x) =>
          x.tags.includes(this.selected)
        )
      }
    },
    selectProject(item) {
      console.log(item)
      this.projectSelected = this.data_projects.find((x) => x.id === item)
    },
  },
}
</script>

<style lang="sass">
.GoBack_container
  margin: 15px
.intro
  text-align: center
// .intro span
//   position: absolute
//   left: 5%
//   width: 90%
//   color: #413b42
//   padding: 10px
//   border-radius: 20px
//   box-shadow: 3px 3px 3px black
//   box-sizing: border-box
//   border: 1px solid black
//   font-size: 1.2rem
//   @media (min-width: 768px)
//     font-size: 2rem
.featured-posts
  display: flex
  padding: 20px
  box-sizing: border-box
  flex-wrap: wrap
  align-items: center
  justify-content: center
.body_modal
  display: flex
  flex-direction: column
  width: 100%
  padding: 0 30px
.body_modal_description
  display: flex
  flex-direction: column
  align-items: center
  @media(min-width: 576px)
    flex-direction: row
    justify-content: space-around
.modal_img
  width: 175px
  border-radius: 5px
</style>