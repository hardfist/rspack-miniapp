const app = getApp();
Page({
  data: {
    hasStore: false
  },
  setStorage() {
    tt.setStorage({
      key: "byte",
      data: "dance",
      success: res => {
        tt.showToast({
          title: "数据保存成功",
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
  removeStorage() {
    const that = this;
    tt.removeStorage({
      key: "bydedance",
      success(res) {
        tt.showToast({
          title: "成功移除key为byte的缓存",
          icon: "none"
        });
      },
      fail(res) {
        console.log(`删除缓存失败`);
      },
      complete(res) {
        that.setData({
          hasStore: false
        })
      }
    })
  }
})