Page({
  data: {
    extConfig: ''
  },
  getExtConfig() {
    let that = this;
    tt.getExtConfig({
      success(res) {
        console.log('success 执行了', res);
        that.setData({
          extConfig: JSON.stringify(res.extConfig) || ''
        })
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }
    })
  }
})
