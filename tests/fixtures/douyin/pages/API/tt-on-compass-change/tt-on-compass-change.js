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

  startCompass() {
    if (this.data.enabled) {
      return;
    }

    const that = this;
    tt.startCompass({
      success() {
        that.setData({
          enabled: true
        });
      }

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