Page({
  data: {
    enabled: true,
    direction: 0
  },
  onReady() {
    const that = this;
    tt.onCompassChange(function (res) {
      that.setData({
        direction: parseInt(res.direction, 10)
      });
    });
  },
  stopCompass() {
    if (!this.data.enabled) {
      return;
    }
    const that = this;
    tt.stopCompass({
      success() {
        that.setData({
          enabled: false
        });
      }
    });
  }
});