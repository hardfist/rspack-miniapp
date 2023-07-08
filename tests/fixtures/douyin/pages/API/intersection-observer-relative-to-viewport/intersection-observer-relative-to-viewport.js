Page({
  onReady() {
    const that = this;
    this.intersectionObserver = tt.createIntersectionObserver(this);

    // 指定页面显示区域作为参照区域
    this.intersectionObserver.relativeToViewport();

    // 当 #target 节点进入或离开页面显示区域时，则会触发回调函数
    this.intersectionObserver.observe("#target", function (res) {
      const {
        intersectionRatio,
        intersectionRect,
        boundingClientRect,
        relativeRect,
      } = res;
      console.log("relativeToViewport res:::::: ",res);
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
