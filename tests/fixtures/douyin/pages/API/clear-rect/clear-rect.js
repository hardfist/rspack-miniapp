Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setFillStyle("red");
    canvasCtx.fillRect(0, 0, 100, 100);
    canvasCtx.clearRect(10, 10, 50, 50);
    canvasCtx.draw();
  },
});