<template>
  <div>
    <h1>Tags: {{ $route.params.slug }}</h1>
    <grid>
      <blog-item
        v-for="article in articles"
        :article="article"
        :key="article.path"
      />
    </grid>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content('blog')
        .where({ tags: { $contains: params.slug } })
        .fetch()
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
      title: 'Tags',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mindaugas Urbontaitis personal blog tags',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.urbontaitis.lt/tags',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* article {
  display: flex;
  justify-content:space-evenly;
} */
</style>