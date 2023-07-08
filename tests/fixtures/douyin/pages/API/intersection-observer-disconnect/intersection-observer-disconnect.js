Page({
  onReady() {
    const that = this;
    this.intersectionObserver = tt.createIntersectionObserver(this);

    // 指定页面显示区域作为参照区域
    this.intersectionObserver.relativeToViewport();

    this.intersectionObserver.observe("#target", function (res) {
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
  disconnect() {
    this.intersectionObserver.disconnect();
    tt.showToast({
      title: "已停止监听",
      icon: "none"
    });
  }
});
