Page({
  data: {
    list: []
  },
  onReady() {
    const query = tt.createSelectorQuery();
    query.selectAll(".btn").boundingClientRect();
    query.exec((res) => {
      console.log(res[0]);
      this.setData({
        list: res[0]
      })
    });
  }
})