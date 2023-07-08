Page({
  data: {
    options: ""
  },

  getLaunch() {
    let options = tt.getLaunchOptionsSync();
    this.setData({
      options: JSON.stringify(options)
    });
    console.log(options.path);
  }

});