Page({
  onReady() {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.setStrokeStyle("blue");
    // 在最开始的时候相当于调用了一次 beginPath
    canvasCtx.moveTo(20, 20);
    canvasCtx.lineTo(200, 20);
    canvasCtx.stroke();

    // 开启一个新的路径
    canvasCtx.beginPath();
    canvasCtx.setStrokeStyle("green");
    canvasCtx.moveTo(20, 20);
    canvasCtx.lineTo(120, 120);
    canvasCtx.stroke();
    canvasCtx.draw();
  }
})