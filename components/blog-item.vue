<template>
  <section>
    <nuxt-link :to="article.path">
      <lazy-image :src="article.img" :alt="article.alt" />
    </nuxt-link>
    <div>
      <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      <br />
      <small>{{ article.description }}</small>
      <br />
      <footer>
        <tag v-for="tag in article.tags" :slug="tag" :key="tag" />
        <small class="article__date">
          {{ article.updatedAt | formatDate }}
        </small>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>


<style scoped>
section {
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);  
}
section > div {
  margin: var(--spacing) var(--spacing);
}

section > div > small {
  font-size: small;
}

.article__date {
  color: var(--secondary);
  float: right;
  font-size: small;
}
</style>