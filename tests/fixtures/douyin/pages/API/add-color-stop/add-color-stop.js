Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");

    // 创建线性渐变
    const grd = canvasCtx.createLinearGradient(30, 10, 120, 10);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.16, "orange");
    grd.addColorStop(0.33, "yellow");
    grd.addColorStop(0.5, "green");
    grd.addColorStop(0.66, "cyan");
    grd.addColorStop(0.83, "blue");
    grd.addColorStop(1, "purple");

    // 填充
    canvasCtx.setFillStyle(grd);
    canvasCtx.fillRect(10, 10, 150, 80);
    canvasCtx.draw();
  },
});