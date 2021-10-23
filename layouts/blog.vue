<template>
  <div>
    <hero>
      <navs />
    </hero>
    <container>
      <grid>
        <Nuxt />
      </grid>
    </container>
    <footer>
      <ul>
        <li v-for="contact in contacts" :key="contact.url">
          <a class="secondary" :href="contact.url" target="_blank">
            {{ contact.type }}
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { CONTACTS } from '@/data/contacts'
export default {
  data() {
    return {
      contacts: CONTACTS,
    }
  },
}
</script>

<style scoped>
footer {
  margin: 2rem;
}

footer ul {
  text-align: center;
  overflow: hidden;
}
footer li {
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 0 15px;
}

footer li {
  border-left: 2px solid var(--secondary);
}

footer li:first-child {
  border-left: none;
}
</style>