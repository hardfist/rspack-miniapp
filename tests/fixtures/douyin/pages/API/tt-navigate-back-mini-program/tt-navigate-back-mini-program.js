Page({
  data: {
    result: ""
  },
  backMiniProgram(){
    let that = this;
    tt.navigateBackMiniProgram({
      extraData: {
        arg3_back: "hello, world",
      },
      success(){
        console.log("接口调用成功");
      },
      fail(errMsg){
        console.log("接口调用失败: "+errMsg);
        tt.showToast({
          title: "接口调用失败",
          icon: "fail"
        });
        that.setData({
          result: "返回到上一个小程序失败: 只有在当前小程序是被其他小程序打开时可以调用成功"
        });
      },
      complete(){
        console.log("接口调用了");
      }
    });
  }
})