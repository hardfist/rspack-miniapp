let canvas, canvasCtx;
Page({
  data: {
    componentInfo: "",
  },
  onReady() {
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
  getButton() {
    tt.createSelectorQuery()
      .select("#myButton")
      .fields({
        id: true,
        dataset: true,
        rect: true,
        size: true,
        scrollOffset: true,
      })
      .exec((res) => {
        const buttonNode = res[0];
        console.log(buttonNode);
        const {
          id, // 节点的 ID
          dataset, // 节点的 dataset
          left, // 节点的左边界坐标
          right, // 节点的右边界坐标
          top, // 节点的上边界坐标
          bottom, // 节点的下边界坐标
          width, // 节点的宽度
          height, // 节点的高度
          scrollLeft, // 节点的水平滚动位置
          scrollTop, // 节点的竖直滚动位置
        } = buttonNode;
        const buttonInfo = `当前button的信息：id: ${id}; width: ${width}px, height: ${height}px; 位置信息：top: ${top}px, left: ${left}px, bottom: ${bottom}px, right: ${right}px; data: ${JSON.stringify(
          dataset,
        )}`;
        this.setData({
          componentInfo: buttonInfo,
        });
      });
  },
  getCanvas() {
    tt.createSelectorQuery()
      .select("#myCanvas")
      .fields({
        node: true,
      })
      .exec((res) => {
        const canvasNode = res[0];
        const canvasInfo = `canvas 类型: ${canvasNode.nodeCanvasType};`;
        this.setData({
          componentInfo: canvasInfo,
        });
      });
  },
});