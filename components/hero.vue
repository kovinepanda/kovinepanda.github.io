<template>
  <div class="hero" data-theme="dark">
    <slot />
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.hero {
  background-color: #394046;
  /* background-image: url(''); */
  background-position: center;
  background-size: cover;
}
</style>