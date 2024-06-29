# An Image Preview With Javascript

this is an image previewer, which you can rotate and scale your `<img >` tag. 

## Install

### on Browser

download this project, and import the `dist/index.umd.js`、 `dist/style.css` and `dist/index.umd.js.map`（option，you can ignore the source map file）  to your project, like below: 

```html
<link rel="stylesheet" href="(your path)/style.css">
<script src="(your path)/index.umd.js"></script>
```

### on ESM Project

```shell
npm i image-preview-html -S
```

## Usage

### on Browser

Using in Html

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

and then click the `img` Element with `preview`, it will work.

### on ESM Module

```js
import 'image-preview-html/dist/style.css';// Do not forget to import the style.css file
import imagePreview from 'image-preview-html';

imagePreview.initConfig();
```

and then click the `img` Element with `preview`, it will work.

## Config

you can custom the image previewer of yourself, its default config is:

```js
const defultConfig = {
    selector: '[preview]', // Image preview Elemnt selector
    appendSelector: 'body', // The selector for inserting dom Element in the pop-up layer
    clickDialogClose: true, // Whether to close the pop-up box by clicking on the mask

    class: { // The class of each previewer HTML element
        class_image_wrapper: 'image-wrapper',
        class_image_content: "image-preview",
        class_dialog_wrapper: 'dialog-wrapper',
        class_action_wrapper: 'action-wrapper',
        class_operate_icon: 'operate-icon',
        class_close_icon: 'close-icon',
    },
    actionConfig: { // Previewer operation settings
        zoomStep: 0.2,  // Zoom in/out scale in per click
        minScale: 0.2,  // Maximum reduction factor
        maxScale: 2,    // Maximum magnification
        rotateStepDeg: 90, // rotate degs in per roate
        rotateBack: false, // whether reset to 0deg when rotating 360deg
    },
    actionVisibleConfig: { // whether display operation buttons
        zoomIn: true,
        zoomOut: true,
        rotateLeft: true,
        rotateRight: true,
    },
    icons: { // Image path for operation buttons
        zoomIn: '',
        zoomOut: '',
        rotateLeft: '',
        rotateRight: '',
        close: '',
    }
}
```

you can call `initConfig()` function to cover the default config, like this:

```js
imagePreview.initConfig({ 
    selector: '.preview', 
    clickDialogClose: false,
})
```

for more detail, you can read the source file, which is `src/index.ts`.
