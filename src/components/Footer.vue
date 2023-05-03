
<script>
import { store } from '../data/store'
export default {
  name: 'Footer',
  data() {
    return {
      store
    }
  },
  methods:{
    altroEvento(){
      this.$emit('altroEventoCustom','sono  un altro evento');
    }
  }
}
</script>

<template>
  <h2>FOOTER</h2>
  <p>{{ store.mainTitle }}</p>
  <input type="text" v-model="store.mainTitle">
  <div>
    <br>
    <button @click="store.addToCounter(3)" >Aggiungi 3 al contatore</button> <br><br>

    <!-- $emit('nomeEventoCustom','parmetro 1 opzionale','parmetro 2 opzionale', 'ecc') -->
    <button @click="$emit('mioEvento','ciao',10)" >Evento Custom</button><br><br>
    <button @click="altroEvento" >Evento Custom 2</button>
  </div>
  
</template>

<style lang="scss">

</style>