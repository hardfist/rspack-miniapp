Page({
  data: {
    value: 0.5
  },
  onLoad: function (options) {
    this.getBrightness();
  },
  getBrightness() {
    tt.getScreenBrightness({
      success: (res) => {
        console.log("getScreenBrightness success", res);
        this.setData({
          value: res.value.toFixed(2)
        })
      },
      fail: (res) => {
        console.log("getScreenBrightness fail", res);
      }
    });
  },
  setBrightness(data) {
    tt.setScreenBrightness({
      value: data,
      success: (res) => {
        console.log("setScreenBrightness success", res);
      },
      fail: (res) => {
        console.log("setScreenBrightness failed", res);
      },
      complete: (res) => {
        console.log("setScreenBrightness completed");
      }
    });
  },
  bindchanging(e) {
    // console.log('拖动过程中触发的事件', e);
    this.setBrightness(e.detail.value);
  },
  bindchange(e) {
    this.setBrightness(e.detail.value);
  }
})