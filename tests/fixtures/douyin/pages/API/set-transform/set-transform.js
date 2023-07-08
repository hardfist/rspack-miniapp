Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setTransform(1, 1, 0, 1, 0, 0);
    canvasCtx.fillRect(0, 0, 100, 100);
    canvasCtx.draw();
  },
});