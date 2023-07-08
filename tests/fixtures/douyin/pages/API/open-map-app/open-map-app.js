Page({
  onReady(e) {
    this.mapCtx = tt.createMapContext("myMap");
  },
  openMapApp() {
    this.mapCtx.openMapApp({
      longitude: 116.397,
      latitude: 39.909,
      destination: "天安门",
      success(res) {
        console.log("拉起导航地图成功", res);
      },
      fail(err) {
        console.log("拉起导航地图失败", err);
      },
      complete(res) {
        console.log('接口已调用（调用成功、失败都会执行）', res);
      },
    });
  },
});