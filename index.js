import Ueditor from './src/components/ueditor/ueditor.vue';

export default {
  install(Vue) {
    Vue.component(Ueditor.name, Ueditor);
  },
};
