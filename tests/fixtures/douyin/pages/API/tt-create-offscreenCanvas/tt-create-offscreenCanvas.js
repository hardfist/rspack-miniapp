let offCanvas, offCtx;
Page({
  data: {  
    canvas: null,
    canvasCtx: null,
  },
  onReady() {
    tt.createSelectorQuery()
      .select("#myCanvas")
      .node()
      .exec((res) => {
        const canvas = res[0].node;
        const canvasCtx = canvas.getContext("2d");
        this.setData({
          canvas,
          canvasCtx
        });
      });
  },
  createOffscreenCanvas() {
    const { canvasCtx,canvas } = this.data;
    const {height,width} = canvas;
    offCanvas = tt.createOffscreenCanvas();
    offCtx = offCanvas.getContext("2d");

    offCanvas.width = width;
    offCanvas.height = height;
    offCtx.rect(0, 0, width, height);
    offCtx.fillStyle = "pink";
    offCtx.fill();

    canvasCtx.drawImage(offCanvas, 0, 0);
  },
})