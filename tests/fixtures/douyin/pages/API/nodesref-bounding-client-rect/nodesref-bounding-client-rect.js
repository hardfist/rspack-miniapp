Page({
  data: {
    nodes: {}
  },
  getNodeInfo() {
    const query = tt.createSelectorQuery();
    query.select("#btn").boundingClientRect();
    query.exec(res => {
      console.log(res);
      res[0].dataset = JSON.stringify(res[0].dataset);
      this.setData({
        nodes: res[0]
      })
    });
  }
})