<template>
  <div id="app">
    <base-editor></base-editor>
    <base-event></base-event>
  </div>
</template>
<script>
  import BaseEditor from './components/base.vue';
  import BaseEvent from './components/base-event.vue';

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      BaseEditor, BaseEvent,
    },
  };
</script>

<style>
  #app {
    width: 100%;
    margin: 0 auto;
  }
</style>
