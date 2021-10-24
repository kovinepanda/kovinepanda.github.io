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
    <custom-footer>
      <contact-list :contacts="contacts" />
    </custom-footer>
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
