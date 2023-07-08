const order = ["demo1", "demo2", "demo3"];
Page({
  data: {
    toView: "demo1",
    scrollTop: 0,
  },
  upper(e) {
    tt.showToast({
      title: '到最顶部了',
      icon: 'none'
    });
  },
  lower(e) {
    tt.showToast({
      title: '到最底部了',
      icon: 'none'
    });
  },
  toLeft(e){
    tt.showToast({
      title: '到最左边了',
      icon: 'none'
    });
  },
  toRight(e){
    tt.showToast({
      title: '到最右边了',
      icon: 'none'
    });
  },
  scroll(e) {},
  scrollToTop(e) {
    this.setData({
      scrollTop: 0,
    });
  },
  tap(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i < order.length - 1 ? i + 1 : 0],
        });
        break;
      }
    }
  },
  tapMove(e) {
    console.log(this.data.scrollTop, e);
    this.setData({
      scrollTop: this.data.scrollTop + 20,
    });
  },
});