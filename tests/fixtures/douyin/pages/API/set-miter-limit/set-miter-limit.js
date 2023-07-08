Page({
  data: {
    miterLimits: [1, 2, 3, 4],
  },
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.beginPath();
    canvasCtx.setLineWidth(10);
    canvasCtx.setLineJoin("miter");
    canvasCtx.setMiterLimit(1);
    canvasCtx.moveTo(10, 10);
    canvasCtx.lineTo(100, 50);
    canvasCtx.lineTo(10, 90);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(10);
    canvasCtx.setLineJoin("miter");
    canvasCtx.setMiterLimit(2);
    canvasCtx.moveTo(50, 10);
    canvasCtx.lineTo(140, 50);
    canvasCtx.lineTo(50, 90);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(10);
    canvasCtx.setLineJoin("miter");
    canvasCtx.setMiterLimit(3);
    canvasCtx.moveTo(90, 10);
    canvasCtx.lineTo(180, 50);
    canvasCtx.lineTo(90, 90);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineWidth(10);
    canvasCtx.setLineJoin("miter");
    canvasCtx.setMiterLimit(4);
    canvasCtx.moveTo(130, 10);
    canvasCtx.lineTo(220, 50);
    canvasCtx.lineTo(130, 90);
    canvasCtx.stroke();

    canvasCtx.draw();
  },
});