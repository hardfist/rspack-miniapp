Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    canvasCtx.setStrokeStyle("red");
    canvasCtx.moveTo(150, 20);
    canvasCtx.lineTo(150, 170);
    canvasCtx.stroke();

    canvasCtx.setFontSize(15);
    canvasCtx.setTextAlign("left");
    canvasCtx.fillText("left", 150, 60);

    canvasCtx.setTextAlign("center");
    canvasCtx.fillText("center", 150, 80);

    canvasCtx.setTextAlign("right");
    canvasCtx.fillText("right", 150, 100);

    canvasCtx.draw();
  },
});