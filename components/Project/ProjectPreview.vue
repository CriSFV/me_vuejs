<template>
  <div class="post-project">
    <a :href="'/projects/' + [id]" class="post-preview">
      <article class="card">
        <h2 class="card__title">{{ title }}</h2>
        <img :src="srcImage" :alt="'Project'[title]" class="card__thumbnail" />
        <p class="post-content">{{ previewText }}</p>
      </article>
    </a>
  </div>
</template>

<script>
// previiew projects
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    srcImage: {
      type: String,
      default: '/assets/images/editorimg.jpg',
    },
  },
  mounted() {
    console.log(this.id, this.title, this.previewText)
  },
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/projects.sass'
</style>
