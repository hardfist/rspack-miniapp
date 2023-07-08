Page({
  data: {
    key: '',
    value: '',
    storageKeys: '',
    currentSize: '',
    limitSize: ''
  },

  keyChange(e) {
    this.setData({
      key: e.detail.value
    });
  },

  valueChange(e) {
    this.setData({
      value: e.detail.value
    });
  },

  setStorage() {
    let that = this;
    let {
      key,
      value
    } = this.data;

    if (key === '') {
      return tt.showToast({
        title: 'key 不能为空',
        icon: 'fail'
      });
    }

    tt.setStorageSync(key, value);
    return tt.showToast({
      title: '数据保存成功',
      success(){
        that.setData({
          key: '',
          value: ''
        })
      }
    });

  },

  clearStorage() {
    let that = this;
    try {
      return tt.showModal({
        title: '提示',
        content: '你确定要清空数据吗?',
        success(res) {
          if (res.confirm) {
            tt.clearStorageSync();
            that.setData({
              key: '',
              value: ''
            });
            that.showStorageInfo();
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