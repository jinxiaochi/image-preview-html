# Javascript图片预览器 

一个图片预览器，您可以旋转和缩放`img`标签的图片内容。

[English Document](https://github.com/jinxiaochi/image-preview-html/blob/master/readme.md)

## 案例

[案例](https://jinxiaochi.github.io/image-preview-html/demo/test.html)

## 安装

### 浏览器

下载整个项目, 导入 `dist/index.umd.js`、 `dist/style.css` 和 `dist/index.umd.js.map`（可选，源码映射文件可以不加） 到你的项目: 

```html
<link rel="stylesheet" href="(your path)/style.css">
<script src="(your path)/index.umd.js"></script>
```

或者，你也可以使用npm的CDN（确保您的网络稳定）

```html
<link rel="stylesheet" href="https://unpkg.com/image-preview-html@latest/dist/style.css"/>
<script src="https://unpkg.com/image-preview-html@latest/dist/index.umd.js"></script>
```

### ESM 模块化

```shell
npm i image-preview-html -S
```

## 用法

### 浏览器

在HTML中使用

```html
<link rel="stylesheet" href="(your path)/style.css">
<script src="(your path)/index.umd.js"></script>
<body>
    <!-- .... -->
    <img preview src="https://gips2.baidu.com/it/u=1651586290,17201034&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f600_800" alt="" 
            style="width: 60px;height: 60px;margin: 40px;">
    <script>
        imagePreviewer.initConfig();
    </script>
</body>

```

然后单击带有`preview`属性的`img`元素就可以了。


### ESM模块化

```js
import 'image-preview-html/dist/style.css';// Do not forget to import the style.css file
import imagePreview from 'image-preview-html';

imagePreview.initConfig();
```

然后单击带有`preview`属性的`img`元素就可以了。

### 直接预览图片

```js
import 'image-preview-html/dist/style.css';// Do not forget to import the style.css file
import imagePreview from 'image-preview-html';

imagePreview.initConfig();
document.querySelector('#previewBtn').addEventListener('click', function(){
    imagePreview.previewImage('https://img.horion.com/mall/goods/51269-1.jpg'); // 预览图片的url地址
});
```

## 配置

您可以自定义自己的图像预览器，其默认配置为：

```js
const defultConfig = {
    selector: '[preview]', // 图片预览节点选择器
    appendSelector: 'body', // 弹出层的插入dom节点的选择器
    clickDialogClose: true, // 点击蒙版是否关闭弹出框

    class: { // 设置的各个html节点的class
        class_image_wrapper: 'image-wrapper',
        class_image_content: "image-preview",
        class_dialog_wrapper: 'dialog-wrapper',
        class_action_wrapper: 'action-wrapper',
        class_operate_icon: 'operate-icon',
        class_close_icon: 'close-icon',
    },
    actionConfig: {
        zoomStep: 0.2,  // 放大、缩小倍数的步进
        minScale: 0.2,  // 最大 缩小倍数
        maxScale: 2,    // 最大 放大倍数
        rotateStepDeg: 90, // 每次旋转的旋转角度
        rotateBack: false, // 旋转360度时是否重置为0度
    },
    actionVisibleConfig: { // 操作按钮的显示和隐藏
        zoomIn: true,
        zoomOut: true,
        rotateLeft: true,
        rotateRight: true,
    },
    icons: { // 操作按钮的 图片路径
        zoomIn: '',
        zoomOut: '',
        rotateLeft: '',
        rotateRight: '',
        close: '',
    }
}
```

您可以调用`initConfig()`函数来覆盖默认配置，如下所示：

```js
imagePreview.initConfig({ 
    selector: '.preview', 
    clickDialogClose: false,
})
```

有关更多详细信息，您可以阅读源文件`src/index.ts`。
