(function(s,l){typeof exports=="object"&&typeof module<"u"?module.exports=l():typeof define=="function"&&define.amd?define(l):(s=typeof globalThis<"u"?globalThis:s||self,s.imagePreviewer=l())})(this,function(){"use strict";const s=document.querySelector.bind(document);document.querySelectorAll.bind(document);const l={selector:"[preview]",appendSelector:"body",clickDialogClose:!0,class:{class_image_wrapper:"image-wrapper",class_image_content:"image-preview",class_dialog_wrapper:"dialog-wrapper",class_action_wrapper:"action-wrapper",class_operate_icon:"operate-icon",class_close_icon:"close-icon"},actionConfig:{zoomStep:.2,minScale:.2,maxScale:2,rotateStepDeg:90,rotateBack:!1},actionVisibleConfig:{zoomIn:!0,zoomOut:!0,rotateLeft:!0,rotateRight:!0},icons:{zoomIn:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzU4MjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYxMTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTM1OC43OTc4MjQgMzU4LjRWMjU2aDEwMi40djEwMi40aDEwMi40djEwMi40SDQ2MS4xOTc4MjR2MTAyLjRIMzU4Ljc5NzgyNFY0NjAuOEgyNTYuMzk3ODI0VjM1OC40aDEwMi40eiIgcC1pZD0iNjEyMCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",zoomOut:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2MzcwMzUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcxNjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik02NjAuODc3ODI0IDczMy4xODRhNDA5LjYgNDA5LjYgMCAxIDEgNzIuMTkyLTcyLjE5MmwyNzMuOTIgMjcyLjg5Ni03Mi43MDQgNzIuNzA0LTI3Mi44OTYtMjczLjQwOHpNNDA5Ljk5NzgyNCA3MTYuOEEzMDcuMiAzMDcuMiAwIDEgMCA0MDkuOTk3ODI0IDEwMi40YTMwNy4yIDMwNy4yIDAgMCAwIDAgNjE0LjR6TTI1Ni4zOTc4MjQgMzU4LjRoMzA3LjJ2MTAyLjRIMjU2LjM5NzgyNFYzNTguNHoiIHAtaWQ9IjcxNjQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",rotateLeft:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDc4MTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk0NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik05NTAuODIwNTcxIDUxMmMwIDI0MS43MDA1NzEtMTk3LjE1NjU3MSA0MzguODU3MTQzLTQzOC44NTcxNDIgNDM4Ljg1NzE0M2E0MzcuODMzMTQzIDQzNy44MzMxNDMgMCAwIDEtMzM3LjcwMDU3Mi0xNTguMjgxMTQzIDE5LjAxNzE0MyAxOS4wMTcxNDMgMCAwIDEgMS4xMzM3MTQtMjQuNTc2bDc4LjI5OTQyOS03OC44NDhhMjEuOTA2Mjg2IDIxLjkwNjI4NiAwIDAgMSAxNC4yOTk0MjktNS4xNTY1NzEgMTguNjUxNDI5IDE4LjY1MTQyOSAwIDAgMSAxMy4xMjkxNDIgNi44Mzg4NTdBMjg5LjI4IDI4OS4yOCAwIDAgMCA1MTEuOTYzNDI5IDgwNC41MzQ4NTdjMTYxLjEzMzcxNCAwIDI5Mi41NzE0MjktMTMxLjQzNzcxNCAyOTIuNTcxNDI4LTI5Mi41NzE0MjhzLTEzMS40Mzc3MTQtMjkyLjU3MTQyOS0yOTIuNTcxNDI4LTI5Mi41NzE0MjlBMjkwLjgxNiAyOTAuODE2IDAgMCAwIDMxMy4xMjQ1NzEgMjk3LjY5MTQyOWw3OC4yOTk0MjkgNzguODQ4YTM1LjI1NDg1NyAzNS4yNTQ4NTcgMCAwIDEgOC4wMDkxNDMgMzkuNDI0IDM2LjY0NDU3MSAzNi42NDQ1NzEgMCAwIDEtMzMuNzE4ODU3IDIyLjg1NzE0MmgtMjU2Yy0yMC4wMDQ1NzEgMC0zNi41NzE0MjktMTYuNTY2ODU3LTM2LjU3MTQyOS0zNi41NzE0Mjh2LTI1NmMwLTE0Ljg0OCA5LjE0Mjg1Ny0yOC4wMTM3MTQgMjIuODU3MTQzLTMzLjcxODg1N2EzNS4yNTQ4NTcgMzUuMjU0ODU3IDAgMCAxIDM5LjQyNCA4LjAwOTE0M2w3NC4yNzY1NzEgNzMuNzI4YzgwLjU2Njg1Ny03NS45OTU0MjkgMTg5LjY5Ni0xMjEuMTYxMTQzIDMwMi4yOTk0MjktMTIxLjE2MTE0MyAyNDEuNzAwNTcxIDAgNDM4Ljg1NzE0MyAxOTcuMTU2NTcxIDQzOC44NTcxNDMgNDM4Ljg1NzE0M3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9Ijk0NTMiPjwvcGF0aD48L3N2Zz4=",rotateRight:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NDg5MjM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDg2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48cGF0aCBkPSJNOTI3IDQ0OGgxN2MyNi42IDAgNDgtMjEuNCA0OC00OFYxNDRjMC0xOS40LTExLjYtMzctMjkuNi00NC40UzkyMy44IDk2LjIgOTEwIDExMGwtODMuMiA4My4yYy0xNzUuMi0xNzMtNDU3LjQtMTcyLjQtNjMxLjYgMi0xNzUgMTc1LTE3NSA0NTguNiAwIDYzMy42czQ1OC42IDE3NSA2MzMuNiAwYzI1LTI1IDI1LTY1LjYgMC05MC42cy02NS42LTI1LTkwLjYgMGMtMTI1IDEyNS0zMjcuNiAxMjUtNDUyLjYgMHMtMTI1LTMyNy42IDAtNDUyLjZjMTI0LjQtMTI0LjQgMzI1LjQtMTI1IDQ1MC42LTJMNjU0IDM2NmMtMTMuOCAxMy44LTE3LjggMzQuNC0xMC40IDUyLjRTNjY4LjYgNDQ4IDY4OCA0NDhoMjM5eiIgcC1pZD0iMTA0ODciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",close:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzE5NDc2NTA2NTA4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTI3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4LjA0Njg3NSIgaGVpZ2h0PSI0OCI+PHBhdGggZD0iTTUxMy4zNDQgMGE1MTIgNTEyIDAgMSAwIDAgMTAyNCA1MTIgNTEyIDAgMCAwIDAtMTAyNHogbTIyNi4wNDggNjc0LjYyNGwtNTQuNTI4IDU2Ljg5Ni0xNzEuNTItMTY0LjkyOC0xNzEuMzkyIDE2NC45MjgtNTQuNTkyLTU2Ljg5Nkw0NTYuNTc2IDUxMiAyODcuMzYgMzQ5LjMxMmw1NC41OTItNTYuNzY4IDE3MS4zOTIgMTY0LjggMTcxLjUyLTE2NC44IDU0LjUyOCA1Ni43NjhMNTcwLjE3NiA1MTJsMTY5LjIxNiAxNjIuNjI0eiIgZmlsbD0iI2U2ZTZlNiIgcC1pZD0iMTE1MjgiPjwvcGF0aD48L3N2Zz4="}},t={};function d(e={}){Object.assign(t,l,e),u()}function u(){s("body").addEventListener("click",function(e){var i,a,N,I,o;const M=e.target;if(M.matches(t.selector))return D.openDialog(M.src);if(t.clickDialogClose&&(M.classList.contains((i=t.class)==null?void 0:i.class_dialog_wrapper)||M.classList.contains((a=t.class)==null?void 0:a.class_image_wrapper)))return M.classList.contains((N=t.class)==null?void 0:N.class_dialog_wrapper)?D.closeDialog(M):D.closeDialog(M.parentElement);if(M.classList.contains((I=t==null?void 0:t.class)==null?void 0:I.class_operate_icon)){const g=M.parentElement.parentElement.querySelector(`img.${(o=t==null?void 0:t.class)==null?void 0:o.class_image_content}`),j=M.getAttribute("name");if(j=="zoomIn")return y.ZoomIn(g);if(j=="zoomOut")return y.ZoomOut(g);if(j=="rotateLeft")return y.rotateLeft(g);if(j=="rotateRight")return y.rotateRight(g);if(j=="close")return D.closeDialog(g.parentElement.parentElement)}})}const D={openDialog(e){var i,a,N,I,o,g,j,z,n,L;if(s(`${t.appendSelector}>.${(i=t==null?void 0:t.class)==null?void 0:i.class_dialog_wrapper}`)){const r=s(`${t.appendSelector}>.${(a=t==null?void 0:t.class)==null?void 0:a.class_dialog_wrapper}`),T=r.querySelector(`img.${(N=t==null?void 0:t.class)==null?void 0:N.class_image_content}`);T.src=e,r.style.display="block";return}const M=document.createElement("div");M.classList.add(((I=t==null?void 0:t.class)==null?void 0:I.class_dialog_wrapper)||""),M.innerHTML=`
            <div class='${(o=t==null?void 0:t.class)==null?void 0:o.class_image_wrapper}'>
                <img src='${e}' draggable="false" alt="preview" class="${(g=t==null?void 0:t.class)==null?void 0:g.class_image_content}"/>
                <div class='${(j=t==null?void 0:t.class)==null?void 0:j.class_operate_icon} ${(z=t==null?void 0:t.class)==null?void 0:z.class_close_icon}' style='background-image: url(${(n=t==null?void 0:t.icons)==null?void 0:n.close})' name='close'></div>
                <div class='${(L=t==null?void 0:t.class)==null?void 0:L.class_action_wrapper}'>
                    ${Object.entries((t==null?void 0:t.actionVisibleConfig)||{}).filter(([r,T])=>T).map(([r,T])=>{var m;return`
                            <div class='${(m=t==null?void 0:t.class)==null?void 0:m.class_operate_icon}' name='${r}' style='background-image: url(${t.icons[r]||""})'></div>
                        `}).join("")}
                </div>
            <div>
        `,s(t.appendSelector).appendChild(M)},closeDialog(e){var i;const M=e.querySelector(`img.${(i=t==null?void 0:t.class)==null?void 0:i.class_image_content}`);M.style.transform="",e.style.display="none"},desotryDialog(e){this.closeDialog(e),e.remove()}},c={regExp:/(\w+)\(\s*(-?\w*\.?\w*)\s*\)/,getNumberOfString(e){let M=0;if(!e)return M;const i=String(e).match(/-?\d*\.?\d*/);return i&&(M=Number(i[0])),M},pareStrToObj(e){const M={};return e&&String(e).split(" ").forEach(a=>{const N=a.match(this.regExp);if(N){const[,I,o]=N;M[I.trim()]=o.trim()}}),M},stringfyObj(e){return Object.entries(e).map(([M,i])=>`${M}(${i})`).join(" ")}},y={ZoomIn(e){var N,I;const M=c.pareStrToObj(e.style.transform);let i=c.getNumberOfString(M.scale)||1,a=i+((N=t==null?void 0:t.actionConfig)==null?void 0:N.zoomStep);i<((I=t==null?void 0:t.actionConfig)==null?void 0:I.maxScale)&&(M.scale=a,e.style.transform=c.stringfyObj(M))},ZoomOut(e){const M=c.pareStrToObj(e.style.transform);let i=c.getNumberOfString(M.scale)||1,a=i-t.actionConfig.zoomStep;i>t.actionConfig.minScale&&(M.scale=a,e.style.transform=c.stringfyObj(M))},rotateLeft(e){const M=c.pareStrToObj(e.style.transform);let i=c.getNumberOfString(M.rotate)||0,a=t.actionConfig.rotateBack?(i-t.actionConfig.rotateStepDeg)%360:i-t.actionConfig.rotateStepDeg;M.rotate=a+"deg",e.style.transform=c.stringfyObj(M)},rotateRight(e){const M=c.pareStrToObj(e.style.transform);let i=c.getNumberOfString(M.rotate)||0,a=t.actionConfig.rotateBack?(i+t.actionConfig.rotateStepDeg)%360:i+t.actionConfig.rotateStepDeg;M.rotate=a+"deg",e.style.transform=c.stringfyObj(M)}};return{initConfig:d}});
//# sourceMappingURL=index.umd.js.map
