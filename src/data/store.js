import { reactive } from 'vue'


export const store = reactive({

  mainTitle: 'Sono il titolo principale',
  counter: 0,
  addToCounter(n){
    this.counter += n
  }


});