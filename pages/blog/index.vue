<template>
  <grid>
    <section v-for="article in articles" :key="article.path">
      <nuxt-link :to="article.path">
        <lazy-image :src="article.img" :alt="article.alt" />
      </nuxt-link>
      <p>
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        <br />
        <small>{{ article.description }}</small>
        <br />
        <small>{{ article.updatedAt | formatDate }}</small>
      </p>
    </section>
  </grid>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content('blog').fetch()
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