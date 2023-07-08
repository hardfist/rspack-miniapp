Page({
  data: {
    scroll: false,
    nodes: {}
  },
  getNodes() {
    let that = this;
    let query = tt.createSelectorQuery();
    // 选择显示区域，添加滚动位置查询请求
    query.selectViewport().scrollOffset();
    query.exec(res => {
      console.log('节点信息获取成功', res);
      that.setData({
        nodes: res[0] || {}
      })
    })
  },
  getScroll() {
    let scroll = !this.data.scroll;
    this.setData({
      scroll
    }, () => {
      this.setScrollTop();
    })
  },
  // 设置页面滚动高度
  setScrollTop() {
    let that = this;
    tt.pageScrollTo({
      scrollTop: 400,
      duration: 1000,
      success(res) {
        console.log(`pageScrollTo调用成功`);
        that.getNodes();
      },
      fail(res) {
        console.log(`pageScrollTo调用失败`);
      },
    });
  },
})