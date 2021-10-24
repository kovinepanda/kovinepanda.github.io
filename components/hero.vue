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
  /* background-image: url('/assets/hero.jpg'); */ 
  background-position: center;
  background-size: cover;
  /* height: 20rem; */
}
</style>