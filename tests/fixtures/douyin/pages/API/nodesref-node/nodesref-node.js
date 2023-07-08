let canvas, canvasCtx;
Page({
  data: {
    nodeInfo:''
  },
  onLoad: function (options) {
    const query = tt.createSelectorQuery();
    query
      .select("#myCanvas")
      .fields({
        node: true,
      })
      .exec((res) => {
        canvas = res[0].node;
        canvasCtx = canvas.getContext("2d");
        canvasCtx.font = "20px Georgia";
        canvasCtx.fillStyle = "red";
        canvasCtx.fillText("byteDance", 0, 50);
      });
  },
  getCanvas1(){
    const that = this;
    tt.createSelectorQuery()
    .select("#myCanvas") // canvas 组件的id
    .fields(
      {
        node: true, // 若获取canvas 实例，必须指定 node 为true
      },
      function (res) {
        const canvas = res.node; // canvas 实例
      }
    )
    .exec((res) => {
      console.log("示例1:",res[0].node)
      that.setData({
        nodeInfo:"示例1:\n" + JSON.stringify(res[0].node)
      })
      const canvas = res[0].node; // canvas 实例
      const ctx = canvas.getContext("2d"); // canvasContext
      // draw
    });
  },
  getCanvas2(){
    const that = this;
    tt.createSelectorQuery()
    .select("#myCanvas")  // canvas 组件的id
    .node()
    .exec((res) => {
      console.log("示例2:",res[0].node)
      that.setData({
        nodeInfo:"示例2:\n" + JSON.stringify(res[0].node)
      })
      const canvas = res[0].node         // canvas 实例
      const ctx = canvas.getContext('2d'); // canvasContext
      // draw
    })
  }
})