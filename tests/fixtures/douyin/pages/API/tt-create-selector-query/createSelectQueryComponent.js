Component({
  data: {
    nodes: {}
  },
  properties: {

  },
  attached() {
    let that = this;
    let query = tt.createSelectorQuery().in(this);
    query.select('.box').boundingClientRect();
    query.exec(res => {
      console.log('在组件中节点信息获取成功', res);
      that.setData({
        nodes: res[0] || {}
      })
    })
  },
  methods: {

  }
})