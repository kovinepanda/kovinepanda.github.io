<template>
  <nav>
    <ul>
      <li v-for="link of content" :key="link.id">
        <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
}
</script>