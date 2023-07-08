Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    canvasCtx.moveTo(50, 50);
    canvasCtx.lineTo(200, 50);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});