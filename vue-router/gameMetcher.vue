<template>
  <div>
    <div v-if="currentGame === 'base-ball'">
      <base-ball></base-ball>
    </div>
    <div v-else-if="currentGame === 'speed'">
      <speed-game></speed-game>
    </div>
    <div v-else>게임이 없스빈다.</div>
  </div>
</template>

<script>
  import baseBall from '../baseball/numberBaseball.vue'
  import speedGame from '../speed/responseCheck.vue'
  import gameMetcher from './gameMetcher'

  export default {
    components : {
      baseBall,
      speedGame,
      gameMetcher
    },
    mounted(){
      console.log(this.$router)
      console.log(this.$route)
    },
    computed : {
      currentGame(){
        return this.$route.params.name
      }
    }
  }
</script>
