const app = getApp();
Page({
  data: {
    hasStore: false
  },
  setStorage() {
    const that = this;
    tt.setStorageSync("byte", "dance");
    tt.showToast({
      title: '数据保存成功',
      success(){
        that.setData({
          hasStore: true
        })
      }
    });
  },
  removeStorage() {
    tt.removeStorageSync("byte");
    tt.showToast({
      title: "成功移除key为byte的缓存",
      icon: "none"
    });
    this.setData({
      hasStore: false
    })
  }
})