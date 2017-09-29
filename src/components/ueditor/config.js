export default {
  indentValue: 0, // 首行缩进
  initialFrameWidth: 800,
  initialFrameHeight: 500,
  enableAutoSave: false,
  // initialContent: '123123',
  maximumWords: 30000, // 最多3W字
  elementPathEnabled: false, // 元素路径
  fontsize: [10, 11, 12, 14, 16, 18, 20, 24],
  wordCount: false, // 字数统计
  toolbars: [
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
    [
      'bold', // 加粗
      'italic', // 斜体
      'underline', // 下划线
      'forecolor', // 字体颜色
      'backcolor', // 背景色
      '|',
      'indent', // 首行缩进
      'justifyleft', // 居左对齐
      'justifycenter', // 居中对齐
      'justifyright', // 居右对齐
      'justifyjustify', // 两端对齐
      '|',
      'rowspacingtop', // 段前距
      'rowspacingbottom', // 段后距
      'lineheight', // 行间距
      // 少了给字间距
      '|',
      'insertorderedlist', // 有序列表
      'insertunorderedlist', // 无序列表
      '|',
      'imagenone', // 默认
      'imageleft', // 左浮动
      'imageright', // 右浮动
      'imagecenter', // 居中
    ],
  ],
};
