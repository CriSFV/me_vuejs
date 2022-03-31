// /** projects general page */

<template>
  <div class="home-page">
    <section class="intro">
      <h1>project general page:solo principal</h1>
    </section>
    <section class="featured-post">
     <ProjectPreview/>
    </section>
  </div>
</template>


<script>
import ProjectPreview from '~/components/Project/ProjectPreview.vue'
export default {
  components:{
    ProjectPreview
  }
}
</script>

<style>
.intro {
  height: 30px;
  margin: 40px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: #eee1bb;
   background-image: linear-gradient(#273bec, rgb(58, 58, 52));
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>