<template>
<div>
  <ul>
    <li v-for="contact in contacts" :key="contact.url">
      <a class="secondary" :href="contact.url" target="_blank">
        {{ contact.type }}
      </a>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
ul {
  margin: 2rem;
  text-align: center;
  overflow: hidden;
}

ul > li {
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 0 15px;
}

ul > li {
  border-left: 2px solid var(--secondary);
}

ul li:first-child {
  border-left: none;
}
</style>
