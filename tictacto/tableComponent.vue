<template>
  <table>
    <tr-componenet v-for="(rowData, index) in tableData" :row-data="rowData" :row-index="index" :key="index"></tr-componenet>
  </table>
</template>

<script>
  import trComponenet from './trComponent.vue'
  export default {
    props : {
      tableData : Array
    },
    components : {
      trComponenet
    }
  }
</script>

<style scoped>

</style>