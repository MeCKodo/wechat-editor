<template>
  <!-- 这个是根基，最基础的样子 -->
  <we-editor init-text="我是最基础的样子" height="500" width="800" :config="config"></we-editor>
</template>
<script>
  export default {
    data() {
      return {
        config: {
          fontsize: [10,12],
          toolbars: [ // 不得修改基础的toolbars
            [
              'undo', // 撤销
              'redo', // 重做
              '|',
              'fontsize', // 字号
              '|',
              'blockquote', // 引用
              'horizontal', // 分隔线
              '|',
              'removeformat', // 清除格式
              'formatmatch', // 格式刷
              '|',
              'link', // 超链接
              'unlink', // 取消链接
            ],
          ]
        },
      };
    },
  };
</script>
