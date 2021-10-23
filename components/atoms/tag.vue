<template>
  <nuxt-link role="button" class="outline" :to="`/tags/${slug}`">
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
  min-width: 0.5rem;
  padding: 0.25rem;
  margin-left: 0.25rem;
}
</style>