Page({
  onReady: function (options) {
    const ctx = tt.createCanvasContext("myCanvas");
    ctx.setStrokeStyle("red"); // 不设置颜色默认 black
    ctx.strokeRect(10, 10, 100, 100);
    ctx.draw();
  },
});