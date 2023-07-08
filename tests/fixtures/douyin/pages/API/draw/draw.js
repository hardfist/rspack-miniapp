Page({
  draw() {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setFillStyle("red");
    canvasCtx.fillRect(10, 10, 100, 100);
    canvasCtx.draw();
  },
});