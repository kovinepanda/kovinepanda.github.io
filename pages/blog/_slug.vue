<template>
    <card>
      <template v-slot:header>
        <hgroup>
          <h1>{{ article.title }}</h1>
          <p>Posted {{ article.updatedAt | formatDate }}.</p>      
        </hgroup>
      </template>
      <template v-slot:body>        
        <lazy-image :src="article.img" :alt="article.alt" />        
        <nuxt-content :document="article" />
      </template>  
      <template v-slot:footer>
        <tag v-for="tag in article.tags" :slug="tag" :key="tag" />
      </template>
    </card>
</template>

<script>
export default {
  layout: 'blog',
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
