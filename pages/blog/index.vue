<template>
  <grid>
    <card v-for="article in articles" :key="article.dir">
      <template v-slot:header>
        <hgroup>
          <h1>
            {{ article.title }}
          </h1>
          <h2>
            {{ article.description }}
          </h2>
        </hgroup>
      </template>
      <template v-slot:body>
        <figure>
          <article-image :src="article.img" :alt="article.alt" />
        </figure>
      </template>
      <template v-slot:footer>
        <p>
          <span v-for="tag in article.tags" :key="tag" class="tag">
            <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          </span>
        </p>
        <nuxt-link :to="article.dir">Read more</nuxt-link>
      </template>
    </card>
  </grid>
</template>

<script>
import Card from '@/components/card'
import Grid from '@/components/grid'
import ArticleImage from '@/components/atoms/article-image'

export default {
  layout: 'blog',
  components: {
    ArticleImage,
    Card,
    Grid,
  },
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