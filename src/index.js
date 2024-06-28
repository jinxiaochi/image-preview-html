// 元素查询方法的绑定
const $ = document.querySelector.bind(document), $$ = document.querySelectorAll.bind(document);

// 默认配置对象
const defultConfig = {
    selector: '[preview]', // 图片预览节点选择器
    appendSelector: 'body', // 弹出层的插入dom节点的选择器
    clickDialogClose: true, // 点击蒙版是否关闭弹出框

    class: { // 设置的各个html表的class
        class_image_wrapper: 'image-wrapper',
        class_image_content: "image-preview",
        class_dialog_wrapper: 'dialog-wrapper',
        class_action_wrapper: 'action-wrapper',
        class_operate_icon: 'operate-icon',
        class_close_icon: 'close-icon',
    },
    actionConfig: {
        zoomStep: 0.2,  // 放大、缩小倍数
        minScale: 0.2,  // 最小 缩小倍数
        maxScale: 2,    // 最大 缩小倍数
        rotateStepDeg: 90, // 每次旋转的旋转角度
        rotateBack: false, // 旋转360度时是否重置为0度
    },
    actionVisibleConfig: { // 操作按钮的显示和隐藏
        zoomIn: true,
        zoomOut: true,
        rotateLeft: true,
        rotateRight: true,
    },
    icons: { // 操作按钮的 图片路径(base64格式)
        zoomIn: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzU4MjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxMTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTM1OC43OTc4MjQgMzU4LjRWMjU2aDEwMi40djEwMi40aDEwMi40djEwMi40SDQ2MS4xOTc4MjR2MTAyLjRIMzU4Ljc5NzgyNFY0NjAuOEgyNTYuMzk3ODI0VjM1OC40aDEwMi40eiIgcC1pZD0iNjEyMCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==',
        zoomOut: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzcwMzUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcxNjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTI1Ni4zOTc4MjQgMzU4LjRoMzA3LjJ2MTAyLjRIMjU2LjM5NzgyNFYzNTguNHoiIHAtaWQ9IjcxNjQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=',
        rotateLeft: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDc4MTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk0NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik05NTAuODIwNTcxIDUxMmMwIDI0MS43MDA1NzEtMTk3LjE1NjU3MSA0MzguODU3MTQzLTQzOC44NTcxNDIgNDM4Ljg1NzE0M2E0MzcuODMzMTQzIDQzNy44MzMxNDMgMCAwIDEtMzM3LjcwMDU3Mi0xNTguMjgxMTQzIDE5LjAxNzE0MyAxOS4wMTcxNDMgMCAwIDEgMS4xMzM3MTQtMjQuNTc2bDc4LjI5OTQyOS03OC44NDhhMjEuOTA2Mjg2IDIxLjkwNjI4NiAwIDAgMSAxNC4yOTk0MjktNS4xNTY1NzEgMTguNjUxNDI5IDE4LjY1MTQyOSAwIDAgMSAxMy4xMjkxNDIgNi44Mzg4NTdBMjg5LjI4IDI4OS4yOCAwIDAgMCA1MTEuOTYzNDI5IDgwNC41MzQ4NTdjMTYxLjEzMzcxNCAwIDI5Mi41NzE0MjktMTMxLjQzNzcxNCAyOTIuNTcxNDI4LTI5Mi41NzE0MjhzLTEzMS40Mzc3MTQtMjkyLjU3MTQyOS0yOTIuNTcxNDI4LTI5Mi41NzE0MjlBMjkwLjgxNiAyOTAuODE2IDAgMCAwIDMxMy4xMjQ1NzEgMjk3LjY5MTQyOWw3OC4yOTk0MjkgNzguODQ4YTM1LjI1NDg1NyAzNS4yNTQ4NTcgMCAwIDEgOC4wMDkxNDMgMzkuNDI0IDM2LjY0NDU3MSAzNi42NDQ1NzEgMCAwIDEtMzMuNzE4ODU3IDIyLjg1NzE0MmgtMjU2Yy0yMC4wMDQ1NzEgMC0zNi41NzE0MjktMTYuNTY2ODU3LTM2LjU3MTQyOS0zNi41NzE0Mjh2LTI1NmMwLTE0Ljg0OCA5LjE0Mjg1Ny0yOC4wMTM3MTQgMjIuODU3MTQzLTMzLjcxODg1N2EzNS4yNTQ4NTcgMzUuMjU0ODU3IDAgMCAxIDM5LjQyNCA4LjAwOTE0M2w3NC4yNzY1NzEgNzMuNzI4YzgwLjU2Njg1Ny03NS45OTU0MjkgMTg5LjY5Ni0xMjEuMTYxMTQzIDMwMi4yOTk0MjktMTIxLjE2MTE0MyAyNDEuNzAwNTcxIDAgNDM4Ljg1NzE0MyAxOTcuMTU2NTcxIDQzOC44NTcxNDMgNDM4Ljg1NzE0M3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9Ijk0NTMiPjwvcGF0aD48L3N2Zz4=',
        rotateRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDg5MjM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDg2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48cGF0aCBkPSJNOTI3IDQ0OGgxN2MyNi42IDAgNDgtMjEuNCA0OC00OFYxNDRjMC0xOS40LTExLjYtMzctMjkuNi00NC40UzkyMy44IDk2LjIgOTEwIDExMGwtODMuMiA4My4yYy0xNzUuMi0xNzMtNDU3LjQtMTcyLjQtNjMxLjYgMi0xNzUgMTc1LTE3NSA0NTguNiAwIDYzMy42czQ1OC42IDE3NSA2MzMuNiAwYzI1LTI1IDI1LTY1LjYgMC05MC42cy02NS42LTI1LTkwLjYgMGMtMTI1IDEyNS0zMjcuNiAxMjUtNDUyLjYgMHMtMTI1LTMyNy42IDAtNDUyLjZjMTI0LjQtMTI0LjQgMzI1LjQtMTI1IDQ1MC42LTJMNjU0IDM2NmMtMTMuOCAxMy44LTE3LjggMzQuNC0xMC40IDUyLjRTNjY4LjYgNDQ4IDY4OCA0NDhoMjM5eiIgcC1pZD0iMTA0ODciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=',
        close: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NTA2NTA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4LjA0Njg3NSIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTUxMy4zNDQgMGE1MTIgNTEyIDAgMSAwIDAgMTAyNCA1MTIgNTEyIDAgMCAwIDAtMTAyNHogbTIyNi4wNDggNjc0LjYyNGwtNTQuNTI4IDU2Ljg5Ni0xNzEuNTItMTY0LjkyOC0xNzEuMzkyIDE2NC45MjgtNTQuNTkyLTU2Ljg5Nkw0NTYuNTc2IDUxMiAyODcuMzYgMzQ5LjMxMmw1NC41OTItNTYuNzY4IDE3MS4zOTIgMTY0LjggMTcxLjUyLTE2NC44IDU0LjUyOCA1Ni43NjhMNTcwLjE3NiA1MTJsMTY5LjIxNiAxNjIuNjI0eiIgZmlsbD0iI2U2ZTZlNiIgcC1pZD0iMTE1MjgiPjwvcGF0aD48L3N2Zz4=',
    }
}

const config = {};
// 设置用户配置
export function initConfig(userConf = {}) {
    Object.assign(config, defultConfig, userConf);
    bindEvent();
}
// 事件绑定-事件委托
function bindEvent() {
    $('body').addEventListener('click', function (event) {
        const target = event.target;
        // 点击预览图片
        if (target.matches(config.selector)) {
            return DialogOperator.openDialog(target.src);
        }
        // 点击遮罩层-关闭dialog
        if (config.clickDialogClose && (target.classList.contains(config.class.class_dialog_wrapper) || target.classList.contains(config.class.class_image_wrapper))) {
            return target.classList.contains(config.class.class_dialog_wrapper) ? DialogOperator.closeDialog(target) : DialogOperator.closeDialog(target.parentElement);
        }

        // 点击操作按钮
        if (target.classList.contains(config.class.class_operate_icon)) {
            const imageNode = target.parentElement.parentElement.querySelector(`img.${config.class.class_image_content}`);
            const typeName = target.getAttribute('name');
            if (typeName == 'zoomIn') {
                return ImageOperator.ZoomIn(imageNode);
            }
            if (typeName == 'zoomOut') {
                return ImageOperator.ZoomOut(imageNode);
            }
            if (typeName == 'rotateLeft') {
                return ImageOperator.rotateLeft(imageNode);
            }
            if (typeName == 'rotateRight') {
                return ImageOperator.rotateRight(imageNode);
            }
            // 点击关闭按钮
            if (typeName == 'close') {
                return DialogOperator.closeDialog(imageNode.parentElement.parentElement);
            }
        }
    })
}

// 弹出框操作
const DialogOperator = {
    openDialog(imagePath) {
        // 已经创建了则直接替换
        if ($(`${config.appendSelector}>.${config.class.class_dialog_wrapper}`)) {
            const dialogWrapper = $(`${config.appendSelector}>.${config.class.class_dialog_wrapper}`);
            const imageElement = dialogWrapper.querySelector(`img.${config.class.class_image_content}`);
            imageElement.src = imagePath;
            dialogWrapper.style.display = 'block';
            return;
        }

        // 没有则新建
        const dialogWrapper = document.createElement('div');
        dialogWrapper.classList.add(config.class.class_dialog_wrapper);
        dialogWrapper.innerHTML = `
            <div class='${config.class.class_image_wrapper}'>
                <img src='${imagePath}' draggable="false" alt="preview" class="${config.class.class_image_content}"/>
                <div class='${config.class.class_operate_icon} ${config.class.class_close_icon}' style='background-image: url(${config.icons.close})' name='close'></div>
                <div class='${config.class.class_action_wrapper}'>
                    ${Object.entries(config.actionVisibleConfig).filter(([key, value]) => value).map(([key, value]) => `
                            <div class='${config.class.class_operate_icon}' name='${key}' style='background-image: url(${config.icons[key]})'></div>
                        `).join('')
            }
                </div>
            <div>
        `
        $(config.appendSelector).appendChild(dialogWrapper);
    },

    closeDialog(dialogDom) {
        const imageElement = dialogDom.querySelector(`img.${config.class.class_image_content}`);
        imageElement.style = 'none'; //变换样式重置
        dialogDom.style.display = 'none';
    },

    desotryDialog(dialogDom) {
        this.closeDialog(dialogDom);
        dialogDom.remove();
    }
}


// CSS 的transform字符串和对象的转换， 如 scale(1.2) rotate(90deg) 变为 { scale: '1.2', rotate: '90deg' };
const cssTransformUtil = {
    regExp: /(\w+)\(\s*(-?\w*\.?\w*)\s*\)/,
    getNumberOfString(str) {
        let num = 0;
        if (!str) {
            return num;
        }
        const matches = String(str).match(/-?\d*\.?\d*/);
        if (matches) {
            num = Number(matches[0]);
        }
        return num;
    },
    pareStrToObj(str) {
        const obj = {};
        if (str) {
            const arr = String(str).split(' ');
            arr.forEach(strItem => {
                const matches = strItem.match(this.regExp);
                if (matches) {
                    const [, key, value] = matches;
                    obj[key.trim()] = value.trim();
                }
            })
        }
        return obj;
    },
    stringfyObj(obj) {

        return Object.entries(obj).map(([key, val]) => `${key}(${val})`).join(' ');
    },
}

// 图片操作对象
const ImageOperator = {
    ZoomIn(imageNode) {
        const transformObj = cssTransformUtil.pareStrToObj(imageNode.style.transform);
        let preScale = cssTransformUtil.getNumberOfString(transformObj.scale) || 1;
        let scaleNum = preScale + config.actionConfig.zoomStep;
        if (preScale < config.actionConfig.maxScale) {
            transformObj.scale = scaleNum;
            imageNode.style.transform = cssTransformUtil.stringfyObj(transformObj);
        }
    },

    ZoomOut(imageNode) {
        const transformObj = cssTransformUtil.pareStrToObj(imageNode.style.transform);
        let preScale = cssTransformUtil.getNumberOfString(transformObj.scale) || 1;
        let scaleNum = preScale - config.actionConfig.zoomStep;
        if (preScale > config.actionConfig.minScale) {
            transformObj.scale = scaleNum;
            imageNode.style.transform = cssTransformUtil.stringfyObj(transformObj);
        }
    },

    rotateLeft(imageNode) {
        const transformObj = cssTransformUtil.pareStrToObj(imageNode.style.transform);
        let preRotate = cssTransformUtil.getNumberOfString(transformObj.rotate) || 0;
        let rotateDeg = config.actionConfig.rotateBack ?
            (preRotate - config.actionConfig.rotateStepDeg) % 360 : (preRotate - config.actionConfig.rotateStepDeg);
        transformObj.rotate = rotateDeg + 'deg';
        imageNode.style.transform = cssTransformUtil.stringfyObj(transformObj);
    },

    rotateRight(imageNode) {
        const transformObj = cssTransformUtil.pareStrToObj(imageNode.style.transform);
        let preRotate = cssTransformUtil.getNumberOfString(transformObj.rotate) || 0;
        let rotateDeg = config.actionConfig.rotateBack ?
            (preRotate + config.actionConfig.rotateStepDeg) % 360 : (preRotate + config.actionConfig.rotateStepDeg);
        transformObj.rotate = rotateDeg + 'deg';
        imageNode.style.transform = cssTransformUtil.stringfyObj(transformObj);
    },
}
