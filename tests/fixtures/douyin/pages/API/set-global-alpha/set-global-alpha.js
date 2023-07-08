Page({
  onReady: function (options) {
    const ctx = tt.createCanvasContext("myCanvas");
    ctx.setGlobalAlpha(0.5);
    ctx.strokeRect(10, 10, 100, 100);
    ctx.draw();
  },
});