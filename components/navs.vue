<template>
  <nav class="container-fluid">
    <ul>
      <li>
        <nuxt-link :to="`/`" class="contrast">
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
