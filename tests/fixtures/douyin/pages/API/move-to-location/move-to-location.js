Page({
  onReady(){
    this.mapCtx = tt.createMapContext("myMap");
  },
  moveToLocationCurrent() {
    const that = this;
    tt.authorize({
      scope: "scope.userLocation",
      success (res) {
        console.log("已允许授权定位权限: ", res);
        that.mapCtx.moveToLocation({
          success(res) {
            console.log("移动成功: ",res);
          },
          fail(res){
            console.log("移动失败: ",res.errMsg);
          },
          complete(res){
            console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
          }
        });
      },
      fail (err) {
        console.log("定位失败:", err.errMsg);
        that.msg('已拒绝授权定位权限')
      },
    });
  },
  moveToLocation() {
    const that = this;
    that.mapCtx.moveToLocation({
      longitude: 116.397493,
      latitude: 39.907957,
      success(res) {
        console.log("移动成功, ",res);
      },
      fail(res){
        console.log("移动失败: ",res.errMsg);
      },
      complete(res){
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  },
  msg(title, duration = 1500) {
    tt.showToast({
      title: title,
      duration,
      icon: 'none'
    });
  }
})