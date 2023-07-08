Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.rect(10, 10, 100, 100);
    canvasCtx.fill();
    canvasCtx.draw();
  },
});