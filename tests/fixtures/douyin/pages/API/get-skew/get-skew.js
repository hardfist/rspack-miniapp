Page({
  data: {
    skew: null
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getSkew() {
    const that = this
    this.mapCtx.getSkew({
      success(res) {
        console.log('获取倾斜角成功：', res);
        that.setData({
          skew: `${res.skew}`
        })
      },
      fail(res){
        console.log("获取倾斜角失败: ", res.errMsg);
      },
      complete(res){
        console.log("接口已调用（调用成功、失败都会执行）: ", res.errMsg);
      }
    });
  },
});