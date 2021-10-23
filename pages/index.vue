<template>
  <grid>
    <aside>
      <img src="~/assets/6033252.jpeg" alt="@urbontaitis" />
      <h1>Mindaugas Urbontaitis</h1>
      <ul>
        <li v-for="contact in contacts" :key="contact.url">
          <a :href="contact.url">
            <fa :icon="contact.icon" />
            {{ contact.label }}
          </a>
        </li>
      </ul>
    </aside>
    <section></section>
  </grid>
</template>

<script>
import Card from '@/components/card'
import Grid from '@/components/grid'

export default {
  components: {
    Card,
    Grid,
  },
  data() {
    return {
      contacts: [
        {
          url: 'https://github.com/urbontaitis',
          icon: ['fab', 'github'],
          label: '@urbontaitis',
        },
        {
          url: 'https://www.linkedin.com/in/murbontaitis/',
          icon: ['fab', 'linkedin'],
          label: '@murbontaitis',
        },
        {
          url: 'https://instagram.com/m.urbo',
          icon: ['fab', 'instagram'],
          label: '@m.urbo',
        },
      ],
    }
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
aside {
  margin-top: 2rem;
  margin-left: 2rem;
}
aside h1 {
  margin-bottom: 0;
}
aside img {
  margin-bottom: 0.25rem;
  max-height: 10rem;
}

aside p {
  margin-bottom: 3rem;
  line-height: 1.25;
}
</style>