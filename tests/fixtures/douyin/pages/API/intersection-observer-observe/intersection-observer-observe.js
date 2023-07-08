Page({
  onReady() {
    const that = this;
    this.intersectionObserver = tt.createIntersectionObserver(this);

    // 指定页面显示区域作为参照区域
    this.intersectionObserver.relativeToViewport();

    // 当 #target 节点进入或离开页面显示区域时，则会触发回调函数
    this.intersectionObserver.observe("#target", function (res) {
      // 利用相交比例和各种边界信息实现业务逻辑，例如：判断目标元素是否进入屏幕可视范围等等
      const {
        intersectionRatio,
        intersectionRect,
        boundingClientRect,
        relativeRect,
      } = res;
      console.log("observe res:::::: ",res);
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
