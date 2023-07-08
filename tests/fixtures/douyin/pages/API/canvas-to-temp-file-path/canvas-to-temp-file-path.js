Page({
  data: {
    src: "",
  },
  onLoad() {
    const ctx = tt.createCanvasContext("myCanvas");
    ctx.lineWidth = 10;
    ctx.strokeRect(75, 140, 150, 110);
    ctx.fillRect(130, 190, 40, 60);
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
    ctx.draw();
  },
  canvasToTempFilePath() {
    tt.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,
      height: 225,
      destWidth: 300,
      destHeight: 225,
      canvasId: "myCanvas",
      fileType: "png",
      quality: 1,
      success: (res) => {
        this.setData({
          src: res.tempFilePath,
        });
        tt.showModal({
          title: "图片路径",
          content: JSON.stringify(res.tempFilePath),
        });
      },
      fail(err) {
        console.log("tt.canvasToTempFilePath 调用失败: ",err);
      },
      complete(res) {
        console.log("tt.canvasToTempFilePath 调用完成(成功/失败都会执行): ",res);
      }
    });
  },
});