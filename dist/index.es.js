const o = document.querySelector.bind(document);
document.querySelectorAll.bind(document);
const d = {
  selector: "[preview]",
  // 图片预览节点选择器
  appendSelector: "body",
  // 弹出层的插入dom节点的选择器
  clickDialogClose: !0,
  // 点击蒙版是否关闭弹出框
  class: {
    // 设置的各个html表的class
    class_image_wrapper: "image-wrapper",
    class_image_content: "image-preview",
    class_dialog_wrapper: "dialog-wrapper",
    class_action_wrapper: "action-wrapper",
    class_operate_icon: "operate-icon",
    class_close_icon: "close-icon"
  },
  actionConfig: {
    zoomStep: 0.2,
    // 放大、缩小倍数
    minScale: 0.2,
    // 最小 缩小倍数
    maxScale: 2,
    // 最大 缩小倍数
    rotateStepDeg: 90,
    // 每次旋转的旋转角度
    rotateBack: !1
    // 旋转360度时是否重置为0度
  },
  actionVisibleConfig: {
    // 操作按钮的显示和隐藏
    zoomIn: !0,
    zoomOut: !0,
    rotateLeft: !0,
    rotateRight: !0
  },
  icons: {
    // 操作按钮的 图片路径(base64格式)
    zoomIn: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzU4MjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxMTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTM1OC43OTc4MjQgMzU4LjRWMjU2aDEwMi40djEwMi40aDEwMi40djEwMi40SDQ2MS4xOTc4MjR2MTAyLjRIMzU4Ljc5NzgyNFY0NjAuOEgyNTYuMzk3ODI0VjM1OC40aDEwMi40eiIgcC1pZD0iNjEyMCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",
    zoomOut: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzcwMzUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcxNjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTI1Ni4zOTc4MjQgMzU4LjRoMzA3LjJ2MTAyLjRIMjU2LjM5NzgyNFYzNTguNHoiIHAtaWQ9IjcxNjQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
    rotateLeft: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDc4MTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk0NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik05NTAuODIwNTcxIDUxMmMwIDI0MS43MDA1NzEtMTk3LjE1NjU3MSA0MzguODU3MTQzLTQzOC44NTcxNDIgNDM4Ljg1NzE0M2E0MzcuODMzMTQzIDQzNy44MzMxNDMgMCAwIDEtMzM3LjcwMDU3Mi0xNTguMjgxMTQzIDE5LjAxNzE0MyAxOS4wMTcxNDMgMCAwIDEgMS4xMzM3MTQtMjQuNTc2bDc4LjI5OTQyOS03OC44NDhhMjEuOTA2Mjg2IDIxLjkwNjI4NiAwIDAgMSAxNC4yOTk0MjktNS4xNTY1NzEgMTguNjUxNDI5IDE4LjY1MTQyOSAwIDAgMSAxMy4xMjkxNDIgNi44Mzg4NTdBMjg5LjI4IDI4OS4yOCAwIDAgMCA1MTEuOTYzNDI5IDgwNC41MzQ4NTdjMTYxLjEzMzcxNCAwIDI5Mi41NzE0MjktMTMxLjQzNzcxNCAyOTIuNTcxNDI4LTI5Mi41NzE0MjhzLTEzMS40Mzc3MTQtMjkyLjU3MTQyOS0yOTIuNTcxNDI4LTI5Mi41NzE0MjlBMjkwLjgxNiAyOTAuODE2IDAgMCAwIDMxMy4xMjQ1NzEgMjk3LjY5MTQyOWw3OC4yOTk0MjkgNzguODQ4YTM1LjI1NDg1NyAzNS4yNTQ4NTcgMCAwIDEgOC4wMDkxNDMgMzkuNDI0IDM2LjY0NDU3MSAzNi42NDQ1NzEgMCAwIDEtMzMuNzE4ODU3IDIyLjg1NzE0MmgtMjU2Yy0yMC4wMDQ1NzEgMC0zNi41NzE0MjktMTYuNTY2ODU3LTM2LjU3MTQyOS0zNi41NzE0Mjh2LTI1NmMwLTE0Ljg0OCA5LjE0Mjg1Ny0yOC4wMTM3MTQgMjIuODU3MTQzLTMzLjcxODg1N2EzNS4yNTQ4NTcgMzUuMjU0ODU3IDAgMCAxIDM5LjQyNCA4LjAwOTE0M2w3NC4yNzY1NzEgNzMuNzI4YzgwLjU2Njg1Ny03NS45OTU0MjkgMTg5LjY5Ni0xMjEuMTYxMTQzIDMwMi4yOTk0MjktMTIxLjE2MTE0MyAyNDEuNzAwNTcxIDAgNDM4Ljg1NzE0MyAxOTcuMTU2NTcxIDQzOC44NTcxNDMgNDM4Ljg1NzE0M3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9Ijk0NTMiPjwvcGF0aD48L3N2Zz4=",
    rotateRight: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDg5MjM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDg2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48cGF0aCBkPSJNOTI3IDQ0OGgxN2MyNi42IDAgNDgtMjEuNCA0OC00OFYxNDRjMC0xOS40LTExLjYtMzctMjkuNi00NC40UzkyMy44IDk2LjIgOTEwIDExMGwtODMuMiA4My4yYy0xNzUuMi0xNzMtNDU3LjQtMTcyLjQtNjMxLjYgMi0xNzUgMTc1LTE3NSA0NTguNiAwIDYzMy42czQ1OC42IDE3NSA2MzMuNiAwYzI1LTI1IDI1LTY1LjYgMC05MC42cy02NS42LTI1LTkwLjYgMGMtMTI1IDEyNS0zMjcuNiAxMjUtNDUyLjYgMHMtMTI1LTMyNy42IDAtNDUyLjZjMTI0LjQtMTI0LjQgMzI1LjQtMTI1IDQ1MC42LTJMNjU0IDM2NmMtMTMuOCAxMy44LTE3LjggMzQuNC0xMC40IDUyLjRTNjY4LjYgNDQ4IDY4OCA0NDhoMjM5eiIgcC1pZD0iMTA0ODciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
    close: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NTA2NTA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4LjA0Njg3NSIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTUxMy4zNDQgMGE1MTIgNTEyIDAgMSAwIDAgMTAyNCA1MTIgNTEyIDAgMCAwIDAtMTAyNHogbTIyNi4wNDggNjc0LjYyNGwtNTQuNTI4IDU2Ljg5Ni0xNzEuNTItMTY0LjkyOC0xNzEuMzkyIDE2NC45MjgtNTQuNTkyLTU2Ljg5Nkw0NTYuNTc2IDUxMiAyODcuMzYgMzQ5LjMxMmw1NC41OTItNTYuNzY4IDE3MS4zOTIgMTY0LjggMTcxLjUyLTE2NC44IDU0LjUyOCA1Ni43NjhMNTcwLjE3NiA1MTJsMTY5LjIxNiAxNjIuNjI0eiIgZmlsbD0iI2U2ZTZlNiIgcC1pZD0iMTE1MjgiPjwvcGF0aD48L3N2Zz4="
  }
}, t = {};
function u(e = {}) {
  Object.assign(t, d, e), E();
}
function m(e) {
  return y.openDialog(e);
}
function E() {
  o("body").addEventListener("click", function(e) {
    var a, i, N, I, j;
    const M = e.target;
    if (M.matches(t.selector))
      return m(M.src);
    if (t.clickDialogClose && (M.classList.contains((a = t.class) == null ? void 0 : a.class_dialog_wrapper) || M.classList.contains((i = t.class) == null ? void 0 : i.class_image_wrapper)))
      return M.classList.contains((N = t.class) == null ? void 0 : N.class_dialog_wrapper) ? y.closeDialog(M) : y.closeDialog(M.parentElement);
    if (M.classList.contains((I = t == null ? void 0 : t.class) == null ? void 0 : I.class_operate_icon)) {
      const s = M.parentElement.parentElement.querySelector(`img.${(j = t == null ? void 0 : t.class) == null ? void 0 : j.class_image_content}`), g = M.getAttribute("name");
      if (g == "zoomIn")
        return D.ZoomIn(s);
      if (g == "zoomOut")
        return D.ZoomOut(s);
      if (g == "rotateLeft")
        return D.rotateLeft(s);
      if (g == "rotateRight")
        return D.rotateRight(s);
      if (g == "close")
        return y.closeDialog(s.parentElement.parentElement);
    }
  });
}
const y = {
  openDialog(e) {
    var a, i, N, I, j, s, g, T, z, L;
    if (o(`${t.appendSelector}>.${(a = t == null ? void 0 : t.class) == null ? void 0 : a.class_dialog_wrapper}`)) {
      const r = o(`${t.appendSelector}>.${(i = t == null ? void 0 : t.class) == null ? void 0 : i.class_dialog_wrapper}`), l = r.querySelector(`img.${(N = t == null ? void 0 : t.class) == null ? void 0 : N.class_image_content}`);
      l.src = e, r.style.display = "block";
      return;
    }
    const M = document.createElement("div");
    M.classList.add(((I = t == null ? void 0 : t.class) == null ? void 0 : I.class_dialog_wrapper) || ""), M.innerHTML = `
            <div class='${(j = t == null ? void 0 : t.class) == null ? void 0 : j.class_image_wrapper}'>
                <img src='${e}' draggable="false" alt="preview" class="${(s = t == null ? void 0 : t.class) == null ? void 0 : s.class_image_content}"/>
                <div class='${(g = t == null ? void 0 : t.class) == null ? void 0 : g.class_operate_icon} ${(T = t == null ? void 0 : t.class) == null ? void 0 : T.class_close_icon}' style='background-image: url(${(z = t == null ? void 0 : t.icons) == null ? void 0 : z.close})' name='close'></div>
                <div class='${(L = t == null ? void 0 : t.class) == null ? void 0 : L.class_action_wrapper}'>
                    ${Object.entries((t == null ? void 0 : t.actionVisibleConfig) || {}).filter(([r, l]) => l).map(([r, l]) => {
      var n;
      return `
                            <div class='${(n = t == null ? void 0 : t.class) == null ? void 0 : n.class_operate_icon}' name='${r}' style='background-image: url(${t.icons[r] || ""})'></div>
                        `;
    }).join("")}
                </div>
            <div>
        `, o(t.appendSelector).appendChild(M);
  },
  closeDialog(e) {
    var a;
    const M = e.querySelector(`img.${(a = t == null ? void 0 : t.class) == null ? void 0 : a.class_image_content}`);
    M.style.transform = "", e.style.display = "none";
  },
  desotryDialog(e) {
    this.closeDialog(e), e.remove();
  }
}, c = {
  regExp: /(\w+)\(\s*(-?\w*\.?\w*)\s*\)/,
  getNumberOfString(e) {
    let M = 0;
    if (!e)
      return M;
    const a = String(e).match(/-?\d*\.?\d*/);
    return a && (M = Number(a[0])), M;
  },
  pareStrToObj(e) {
    const M = {};
    return e && String(e).split(" ").forEach((i) => {
      const N = i.match(this.regExp);
      if (N) {
        const [, I, j] = N;
        M[I.trim()] = j.trim();
      }
    }), M;
  },
  stringfyObj(e) {
    return Object.entries(e).map(([M, a]) => `${M}(${a})`).join(" ");
  }
}, D = {
  ZoomIn(e) {
    var N, I;
    const M = c.pareStrToObj(e.style.transform);
    let a = c.getNumberOfString(M.scale) || 1, i = a + ((N = t == null ? void 0 : t.actionConfig) == null ? void 0 : N.zoomStep);
    a < ((I = t == null ? void 0 : t.actionConfig) == null ? void 0 : I.maxScale) && (M.scale = i, e.style.transform = c.stringfyObj(M));
  },
  ZoomOut(e) {
    const M = c.pareStrToObj(e.style.transform);
    let a = c.getNumberOfString(M.scale) || 1, i = a - t.actionConfig.zoomStep;
    a > t.actionConfig.minScale && (M.scale = i, e.style.transform = c.stringfyObj(M));
  },
  rotateLeft(e) {
    const M = c.pareStrToObj(e.style.transform);
    let a = c.getNumberOfString(M.rotate) || 0, i = t.actionConfig.rotateBack ? (a - t.actionConfig.rotateStepDeg) % 360 : a - t.actionConfig.rotateStepDeg;
    M.rotate = i + "deg", e.style.transform = c.stringfyObj(M);
  },
  rotateRight(e) {
    const M = c.pareStrToObj(e.style.transform);
    let a = c.getNumberOfString(M.rotate) || 0, i = t.actionConfig.rotateBack ? (a + t.actionConfig.rotateStepDeg) % 360 : a + t.actionConfig.rotateStepDeg;
    M.rotate = i + "deg", e.style.transform = c.stringfyObj(M);
  }
}, w = {
  initConfig: u,
  previewImage: m
};
export {
  w as default
};
//# sourceMappingURL=index.es.js.map
