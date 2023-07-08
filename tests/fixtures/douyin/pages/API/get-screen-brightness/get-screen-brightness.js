Page({
  data: {
    value: ''
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
        console.log("getScreenBrightness failed", res);
      },
      complete: (res) => {
        console.log("getScreenBrightness completed");
      }
    });
  }
})