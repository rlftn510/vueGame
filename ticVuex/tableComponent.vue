<template>
  <table>
    <slot/>
  </table>
</template>

<script>
  import trComponenet from './trComponent.vue'
  export default {
    components : {
      trComponenet
    },
    computed : {
      tableData() {
        return this.$store.state.table
      }
    }
  }
</script>

<style scoped>

</style>