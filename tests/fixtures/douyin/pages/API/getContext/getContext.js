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
        try{
          const {height,width} = canvas;
          offCanvas = tt.createOffscreenCanvas();
          offCanvas.width = width;
          offCanvas.height = height;
          offCtx = offCanvas.getContext("2d");
        } catch(err) {
          console.log("创建离屏 canvas 出错: ",err);
          tt.showModal({
            title: '创建离屏 canvas 出错', // 内容
            content: `错误信息: ${JSON.stringify(err)}`,
            showCancel: false
          });
        }
      });
  },
  getContext() {
    if (!offCanvas) {
      return tt.showToast({
        title: '离屏画布创建失败,请稍后再试',
        icon: "none"
      });
    }
    const { canvasCtx,canvas } = this.data;
    const {height,width} = canvas;
    canvasCtx.clearRect(0,0,width,height);
    offCtx.rect(0, height / 2, width, height / 2);
    offCtx.fillStyle = "pink";
    offCtx.fill();
    canvasCtx.drawImage(offCanvas, 0, 0);
  }
})