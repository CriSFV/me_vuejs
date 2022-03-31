<template>
<div>
  <AppHeader/>
  
  <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
  name: 'AboutMe',
  components:{
    AppHeader,
    AppFooter
  }
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