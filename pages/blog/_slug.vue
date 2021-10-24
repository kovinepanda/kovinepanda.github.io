<template>
  <article>
    <hgroup>
      <h1>{{ article.title }}</h1>
      <h2>{{ article.description }}</h2>
    </hgroup>
    <small>Posted {{ article.updatedAt | formatDate }}.</small>
    <lazy-image :src="article.img" :alt="article.alt" />
    <table-of-content :content="article.toc" />
    <nuxt-content :document="article" />
    <hr />
    <tag v-for="tag in article.tags" :slug="tag" :key="tag" />
    <hr />

    <prev-next-article :next="next" :prev="prev" />
  </article>
</template>

<script>
import { AUTHOR } from '~/data/contacts'
import getSiteMeta from '@/utils/get-site-meta'

export default {
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
  computed: {
    author() {
      return this.article?.author || AUTHOR
    },
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://www.urbontaitis.lt/blog/${this.$route.params.slug}`,
        mainImage: this.article.img,
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.author.name },
        // { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.urbontaitis.lt/blog/' + this.article.slug,
        },
      ],
    }
  },
}
</script>
