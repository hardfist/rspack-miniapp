Page({
  onReady: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    // 起始点
    canvasCtx.moveTo(20, 20);
    // 控制点(20,100) 结束点(200,20)
    canvasCtx.quadraticCurveTo(20, 100, 200, 20);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});