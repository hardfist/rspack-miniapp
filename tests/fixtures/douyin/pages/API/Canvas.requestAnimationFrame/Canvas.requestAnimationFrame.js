Page({
  data: {  
    num: 50,
    isAnimation: false,
    canvas: null,
    canvasCtx: null
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
  
  requestAnimationFrame() {
    const { canvas,canvasCtx,isAnimation } = this.data;
    if (isAnimation){
      return
    }
    this.setData({
      num: 50
    })
    canvasCtx.beginPath();
    canvasCtx.clearRect(0,0,canvas.width,canvas.height);
    this.render();
  },

  render() {
    const {canvas,canvasCtx,num} = this.data;
    if (num<=240){
      this.setData({
        isAnimation: true
      });
      canvas.requestAnimationFrame(this.render); 
    }else {
      this.setData({
        isAnimation: false
      });
      return
    }
    this.setData({
      num: num + 1
    })
    canvasCtx.fillStyle = "pink"
    canvasCtx.arc(num, 25, 10, 0, 2 * Math.PI)
    canvasCtx.fill();
    
  }
})