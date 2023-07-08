Page({
  data: {
    baselines: [
      "top",
      "hanging",
      "middle",
      "alphabetic",
      "ideographic",
      "bottom",
    ],
  },
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    const { baselines } = this.data;
    baselines.forEach(function (baseline, index) {
      canvasCtx.setTextBaseline(baseline);
      let y = 75 + index * 75;
      canvasCtx.beginPath();
      canvasCtx.moveTo(0, y + 0.5);
      canvasCtx.lineTo(550, y + 0.5);
      canvasCtx.stroke();
      canvasCtx.fillText("Abcdefghijklmnop (" + baseline + ")", 0, y);
    });
    canvasCtx.draw();
  },
});