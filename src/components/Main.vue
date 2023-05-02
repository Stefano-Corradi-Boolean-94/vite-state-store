
<script>
import { store } from '../data/store'

export default {
  name: 'Main',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <h2>MAIN</h2>
  <p>{{ store.mainTitle }}</p>
</template>

<style lang="scss">

</style>