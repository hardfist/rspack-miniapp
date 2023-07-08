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
  createImage() {
    const {canvas,canvasCtx} = this.data;
    const image = canvas.createImage();
    image.onload = () => {
      let { width, height } = image;
      const { width:canvasWidth,height:canvasHeight } = canvas;
      canvasCtx.clearRect(0,0,canvasWidth,canvasHeight);
      const calcWidth = canvasWidth * 0.8;
      let calcHeight = height / (width / calcWidth);
      canvasCtx.drawImage(image, 0.1 * canvasWidth, 0.3 * canvasHeight, calcWidth, calcHeight);
    };

    image.src = 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png';
    image.onerror = (err) => {
      console.log("image 加载发生错误: ", err);
      tt.showModal({
        title: "image 加载发生错误",
        content: `错误信息: ${JSON.stringify(err)}`,
        showCancel: false
      });
    };
  }
})