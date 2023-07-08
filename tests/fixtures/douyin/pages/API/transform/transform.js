Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.transform(1, 1, 0, 1, 0, 0);
    canvasCtx.fillRect(0, 0, 100, 100);
    canvasCtx.setTransform();
    canvasCtx.draw();
  },
});