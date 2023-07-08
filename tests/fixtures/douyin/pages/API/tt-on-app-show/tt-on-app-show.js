Page({
  data: {
    showQuery: {}
  },
  onLoad: function (options) {
    tt.onAppShow(res => {
      const params = Object.assign({}, res);
      console.log("scene: ", params.scene);
      console.log("path: ", params.path);
      console.log("query: ", params.query);
      console.log("referrerInfo: ", params.referrerInfo);
      console.log("showFrom: ", params.showFrom);
      params.query = params.query && JSON.stringify(params.query);
      params.referrerInfo = params.referrerInfo && JSON.stringify(params.referrerInfo);
      this.setData({
        showQuery: params
      })
    });
  },
  clearAllAttr() {
    this.setData({
      showQuery: {}
    })
  },
})