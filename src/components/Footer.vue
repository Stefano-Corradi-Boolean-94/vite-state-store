
<script>
import { store } from '../data/store'
export default {
  name: 'Footer',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <h2>FOOTER</h2>
  <p>{{ store.mainTitle }}</p>
  <input type="text" v-model="store.mainTitle">
  <div>
    <button @click="store.addToCounter(3)" >Aggiungi 3 al contatore</button>
  </div>
  
</template>

<style lang="scss">

</style>