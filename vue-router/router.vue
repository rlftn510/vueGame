<template>
  <div>
    ㅇㅇㅇㅇ
    <div>
      <router-link to="/game/:name">게임메쳐</router-link>
      <router-link to="/game/base-ball?page=1&name=gilsu">숫자야구</router-link>
      <router-link to="/game/speed">반응속도</router-link>
      <router-link to="/game/sped">뭘까</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './routes'

  export default {
      router
  }
</script>

<style scoped>

</style>