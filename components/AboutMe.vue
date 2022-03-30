<template>
        <main>
 <section className='hero' id='home'>
      <div className='hero__content'>
        <div className='hero__content__photo'>
          <img className='hero__photo' src={photo} alt='this is me' />
        </div>
        <h1 className='hero__title'>¡¡Hola!! </h1>
        <h2 className='hero__subtitle'>Soy Cris F. Valverde</h2>

        <h3 className='hero__subtitle2'>Jr. Front-End Developer</h3>
        <article className='hero__info'>
          <p>
            Apasionada de la vida y de la gente. Muchos años gestionando grupos
            me han ayudado a trabajar mejor en equipo, contribuyendo al
            desarrollo de las personas.
          </p>
        </article>
 
      </div>
    </section>
    </main>
</template>

<script>

export default {
  name:'AboutMe',

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