const app = getApp();
Page({
  setStorage() {
    tt.setStorage({
      key: "bydedance",
      data: "dancer",
      success: res => {
        tt.showToast({
          title: "设置缓存成功",
        });
        this.setData({
          hasStore: true
        })
      },
      fail(res) {
        console.log(`setStorage调用失败`);
      },
      complete() {
        console.log(`setStorage触发`);
      }
    });
  },
  getStorage() {
    try {
      const didShownAd = tt.getStorageSync("bydedance");
      if (didShownAd) {
        tt.showToast({
          title: "缓存内容为" + didShownAd,
        });
      }else{
         tt.showToast({
          title: "暂无缓存内容",
        });
      }
    } catch (err) {
      console.log(`getStorageSync调用失败`);
    }
  }
})