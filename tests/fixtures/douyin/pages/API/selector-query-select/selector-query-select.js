Page({
  data: {
    nodes: {}
  },
  onReady() {
    const query = tt.createSelectorQuery();
    //  选取节点，添加布局位置的查询请求
    query.select("#btn").boundingClientRect();
    // 执行查询
    query.exec((res) => {
      console.log(res[0]);
      this.setData({
        nodes: res[0] || {}
      })
    });
  }
})