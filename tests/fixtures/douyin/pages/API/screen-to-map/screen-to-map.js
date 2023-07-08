Page({
  data: {
    x: 10,
    y: 10,
    latitude: null,
    longitude: null
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap", this);
  },
  screenToMap() {
    const that = this
    this.mapCtx.screenToMap({
      x: this.data.x,
      y: this.data.y,
      success(res) {
        console.log("转换成功: ", res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
      fail(res) {
        console.log("转换失败: ", res.errMsg);
      },
      complete(res) {
        console.log("接口已调用（调用成功、失败都会执行）: ", res.errMsg);
      }
    });
  },
});
