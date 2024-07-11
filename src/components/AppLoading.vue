<script>
import { store } from '../store';

export default{
    name: "AppLoading",
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div v-show="store.loading" class="load">
        <img src="../assets/ball.png" alt="">
    </div>
</template>

<style lang="scss">
.load {
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    position: relative;
    top: -100px;
    z-index: 10;

    img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%,-50%);
    animation-name: rotateball;
    animation-duration: 5s;
}
}



@keyframes rotateball {
  0%{
    transform: rotate(0deg) translate(-50%,-50%);
  }
  25%{
    transform: rotate(90deg) translate(-50%,+50%);
  }
  50%{
    transform: rotate(180deg) translate(50%,50%);
  }
  75%{
    transform: rotate(270deg) translate(+50%,-50%);
  }
  100%{
    transform: rotate(359deg) translate(-50%,-50%);
  }
}

</style>