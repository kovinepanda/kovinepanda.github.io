<template>
  <div>No content yet</div>
</template>

<script>
import Card from '@/components/card'
import Grid from '@/components/grid'
import MyImage from '@/components/atoms/my-image'

export default {
  components: {
    Card,
    Grid,
    MyImage,
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
