import '../../assets/ueditor.config';
import '../../../static/ueditor/ueditor.all';
import UE_CONFIG from './config';

export default {
  name: 'we-editor',
  props: {
    // TODO 未来会有placeholder
    initText: { // 初始化文本，比如更新图文时进入页面赋值
      type: String,
      default: '',
    },
    height: { // 编辑器高度
      type: [Number, String],
      default: 500,
    },
    width: { // 编辑器宽度
      type: [Number, String],
      default: 800,
    },
    config: Object, // ueditor config
  },
  data() {
    return {
      ue: null,
      ueConfig: {},
    };
  },
  created() {
    // 用户可使用registerUI接口拓展 toolbars 但不允许基础的 toolbars
    if (this.config && this.config.toolbars) {
      Reflect.deleteProperty(this.config, 'toolbars');
    }
    this.ueConfig = Object.assign({}, UE_CONFIG, this.config || {});
    // height和width的优先级 高于 config
    this.ueConfig.initialFrameWidth = this.width;
    this.ueConfig.initialFrameHeight = this.height;
    this.$emit('created');
  },
  mounted() {
    this.$nextTick(() => {
      this.ue = UE.getEditor('ueditorBox', this.ueConfig);
      this.ue.ready(() => {
        this.$emit('ready', this.ue);
      });
      this.ue.addListener('contentChange', () => {
        this.$emit('change', this.ue.body.innerHTML);
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
