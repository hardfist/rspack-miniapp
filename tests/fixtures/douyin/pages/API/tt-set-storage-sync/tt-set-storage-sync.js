Page({
  data: {
    key: '',
    value: ''
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
    tt.showToast({
      title: '数据保存成功',
      success(){
        that.setData({
          key: '',
          value: ''
        })
      }
    }); 
  }
});