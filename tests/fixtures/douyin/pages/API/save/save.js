Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    // 保存当前的绘制状态，包括变换矩阵、剪切区域、虚线列表等
    canvasCtx.save();
    canvasCtx.setFillStyle("green");
    canvasCtx.fillRect(10, 10, 100, 100);

    // 恢复初始的绘制状态 此处表现为 fillStyle 恢复为默认值 black
    canvasCtx.restore();
    canvasCtx.fillRect(50, 50, 100, 100);
    canvasCtx.draw();
  },
});