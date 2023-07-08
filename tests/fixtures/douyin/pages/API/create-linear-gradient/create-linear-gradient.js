Page({
  onReady: function () {
    const ctx = tt.createCanvasContext("myCanvas");

    // 创建线性渐变色
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    // 指定渐变点
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");

    // 绘制
    ctx.setFillStyle(grd);
    ctx.fillRect(0, 0, 200, 120);
    ctx.draw();
  },
});