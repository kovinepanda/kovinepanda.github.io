<template>
  <grid>
    <aside>
      <lazy-image src="/assets/6033252.jpeg" alt="@urbontaitis" />
      <h3>Mindaugas Urbontaitis</h3>

      <ul>
        <li v-for="loc in locations" :key="loc.url">
          <a :href="loc.url">
            <fa :icon="loc.icon" />
            {{ loc.label }}
          </a>
        </li>
      </ul>
      <ul>
        <li v-for="contact in contacts" :key="contact.url">
          <a :href="contact.url" target="_blank">
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
import { CONTACTS } from '@/data/contacts.js'

export default {
  data() {
    return {
      locations: [
        {
          url: '#',
          icon: ['fas', 'map-marker'],
          label: 'Vilnius, Lithuania',
        },
        {
          url: 'https://www.urbontaitis.lt',
          icon: ['fas', 'link'],
          label: 'urbontaitis.lt',
        },
      ],
      contacts: CONTACTS
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
aside .picture {
  margin-bottom: 0.25rem;
  max-height: 10rem;
  max-width: 10rem;
  border-radius: 50%;
}

aside p {
  margin-bottom: 3rem;
  line-height: 1.25;
}

aside ul li {
  font-size: medium;
  padding: 0;
}
</style>