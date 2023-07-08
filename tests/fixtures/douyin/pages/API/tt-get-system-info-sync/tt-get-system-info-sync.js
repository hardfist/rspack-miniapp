Page({
  data: {
    systemInfo: {}
  },

  clear() {
    this.setData({
      systemInfo: {}
    });
  },

  getSystemInfoSync() {
    try {
      const res = tt.getSystemInfoSync();
      this.setData({
        systemInfo: res
      });
      console.log("getSystemInfoSync Success: ", res);
    } catch (err) {
      console.log('getSystemInfoSync Error: ', err);
    }
  }

});