Page({
  data: {
    latitude: "",
    longitude: ""
  },
  onReady(){
    this.mapCtx = tt.createMapContext("myMap");
  },
  getCenterLocation() {
    const that = this;
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log("获取当前地图中心的经纬度成功: ",res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
      fail(res){
        console.log("获取当前地图中心的经纬度失败: ",res.errMsg);
      },
      complete(res){
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  }
})