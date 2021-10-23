<template>
  <nuxt-link class="contrast outline" :to="`/tags/${slug}`">
    #{{ slug }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  font-size: small;
  padding: 0.25rem;
  margin-left: 0.25rem;
}
</style>