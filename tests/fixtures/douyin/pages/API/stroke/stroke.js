Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.moveTo(10, 10);
    canvasCtx.lineTo(100, 10);
    canvasCtx.lineTo(100, 100);
    canvasCtx.lineTo(10, 10);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});