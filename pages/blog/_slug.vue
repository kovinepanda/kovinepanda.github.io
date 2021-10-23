<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <article-image-image :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ article.updatedAt }}</p>

    <nuxt-content :document="article" />
  </article>
</template>


<script>
import ArticleImage from '@/components/atoms/article-image'

export default {
  layout: 'blog',
  components: {
    ArticleImage,
  },
  async asyncData({ $content, params, error }) {
    try {
      const articlePath = `/blog/${params.slug}`
      const [article] = await $content('blog', { deep: true })
        .where({ dir: articlePath })
        .fetch()
      return { article }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.urbontaitis.lt' + this.article.dir,
        },
      ],
    }
  },
}
</script>