Page({
  data: {
    nodes: {}
  },
  onLoad() {
    tt.pageScrollTo({
      scrollTop: 500
    });
  },
  getNodeInfo() {
    let that = this;
    tt.createSelectorQuery()
      .selectViewport()
      .scrollOffset(function (res) {
        console.log('res', res);
        that.setData({
          nodes: res
        })
      })
      .exec();
  }
})