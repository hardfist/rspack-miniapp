// pages/API/tt-request-subscribe-message/tt-request-subscribe-message.js
Page({
  data: {

  },
  subscribeMessage() {
    tt.requestSubscribeMessage({
      //开放平台申请的模版id  支持最多3个同类型模版
      tmplIds: ["MSG16471cb5c6e70cc75da86b7f9e4af2d01f113905","MSG164c584b79367059b68f2cd4467570adc4a13904"], 
      success(res) {
        console.log("订阅成功: ",res);
        //订阅成功回调
        let msg1 = "";
        let and = "";
        let msg2 = "";
        console.log("开播提醒通知: " + res['MSG16471cb5c6e70cc75da86b7f9e4af2d01f113905']);
        console.log("直播取消通知: " + res['MSG164c584b79367059b68f2cd4467570adc4a13904']);
        msg1 = res['MSG16471cb5c6e70cc75da86b7f9e4af2d01f113905'] === "accept" ? "开播提醒通知" : "" ;
        msg2 = res['MSG164c584b79367059b68f2cd4467570adc4a13904'] === "accept" ? "直播取消通知" : "" ;
        and = msg1 && msg2 && "及" ;
        tt.showModal({
          content: `${msg1}${and}${msg2} 订阅成功`,
          showCancel: false
        })
      },
      fail(res) {
        //订阅失败回调
        console.log("订阅失败,错误码: " + res.errCode);
        tt.showModal({
          title: "订阅失败",
          content: `errCode: ${res.errCode || "暂时未加"}`,
          showCancel: false
        });
      },
      complete(res) {
        //完成回调
        console.log("API调用完成: " + res.errMsg);
      },
    });
  }
})