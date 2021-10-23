<template>
  <div class="posts">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <div v-for="article in articles" :key="article.dir">
      <h3 class="heading">{{ article.title }}</h3>
      <p>{{ article.description }}</p>
      <p class="tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">
          <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          &nbsp;
        </span>
      </p>
      <nuxt-link :to="article.dir">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content('blog', { deep: true })
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