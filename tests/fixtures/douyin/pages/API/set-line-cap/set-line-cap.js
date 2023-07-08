Page({
  data: {
    lineJoinTypes: ["bevel", "round", "miter"],
  },
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.beginPath();
    canvasCtx.setLineJoin("bevel");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(50, 10);
    canvasCtx.lineTo(140, 50);
    canvasCtx.lineTo(50, 90);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineJoin("round");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(90, 10);
    canvasCtx.lineTo(180, 50);
    canvasCtx.lineTo(90, 90);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineJoin("miter");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(130, 10);
    canvasCtx.lineTo(220, 50);
    canvasCtx.lineTo(130, 90);
    canvasCtx.stroke();

    canvasCtx.draw();
  },
});