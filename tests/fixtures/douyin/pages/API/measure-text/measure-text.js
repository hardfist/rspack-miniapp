Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.font = "italic bold 50px cursive";
    const { width } = canvasCtx.measureText("hello world");
    canvasCtx.fillText("hello world", 0, 50);
    canvasCtx.draw();
    this.setData({
      width: width
    })
    console.log(`文本宽度为 ${width}`);
  },
});