Page({
  data: {
    isShow: false,
  },
  onReady() {
    const that = this;
    this.intersectionObserver = tt.createIntersectionObserver(this);

    // 指定 #sv 作为参照区域
    this.intersectionObserver.relativeTo("#sv");

    // 当 #target 节点进入或离开 #sv 节点的可视区域时，则会触发回调函数
    this.intersectionObserver.observe("#target", function (res) {
      const {
        intersectionRatio,
        intersectionRect,
        boundingClientRect,
        relativeRect,
      } = res;
      console.log("relativeTo res:::::: ",res);
      if(intersectionRatio > 0){
        // target 进入视线
        that.setData({
          isShow: true
        })
      }else if(intersectionRatio == 0){
        // target 离开视线
        that.setData({
          isShow: false
        })
      }
    });
  },
});
