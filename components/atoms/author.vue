<template>
  <grid>      
    <lazy-image :src="author.image" :alt="author.name" />
    <div>      
      <p>{{ author.name }}</p>
      <small>{{ author.bio }}</small>
    </div>
  </grid>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
.picture {
  margin-bottom: 0.25rem;
  max-height: 3rem;
  max-width: 3rem;
  border-radius: 50%;
}

</style>

