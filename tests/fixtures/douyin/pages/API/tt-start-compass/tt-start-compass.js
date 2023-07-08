Page({
  data: {
    enabled: true,
    direction: 0
  },
  startCompass() {
    const that = this;
    tt.startCompass({
      success() {
        that.setData({
          enabled: false
        });
        tt.onCompassChange(function (res) {
          that.setData({
            direction: parseInt(res.direction, 10)
          });
        });
      }
    });
  }
});