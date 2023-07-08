Page({
  data: {
    scale: null
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getScale() {
    const that = this;
    this.mapCtx.getScale({
      success(res) {
        console.log("获取地图缩放值成功: ",res);
        that.setData({
          scale: `${res.scale}`
        });
      },
      fail(res) {
        console.log("获取地图缩放值失败: ",res.errMsg);
      },
      complete(res) {
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  }
})