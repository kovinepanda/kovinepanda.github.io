<template>
  <figure class="picture">
    <picture>
      <source :data-srcset="`${src}?webp`" type="image/webp" />
      <source :data-srcset="src" type="image/png" />
      <img
        class="lazyload"
        :data-src="src"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        :alt="alt"
      />
    </picture>
  </figure>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>