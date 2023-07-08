Page({
  data: {
    envInfo: {},
  },
  clear () {
    this.setData({
      envInfo: {},
    });
  },
  getEnvInfo() {
    this.setData({
      envInfo: tt.getEnvInfoSync(),
    });
  },
});
