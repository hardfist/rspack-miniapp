Page({
  onReady: function () {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.rect(0, 0, 100, 100);
    canvasCtx.moveTo(0, 50);
    canvasCtx.lineTo(100, 50);
    canvasCtx.moveTo(50, 0);
    canvasCtx.lineTo(50, 100);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});