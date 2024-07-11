import { reactive } from "vue";


export const store = reactive({
    pokemons: [],
    newSearch: "",
    loading: true,
});