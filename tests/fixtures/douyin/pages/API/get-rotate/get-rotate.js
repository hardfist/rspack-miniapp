Page({
  data: {
    rotate: null
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getRotate() {
    const that = this
    this.mapCtx.getRotate({
      success(res) {
        console.log('获取旋转角成功：', res);
        that.setData({
          rotate: `${res.rotate}`
        })
      },
      fail(res){
        console.log("获取旋转角失败: ", res.errMsg);
      },
      complete(res){
        console.log("接口已调用（调用成功、失败都会执行）: ", res.errMsg);
      }
    });
  },
});