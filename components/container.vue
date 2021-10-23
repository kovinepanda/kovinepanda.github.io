<template>
  <main :class="{ container: !fluid, 'container-fluid': fluid }">
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>