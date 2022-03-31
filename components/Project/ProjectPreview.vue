<template>
  <div class="post-project">

    <nuxt-link :to="'/projects/' + id" class="post-preview" >
      <article style="margin:10px">
        <div class="post-thumbnail"></div>
        <div class="post-content">
          <h1>{{ title }}</h1>
          <h1>{{ previewText }}</h1>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
     required: true,
    },
    previewText: { 
        type: String, 
        required: true
    },
    thumbnail: { 
        type: String, 
        required: false 
    },
  },
}
</script>

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
  background-image: url(~assets/images/editorimg.jpg);
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
  color: #273bec;
}
</style>