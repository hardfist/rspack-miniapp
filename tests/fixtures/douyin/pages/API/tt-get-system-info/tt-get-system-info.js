Page({
  data: {
    systemInfo: {}
  },
  clear () {
    this.setData({
      systemInfo: {}
    });
  },
  getSystemInfo() {
    const that = this;
	  tt.getSystemInfo({
      success(res) {
        that.setData({
	        systemInfo: res
	      });
        console.log("getSystemInfo 调用成功", res);
      },
      fail(err) {
        console.log("getSystemInfo 调用失败", err);
      },
      complete(res) {
        console.log("getSystemInfo 调用完成", res);
      },
	  });
  }
})
