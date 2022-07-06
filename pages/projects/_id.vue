<template>
  <!-- // nuxt lleva incluido los parametros, no hay que definirlos. rutas dinamicas las creamos a través de carpetas o ficheros (empieza con _) -->

  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">Title de proyecto:{{ $route.params.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Descripción</div>
        <div class="post-detail">Herramientas utilizadas</div>
      </div>
    </section>
    <section class="post-feedback">
      <p>Ultima actualización</p>
    </section>
  </div>
</template>

<script>
export default {
  /** valida que el id sea un número */
  validate(data) {
    console.log('data', data.params)
    return /^\d+$/.test(data.params.id)
  },
  data() {
    return {
      data_projects: [
        {
          id: 'project4',
          title: 'Buscador de personajes',
          gitHub: 'https://github.com/CriSFV/Rick-Morty-directory',
          gitHubPages: 'https://crisfv.github.io/Rick-Morty-directory/#/',
          img: '/assets/images/project4.png',
          tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT'],
          comment:
            'SPA creada con React con llamada a API externa. Responsive Desing',
        },
        {
          id: 'project3',
          title: 'Buscador de series',
          gitHub: 'https://github.com/CriSFV/Series-Searcher',
          gitHubPages: 'https://crisfv.github.io/Series-Searcher/',
          img: '/assets/images/project3.png',
          tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
          comment:
            'Aplicación creada con JavaScript con llamada a API externa donde puedes buscar tus series favoritas',
        },
        {
          id: 'project2',
          title: 'Adivina el número',
          gitHub: 'https://github.com/CriSFV/Guess-the-number',
          gitHubPages: 'https://crisfv.github.io/Guess-the-number/',
          img: '/assets/images/project2.png',
          tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
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
            'Aplicación aún en construcción creada con React y con petición a API de palabra aleatoria que tienes que tratar de adivinar con el conocido juego del ahorcado.',
        },

        {
          id: 'project6',
          title: 'Awesome profile cards',
          gitHub: 'https://github.com/CriSFV/awesome-profile-cards',
          gitHubPages: 'https://crisfv.github.io/awesome-profile-cards/',
          img: '/assets/images/project6.png',
          tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT'],
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
          tags: ['HTML5', 'CSS3', 'SASS', 'JAVASCRIPT', 'REACT'],
          comment:
            'SPA creada con React en la que añadir y modificar tu lista de clubs.',
        },

        {
          id: 'project1',
          title: 'Maquetación de una web',
          gitHub: 'https://github.com/CriSFV/Maquetacion-de-una-web',
          gitHubPages: 'https://crisfv.github.io/Maquetacion-de-una-web/',
          img: '/assets/images/project1.png',
          tags: ['HTML5', 'CSS3', 'SASS', 'GULP'],
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
      ],
    }
  },
}
</script>

<style>
.single-post-page {
  margin: 40px 0;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  height: 100vh;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>