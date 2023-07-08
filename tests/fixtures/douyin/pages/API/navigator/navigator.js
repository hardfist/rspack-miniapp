Page({
  data: {
    now: Date.now()
  },
  
  onShow() {
    this.setData({
      now: Date.now()
    });
  },

  navigateTo: function () {
    tt.navigateTo({
      url: './navigator?a=b&c=d'
    });
  },
  navigateBack: function () {
    tt.navigateBack();
  },
  redirectTo: function () {
    tt.redirectTo({
      url: './navigator'
    });
  },

  reLaunch() {
    tt.reLaunch({
      url: '/pages/API/index',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {}
    });
  },

  switchTab() {
    tt.switchTab({
      url: '/pages/API/index',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {}
    });
  }

});