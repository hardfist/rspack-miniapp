Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.strokeRect(10, 10, 25, 15);
    canvasCtx.scale(2, 2);
    canvasCtx.strokeRect(10, 10, 25, 15);
    canvasCtx.scale(2, 2);
    canvasCtx.strokeRect(10, 10, 25, 15);

    canvasCtx.draw();
  },
});