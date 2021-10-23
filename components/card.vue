<template>
  <article>
    <header>
      <slot name="header" />
    </header>
    <slot name="body" />
    <footer>
      <slot name="footer" />
    </footer>
  </article>
</template>

<script>
export default {}
</script>