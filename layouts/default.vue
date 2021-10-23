<template>
  <container fluid>
    <grid>
      <Nuxt />
    </grid>
  </container>
</template>

<script>
import Container from '@/components/container'
import Hero from '@/components/hero'
import Navs from '@/components/navs'
import Sidebar from '@/components/sidebar'
import Grid from '@/components/grid'

export default {
  components: {
    Container,
    Navs,
    Hero,
    Sidebar,
    Grid,
  },
}
</script>

<style>
.grid {
  margin: 1rem;
}
</style>
