<template>
  <div>
    <table-component v-bind:table-data="tableData"></table-component>
  </div>
</template>

<script>
  import tableComponent from './tableComponent.vue'
  export default {
    components : {
      tableComponent
    },
    data() {
      return {
        tableData : [
          ['','',''],
          ['','',''],
          ['','',''],
        ],
        turn : '0'
      }
    },
    methods : {

    }
  }
</script>

<style>
  
</style>