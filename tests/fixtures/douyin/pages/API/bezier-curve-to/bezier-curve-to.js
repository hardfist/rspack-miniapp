Page({
  onReady: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    canvasCtx.moveTo(50, 20);
    canvasCtx.bezierCurveTo(230, 30, 150, 60, 50, 100);
    canvasCtx.stroke();

    canvasCtx.fillStyle = "blue";
    // 起始点
    canvasCtx.fillRect(50, 20, 10, 10);
    // 结束点
    canvasCtx.fillRect(50, 100, 10, 10);

    canvasCtx.fillStyle = "red";
    // 控制点 1
    canvasCtx.fillRect(230, 30, 10, 10);
    // 控制点 2
    canvasCtx.fillRect(150, 70, 10, 10);
    canvasCtx.draw();
  },
});