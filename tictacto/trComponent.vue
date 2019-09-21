<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :cell-data="cellData" :cell-index="index" :row-index="rowIndex" :key="index"></td-component>
  </tr>
</template>

<script>  
  import tdComponent from './tdComponent.vue'
  export default {
    components : {
      tdComponent
    },
    props : {
      rowData : Array,
      rowIndex : Number
    },
    data(){
      return {
        parant : 'das'
      }
    }
  }
</script>

<style scoped>

</style>