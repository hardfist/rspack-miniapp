let recorder;
Page({
  data: {  
    num: 50,
    hig: 0,
    isAnimation: false,
    canvas: null,
    canvasCtx: null,
    src: "",
  },

  onReady() {
    tt.createSelectorQuery()
      .select("#myCanvas")
      .node()
      .exec((res) => {
        const canvas = res[0].node;
        const canvasCtx = canvas.getContext("2d");
        recorder = tt.createMediaRecorder(canvas, {
          width: canvas.width, // video width​
          height: canvas.height, // video height​
          videoBitsPerSecond: 1000, // bit rate in kbps​
          gop: 12, // key frame interval​
          fps: 60, // frames per second​
        });
        this.setData({
          canvas,
          canvasCtx
        });
        recorder.onStart(() => {
          console.log("onStart:::: ");
        })
        recorder.onStop((res) => {
          console.log("onStop:::: ", res);
          this.setData({
            src: res.filePath
          })
        })
        recorder.onError((err) => {
          console.log("onError:::: ", err);
        })
      });
  },
  
  requestAnimationFrame() {
    const { canvas,canvasCtx,isAnimation } = this.data;
    if (isAnimation){
      return
    }
    this.setData({
      num: 60,
      hig: 10
    })
    canvasCtx.beginPath();
    canvasCtx.clearRect(0,0,canvas.width,canvas.height);
    this.render();
  },

  render() {
    const {canvas,canvasCtx,num,hig} = this.data;
    if (num<=240,hig<=220){
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
      num: num + 1,
      hig: hig + 1
    })
    canvasCtx.fillStyle = "blue"
    canvasCtx.arc(50, hig, 10, 0, 2 * Math.PI)
    canvasCtx.arc(num, 0, 10, 0, 2 * Math.PI)
    canvasCtx.fill();
    
  },
  start() {
    recorder.start();
    tt.showToast({
      title: "start",
      icon: "none",
    });
  },
  stop() {
    recorder.stop();
  },
  destroy() {
    recorder.destroy();
    tt.showToast({
      title: "destroy",
      icon: "none",
    });
    console.log("destroy::::");
  },
})