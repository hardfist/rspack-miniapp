Page({
  data: {
    lineWidths: ["默认", "5px", "10px", "15px"],
  },
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    canvasCtx.moveTo(10, 10);
    canvasCtx.lineTo(150, 10);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(5);
    canvasCtx.moveTo(10, 30);
    canvasCtx.lineTo(150, 30);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(10, 50);
    canvasCtx.lineTo(150, 50);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(15);
    canvasCtx.moveTo(10, 70);
    canvasCtx.lineTo(150, 70);
    canvasCtx.stroke();

    canvasCtx.draw();
  },
});