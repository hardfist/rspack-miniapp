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
    tt.getStorage({
      key: "bydedance",
      success(res) {
        tt.showToast({
          title: "缓存内容为" + res.data,
        });
      },
      fail(res) {
        console.log(`getStorage调用失败`);
      },
      complete: res => {
        this.setData({
          hasStore: false
        })
      }
    })
  }
})