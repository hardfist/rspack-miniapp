Page({
  data: {
    setting: {}
  },
  getSetting() {
    const that = this;
    tt.getSetting({
      success(res) {
        console.log('getSetting success', res.authSetting);
        that.setData({
          setting: res.authSetting
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
    });
  },
  openSetting() {
    tt.openSetting({
      success: res => {
        console.log('调起设置页面成功');
        },
      fail:err=>{
        console.log('调起设置页面失败');
      }
    });
  }
});