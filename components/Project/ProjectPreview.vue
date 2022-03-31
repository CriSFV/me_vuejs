<template>
<div>
         <nuxt-link :to="'/projects/' + 1" class="post-preview">
        <article >
          <div class="post-thumbnail"> </div>
            <div class="post-content">
              <h1>Titulo project</h1>
              <h1>Descripción</h1>
           
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/projects/' + 2" class="post-preview">
        <article >
          <div
            class="post-thumbnail"
            style="background-image: '~/assets/images/editorimg.jpg'"
          >  </div>
            <div class="post-content">
              <h1>Titulo project</h1>
              <h1>Descripción</h1>
            </div>
        
        </article>
      </nuxt-link>
</div>

</template>

<style>

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-color: lightblue;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #eee1bb;
  text-decoration: none;
  color:#273bec;
}
</style>