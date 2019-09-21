<template>
  <td @click="onClickTd">12</td>
</template>

<script>
  export default {
    props : {
      cellData : String,
      rowIdnex : Number,
      cellIndex : Number
    },
    methods : {
      onClickTd(){
        console.log(this.$root.$data)
        console.log(this.$parent.$data)
      }
    }
  }
</script>

<style scoped>

</style>