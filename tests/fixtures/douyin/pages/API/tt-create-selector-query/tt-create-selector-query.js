Page({
  data: {
    nodes: {},
    scroll: false,
    scrollInfo: {},
    useComponent: false,
    fields: false
  },
  onLoad() {
    this.getNodes();
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
  getNodes() {
    let that = this;
    let query = tt.createSelectorQuery();
    query.select('.box').boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(res => {
      console.log('节点信息获取成功', res);
      that.setData({
        nodes: res[0] || {},
        scrollInfo: res[1] || {}
      })
    })
  },
  useComponent() {
    this.setData({
      useComponent: !this.data.useComponent
    })
  },
  getFields: function () {
    let that = this;
    let fields = !this.data.fields;
    this.setData({
      fields
    })
    if (!fields) {
      this.getNodes();
      return;
    }
    tt.createSelectorQuery()
      .select(".box")
      .fields(
        {
          size: true,
        },
        function (res) {
          console.log('size', res);
          that.setData({
            nodes: res || {}
          })
        },
      )
      .exec();
  },
  getAllInfo() {
    const query = tt.createSelectorQuery();
    query.selectAll(".btn-area").boundingClientRect();
    query.exec(function (res) {
      console.log('所有节点信息', res);
    });
  }
})
