
export type ConfigClass = Partial<{
    class_image_wrapper: string,
    class_image_content: string,
    class_dialog_wrapper: string,
    class_action_wrapper: string,
    class_operate_icon: string,
    class_close_icon: string,
}>

export type ActionConfig = Partial<{
    zoomStep: number,
    minScale: number,
    maxScale: number,
    rotateStepDeg: number,
    rotateBack: boolean,
}>

export type ActionVisibility = Partial<{
    zoomIn: boolean,
    zoomOut: boolean,
    rotateLeft: boolean,
    rotateRight: boolean,
}>

export type ActionIcons = Partial<{
    zoomIn: string,
    zoomOut: string,
    rotateLeft: string,
    rotateRight: string,
    close: string,
}>

export type ImagePreviewConfig = Partial<{
    selector: string,
    appendSelector: string,
    clickDialogClose: boolean,
    class: ConfigClass,
    actionConfig: ActionConfig,
    actionVisibleConfig: ActionVisibility,
    icons: ActionIcons,
}>;

export function initConfig(config: ImagePreviewConfig): void;
