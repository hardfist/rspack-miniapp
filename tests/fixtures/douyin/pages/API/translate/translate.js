Page({
  onLoad: function (options) {
    const ctx = tt.createCanvasContext("myCanvas");

    ctx.strokeRect(10, 10, 100, 100);
    ctx.translate(30, 30);
    ctx.strokeRect(10, 10, 100, 100);
    ctx.translate(30, 30);
    ctx.strokeRect(10, 10, 100, 100);

    ctx.draw();
  },
});