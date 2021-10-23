<template>
  <p>Link to the <nuxt-link :to="`/blog`">Blog</nuxt-link></p>
</template>

<script>
export default {
  layout: 'blog',
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