<template>
    <!-- // nuxt lleva incluido los parametros, no hay que definirlos. rutas dinamicas las creamos a través de carpetas o ficheros (empieza con _) -->
    
<div class="single-post-page">
    <section class="post">
        <h1 class="post-title">Pagina de proyecto con ID {{$route.params.id}} </h1> 
        <div class="post-details">
            <div class="post-detail">Descripción</div>
            <div class="post-detail">Herramientas utilizadas</div>
        </div>
    </section>
    <section class="post-feedback">
        <p>Ultima actualización  </p>
    </section>
    

</div>


</template>

<script>
export default {
    /** valida que el id sea un número */
        validate(data){
            console.log(data)
            return /^\d+$/.test(data.params.id)
            
        }
}
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
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