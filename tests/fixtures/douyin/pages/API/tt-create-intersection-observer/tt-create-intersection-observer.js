Page({
  data: {
    isShow: false,
  },
  onReady() {
    const that = this;
    this.intersectionObserver = tt.createIntersectionObserver(this, {
      thresholds: [0],
      initialRatio: 0,
      observeAll: false,
    });
    
    this.intersectionObserver.relativeTo("#sv");
    
    // 当 #target 节点进入或离开 #sv 节点的可视区域时，则会触发回调函数
    this.intersectionObserver.observe("#target", function (res) {
      // 利用相交比例和各种边界信息实现业务逻辑，例如：判断目标元素是否进入屏幕可视范围等等
      const {
        intersectionRatio,
        intersectionRect,
        boundingClientRect,
        relativeRect,
      } = res;
      console.log("observe 事件触发, res: ",res);
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

})
