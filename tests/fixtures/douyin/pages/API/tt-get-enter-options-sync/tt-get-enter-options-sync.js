Page({
  data: {
    options: "",
  },

  getEnter() {
    let options = tt.getEnterOptionsSync();
    this.setData({
      options: JSON.stringify(options),
    });
  },
});
