<template>
  <!-- 展示事件的demo -->
  <we-editor :init-text="initText"
             @created="editorCreated"
             @ready="editorReady"
             @change="editorChange"
  ></we-editor>
</template>
<script>
  function registerUeditorQiniu() {
    UE.registerUI('qiniuUpload', (editor, uiName) => {
      /* editor.registerCommand(uiName, {
        execCommand: function() {
          alert('execCommand:' + uiName)
        }
      }); */
      // 具体请查看文档 如何进行二次开发 http://fex.baidu.com/ueditor/#dev-developer
      const btn = new UE.ui.Button({
        name: uiName,
        title: '上传图片',
        cssRules: 'background-position: 0 -596px;', // 可以写各种CSS样式
        onclick() {
          // editor.execCommand(uiName);
          console.log('我被点击了');
        },
      });
      editor.addListener('selectionchange', () => {
        const state = editor.queryCommandState(uiName);
        if (state === -1) {
          btn.setDisabled(true);
          btn.setChecked(false);
        } else {
          btn.setDisabled(false);
          btn.setChecked(state);
        }
      });
      return btn;
    });
  }

  export default {
    data() {
      return {
        initText: '<p style="color: red">控制台看触发的事件</p>',
      };
    },
    methods: {
      editorCreated() {
        console.log('准备开始创建，这里是vue组件created的钩子，可以用来拓展你需要的UI组件');
        registerUeditorQiniu();
      },
      editorReady(ue) {
        console.log('DOM已经渲染完毕，可以获取ue实例', ue);
      },
      editorChange(html) {
        console.log('文本被修改了', html);
      },
    },
  };
</script>
