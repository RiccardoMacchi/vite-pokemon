<script>
import { store } from '../store';

export default{
    name: "AppSearch",
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <label for="">Cerca il tuo Pok&eacute;m&oacute;n</label>
        <input type="text" v-model="store.newSearch">
    </div>
</template>

<style lang="scss">
label{
    font-size: 2rem;
    font-weight: 600;
    color: #3f57af;
}
input{
    width: 100%;
}
</style>