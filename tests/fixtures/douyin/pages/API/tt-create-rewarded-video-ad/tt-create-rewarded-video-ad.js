let videoAd = null;
Page({
  data: {
    
  },

  onLoad() {
    videoAd = tt.createRewardedVideoAd({ adUnitId: "2rlbdnmp0ip6jdil3j" });
  },

  bindListener(){
    videoAd.onLoad(() => {
      console.log("拉取广告素材成功");
    });

    videoAd.onClose((res) => {
      console.log("已关闭广告");
      if (res.isEnded) {
        // 给予奖励
      };
    });
    
    videoAd.onError(error => {
      console.log("errorCode: " + error.code);
      console.log("errMsg: " + error.errMsg);
    });
  },

  showVideoAd() {
    // 绑定事件监听
    this.bindListener();
    // 显示广告
    videoAd
      .show()
      .then(() => {
        console.log("广告显示成功");
      })
      .catch((err) => {
        console.log("广告组件出现问题", err);
        // 可以手动加载一次
        videoAd.load().then(() => {
          console.log("手动加载成功");
          // 加载成功后需要再显示广告
          return videoAd.show();
        });
      });
  },

  unBindListener(){
    videoAd.offLoad(() => {
      console.log("解除绑定 load 事件的监听器");
    });

    videoAd.offError(() => {
      console.log("解除绑定 error 事件的监听器");
    });

    videoAd.offClose(() => {
      console.log("解除绑定 close 事件的监听器");
    });
  }

})