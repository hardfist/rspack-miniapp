Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType: function () {
    var that = this;
    tt.getNetworkType({
      success: function (res) {
        that.setData({
          hasNetworkType: true,
          networkType: res.networkType
        });
      }
    });
  },
  clear: function () {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    });
  },

  onShow() {
    tt.onNetworkStatusChange(({
      isConnected,
      networkType
    }) => {
      if (isConnected) {
        tt.hideLoading();
      } else {
        tt.showLoading({
          title: '请连接网络'
        });
      }
    });
  }

});