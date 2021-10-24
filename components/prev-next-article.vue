<template>
  <div>
    <nuxt-link
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="primary"
    >
      {{ prev.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="primary"
    >
      {{ next.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style scoped>
div {
    text-align: center;
}
div a {
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 0 15px;
  border-left: 2px solid var(--secondary);
}

div a:first-child {
  border-left: none;
}
</style>