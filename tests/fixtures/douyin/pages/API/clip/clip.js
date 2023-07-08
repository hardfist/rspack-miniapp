Page({
  onReady() {
    const canvasCtx = tt.createCanvasContext("myCanvas");
    canvasCtx.save();
    canvasCtx.beginPath();
    canvasCtx.rect(50, 0, 240, 120);
    canvasCtx.stroke();
    canvasCtx.clip();
    canvasCtx.drawImage(
      "https://s3.pstatp.com/toutiao/static/img/logo.271e845.png",
      50,
      0
    );
    canvasCtx.restore();
    canvasCtx.draw();
  },
});