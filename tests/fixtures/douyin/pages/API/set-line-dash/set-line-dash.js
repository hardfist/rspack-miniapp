Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setLineDash([10, 20], 5);
    canvasCtx.beginPath();
    canvasCtx.moveTo(0, 100);
    canvasCtx.lineTo(400, 100);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});