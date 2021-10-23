<template>
  <grid>
    <card v-for="article in articles" :key="article.dir">
      <template v-slot:header>
        <hgroup>
          <h1>
            <nuxt-link :to="article.dir">{{ article.title }}</nuxt-link>
          </h1>
          <h2>
            {{ article.description }}
          </h2>        
        </hgroup>
        <p>Posted {{ article.updatedAt | formatDate }}</p>
      </template>
      <template v-slot:body>
        <nuxt-link :to="article.dir">
          <lazy-image :src="article.img" :alt="article.alt" />
        </nuxt-link>
      </template>
      <template v-slot:footer>
        <tag v-for="tag in article.tags" :slug="tag" :key="tag" />
      </template>
    </card>
  </grid>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content('blog', { deep: true }).fetch()
      return { articles }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: 'Mindaugas Urbontaitis blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mindaugas Urbontaitis personal blog',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.urbontaitis.lt',
        },
      ],
    }
  },
}
</script>

<style scoped>
.tag {
  margin-right: 0.5rem;
  font-size: small;
}
</style>