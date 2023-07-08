Page({
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    x: null,
    y: null,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.32452,
      },
    ],
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap", this);
  },
  mapToScreen() {
    const that = this
    this.mapCtx.mapToScreen({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      success(res) {
        console.log("转换成功: ", res);
        that.setData({
          x: res.x,
          y: res.y
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
