Page({
  data: {
    storageKeys: '',
    currentSize: '',
    limitSize: ''
  },

  onLoad(){
    this.setStorage();
    this.showStorageInfo();
  },

  setStorage(){
    tt.setStorageSync("_name","kobe");
    tt.setStorageSync("_age","18");
    tt.setStorageSync("_gender","male");
  },

  clearStorage() {
    let that = this;
    try {
      return tt.showModal({
        title: '提示',
        content: '你确定要清空数据吗?',
        success(res) {
          if (res.confirm) {
            tt.clearStorage({
              success(res) {
                console.log("clearStorage 调用成功");
                that.showStorageInfo()
              },
              fail(res) {
                console.log("clearStorage 调用失败");
              },
              complete(res) {
                console.log("clearStorage 接口调用了");
              }
            });
          }
        }
      });
    } catch (error) {}
  },

  showStorageInfo() {
    let storageInfo = tt.getStorageInfoSync();
    const {keys,limitSize,currentSize} = storageInfo;
    this.setData({
      storageKeys: JSON.stringify(keys),
      limitSize,
      currentSize
    });
  }

});