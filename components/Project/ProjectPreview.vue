<template>
  <div class="post-project">
    <nuxt-link :to="'/projects/' + id" class="post-preview">
      <article class="card">
        <h2 class="card__title">{{ title }}</h2>
        <img :src="srcImage" :alt="'Project'[title]" class="card__thumbnail" />
        <p class="post-content">{{ previewText }}</p>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
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
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    srcImage: {
      type: String,
      default: '/assets/images/editorimg.jpg',
    },
  },
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/projects.sass'
</style>
