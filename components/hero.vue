<template>
  <div class="hero" data-theme="dark">
    <slot />
    <hr>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.hero {  
  /* background-image: url(''); */
  background-position: center;
  background-size: cover;
}
</style>