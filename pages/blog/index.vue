<template>
  <div>
    <h1>Blog</h1>
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