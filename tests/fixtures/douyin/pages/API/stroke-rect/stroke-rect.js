Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setStrokeStyle("blue");
    canvasCtx.strokeRect(10, 10, 150, 50);
    canvasCtx.draw();
  },
});