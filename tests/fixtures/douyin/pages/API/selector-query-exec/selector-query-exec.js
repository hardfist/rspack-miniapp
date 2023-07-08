Page({
  data: {
    nodes: {}
  },
  onReady() {
    this.query = tt.createSelectorQuery();
    this.query.select("#btn").boundingClientRect();
  },
  getNodeInfo() {
    this.query.exec(res => {
      console.log(res[0].width, res[0].height);
      this.setData({
        nodes: res[0]
      })
    });
  }
})