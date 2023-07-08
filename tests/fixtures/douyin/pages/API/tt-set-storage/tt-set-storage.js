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
    tt.setStorage({
      key,
      data: value,
      success() {
        tt.showToast({
          title: '数据保存成功',
          success(){
            that.setData({
              key: '',
              value: ''
            })
          }
        });
      },
      fail(res) {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log(res.errMsg);
      },
      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log(res.errMsg);
      }
    })
  }

});