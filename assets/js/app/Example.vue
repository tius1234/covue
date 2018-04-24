<template>
    <div>
        <UIheader></UIheader>
    </div>
</template>

<script>
  import UIheader from '../components/UIheader.vue'

  export default {
    components: {
      UIheader
    }
  }
</script>

<style lang="scss">
    body {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }
    #app {
        text-align: center;
        color: #2c3e50;
    }
    .table {
        display: table;
        width: 100%;
        .table-cell {
            display: table-cell;
            height: 100%;
            vertical-align: middle;
        }
    }
</style>
