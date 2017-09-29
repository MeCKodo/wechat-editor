<template>
  <div id="app">
    <base-editor></base-editor>
  </div>
</template>
<script>
  import BaseEditor from './components/base.vue';

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      BaseEditor,
    },
  };
</script>

<style>
  #app {
    width: 100%;
    margin: 0 auto;
  }
</style>
