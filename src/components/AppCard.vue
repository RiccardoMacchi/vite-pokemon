<script>
import { store } from '../store';

export default {
  name: "AppCard",
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
    <div class="my_card" v-for="allPokemon in store.pokemons">
      <img :src="allPokemon.images.large" alt="pokemons">
      <h3>{{ allPokemon.name }}</h3>
      <span v-for="type in allPokemon.types" >{{ type }}</span>
    </div>
</template>

<style lang="scss">
.my_card{
  flex-basis: calc(100% / 5 - 20px);
  background-color: #ffcd00;
  text-align: center;
  padding-bottom: 20px;

  h3{
    font-size: 2rem;
    margin: 15px auto;
    color: #3f57af;
  }

  span {
    color: white;
    padding: 5px 15px;
    background-color: #3f57af;
  }
}

</style>
