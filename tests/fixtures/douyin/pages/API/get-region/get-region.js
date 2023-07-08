Page({
  data: {
    southwest: null,
    northeast: null
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getRegion() {
    const that = this;
    this.mapCtx.getRegion({
      success(res) {
        console.log("获取视野范围成功: ",res);
        that.setData({
          southwest: res.southwest,
          northeast: res.northeast
        });
      },
      fail(res) {
        console.log("获取视野范围失败: ",res.errMsg);
      },
      complete(res) {
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  }
})