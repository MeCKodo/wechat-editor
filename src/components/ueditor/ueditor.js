import '../../assets/ueditor.config';
import '../../../static/ueditor/ueditor.all';
import UE_CONFIG from './config';

export default {
  name: 'we-editor',
  props: ['initText'],
  data() {
    return {
      ue: null,
    };
  },
  created() {
    this.$emit('created');
  },
  mounted() {
    this.$nextTick(() => {
      this.ue = UE.getEditor('ueditorBox', UE_CONFIG);
      this.ue.ready(() => {
        this.$emit('ready', this.ue);
      });
      this.ue.addListener('contentChange', () => {
        this.$emit('change', this.ue.getContent());
      });
      this.ue.addListener('destroy', () => {
        this.$emit('destroy');
      });
    })
  },
  watch: {
    initText(val) {
      this.ue.ready(() => {
        this.ue.setContent(val);
      });
    },
  },
};
