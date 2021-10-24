<template>
  <article>
    <hgroup>
      <h1>{{ article.title }}</h1>
      <h2>{{ article.description }}</h2>
    </hgroup>
    <small>Posted {{ article.updatedAt | formatDate }}.</small>
    <lazy-image :src="article.img" :alt="article.alt" />
    <nuxt-content :document="article" />
    <hr />
    <tag v-for="tag in article.tags" :slug="tag" :key="tag" />
    <hr />

    <prev-next-article :next="next" :prev="prev" />
  </article>
</template>

<script>
import prevNextArticle from '~/components/prev-next-article.vue'
// import { AUTHOR } from '@/data/contacts'

export default {
  components: { prevNextArticle },
  layout: 'blog',
  async asyncData({ $content, params, error }) {
    try {
      const [article] = await $content('blog', { deep: true }).fetch()

      const [prev, next] = await $content('blog')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()      
      return { article, prev, next }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  // computed: {
  //   author() {
  //     return this.article?.author || AUTHOR
  //   },
  // },
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
