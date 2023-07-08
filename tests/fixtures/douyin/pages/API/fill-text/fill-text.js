Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.setFontSize(20);
    canvasCtx.fillText("Hello", 10, 20);
    canvasCtx.fillText("ByteDancer", 80, 20);

    canvasCtx.draw();
  },
});