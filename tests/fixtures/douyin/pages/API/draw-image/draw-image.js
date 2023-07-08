Page({
  onLoad: function (options) {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.drawImage(
      "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
      10,
      10,
      250,
      80
    );
    canvasCtx.draw();
  },
});