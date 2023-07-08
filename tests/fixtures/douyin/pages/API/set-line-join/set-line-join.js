Page({
  data: {
    lineGaps: ["butt", "round", "square"],
  },
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.beginPath();
    canvasCtx.setLineCap("butt");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(10, 30);
    canvasCtx.lineTo(150, 30);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineCap("round");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(10, 50);
    canvasCtx.lineTo(150, 50);
    canvasCtx.stroke();

    canvasCtx.beginPath();
    canvasCtx.setLineCap("square");
    canvasCtx.setLineWidth(10);
    canvasCtx.moveTo(10, 70);
    canvasCtx.lineTo(150, 70);
    canvasCtx.stroke();

    canvasCtx.draw();
  },
});