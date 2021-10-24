<template>
  <nav class="container-fluid">
    <ul>
      <li>
        <nuxt-link v-if="!homepage" :to="`/`" class="contrast">
          <avatar>MU</avatar>
        </nuxt-link>
      </li>
    </ul>
    <ul>
      <li><nuxt-link class="secondary" :to="`/`">Home</nuxt-link></li>
      <li><nuxt-link class="secondary" :to="`/blog`">Blog</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: false
    }
  }
}
</script>