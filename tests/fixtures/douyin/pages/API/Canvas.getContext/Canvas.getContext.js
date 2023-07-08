Page({
  getContext() {
    tt.createSelectorQuery()
      .select("#myCanvas")
      .node()
      .exec((res) => {
        console.log("--- res", res);
        const canvas = res[0].node;
        const canvasCtx = canvas.getContext("2d");
        // 先清除画布
        canvasCtx.clearRect(0,0,res[0].node.width,res[0].node.height);
        // 可调用 canvas 2d 上下文的API
        canvasCtx.fillStyle = "red";
        canvasCtx.fillRect(0, 0, 50, 50);
      });
  }
})