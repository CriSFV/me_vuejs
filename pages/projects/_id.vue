<template>
    <!-- // nuxt lleva incluido los parametros, no hay que definirlos. rutas dinamicas las creamos a través de carpetas o ficheros (empieza con _) -->
    <h1>Pagina de proyecto con ID {{$route.params.id}} </h1> 
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