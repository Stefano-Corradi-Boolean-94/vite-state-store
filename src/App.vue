
<script>

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  },
  methods:{
    // i parametri vengono passati inplicitamente
    miaFunzione(saluto, numero){
      console.log('Evento custom',saluto, numero);
    },
    altroEvento(msg){
      console.log('--->',msg);
    }
  }
}
</script>

<template>
  
  <Header />

  <Main />

  <Footer @mioEvento="miaFunzione" @altroEventoCustom="altroEvento" />

</template>



<style lang="scss">

</style>