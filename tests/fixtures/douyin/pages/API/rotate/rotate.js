Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.strokeRect(200, 20, 30, 30);
    canvasCtx.rotate((30 * Math.PI) / 180);
    canvasCtx.strokeRect(200, 20, 30, 30);
    canvasCtx.rotate((30 * Math.PI) / 180);
    canvasCtx.strokeRect(200, 20, 30, 30);

    canvasCtx.draw();
  },
});