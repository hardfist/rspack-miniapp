Page({
  data: {
    result: ''
  },
  onLoad: function () {},
  chooseAdress: function () {
    var that = this;
    tt.chooseAddress({
      success: function (res) {
        tt.showToast({
          title: 'success'
        });
        that.setData({
          result: JSON.stringify(res, null, 4)
        });
      },
      fail: function (res) {
        tt.showToast({
          title: 'fail'
        });
        that.setData({
          result: JSON.stringify(res, null, 4)
        });
      },
      complete:res=>{}
    });
  }
});