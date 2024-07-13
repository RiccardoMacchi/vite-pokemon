<script>
import AppWrapCard from './components/AppWrapCard.vue';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';

import { store } from './store';
import AppSearch from './components/AppSearch.vue';
import AppLoading from './components/AppLoading.vue';

export default {
  
  components: {
    AppWrapCard,
    AppHeader,
    AppSearch,
    AppLoading
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    requestPokemon(){
      axios.get("https://api.pokemontcg.io/v2/cards")
        .then(function(response){
            console.log("immagine url",response.data.data[0].images.small)
            console.log(response.data.data)
            store.pokemons = response.data.data;
            store.loading = false;
        })
        .catch(err =>{
            store.loading = true;
            console.log(err)
        })
    },
    requestNewPokemon(){
      let newPokemon = "https://api.pokemontcg.io/v2/cards?q=name:" + store.newSearch
      store.loading = true;
      axios.get(newPokemon)
        .then(function(response){
            console.log("immagine url",response.data.data[0].images.small)
            console.log(response.data.data)
            store.pokemons = response.data.data;
            store.loading = false;
        })
        .catch(err =>{
            store.loading = true;
            console.log(err)
        })
    },
  },
  created(){
    this.requestPokemon()
  }
}
</script>

<template>
  <AppLoading />
  <AppHeader />
  <main>
    <AppSearch @search="requestNewPokemon"/>
    <AppWrapCard />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;
main{
  background-image: url(./assets/bg_1.png);;
}

</style>
