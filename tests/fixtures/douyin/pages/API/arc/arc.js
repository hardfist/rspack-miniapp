Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    canvasCtx.arc(75, 75, 50, 0, 2 * Math.PI);
    canvasCtx.stroke();
    canvasCtx.draw();
  },
});