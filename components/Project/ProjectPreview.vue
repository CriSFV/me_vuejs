<template>
  <div class="post-project">
    <article class="card" @click="selectProject(id)">
      <h2 class="card__title">{{ title }}</h2>
      <img :src="srcImage" :alt="'Project'[title]" class="card__thumbnail" />
      <p class="post-content">{{ previewText }}</p>
    </article>
  </div>
</template>

<script>
// previiew projects
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
    },
    thumbnail: {
      type: String,
    },
    srcImage: {
      type: String,
      default: '/assets/images/editorimg.jpg',
    },
  },
  methods: {
    selectProject(item) {
      this.$emit('selectProject', item)
    },
  },
}
</script>


<style lang="sass" scoped>
@import '@/assets/styles/projects.sass'
.post-preview
  box-shadow: 0 2px 2px #ccc
  width: 50%

a
  text-decoration: none
  color: black
</style>
