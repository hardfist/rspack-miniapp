Page({
  data: {
    result: ""
  },
  
  toMiniProgram(){
    let that = this
    tt.navigateToMiniProgram({

      appId: "ttb3afc5122c855ea9",
      path: "pages/index/index?arg1=ascii&arg2=" + encodeURIComponent("中文"),
      extraData: {
        arg3: "hello",
      },
      envVersion: "current",
      success(){
        console.log("接口调用成功");
      },
      fail(errMsg){
        console.log(errMsg);
        that.setData({
          result: "接口调用失败,小程序跳转需传入配置项: 必填：appId（要跳转的小程序ID），选填：path（要跳转的小程序页面路径（不传则默认打开首页））、extraData（需要传递给目标小程序的数据）、envVersion（要打开的小程序版本）等"
        });
      },
      complete(){
        console.log("接口调用了");
      }
    });
  }
})