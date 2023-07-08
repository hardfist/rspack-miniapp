const app=getApp();
Page({
  click(){
    tt.canRateAwemeOrders({
      orderIds: ['1', '2'],
      success(res) {
        console.log("调用成功",res)
        tt.showToast({
          title: `返回的result：${res.result}`,
        })
      },
      fail(err){
        console.log("调用失败",err)
        tt.showToast({
          title: `调用失败：${err.errMsg}`,
        })
      },
      complete(res){
        console.log("完成",res)
      }
    });
  }
})