
<script>

import { store } from '../data/store'


export default {
  name: 'Header',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <h2>HEADER</h2>
  <p>{{ store.mainTitle }}</p>
  <h3>{{ store.counter  }}</h3>
  
</template>

<style lang="scss">

</style>