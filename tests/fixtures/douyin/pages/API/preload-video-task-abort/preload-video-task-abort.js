Page({
  data: {
    src: "https://sf1-ttcdn-tos.pstatp.com/obj/ttfe/test/test-upload.mp4",
    show: false,
  },
  preload() {
    this.task = tt.preloadVideo({
      src: this.data.src,
      success: () => {
        tt.showToast({
          title: '预加载成功', // 内容
        });
        this.setData({
          show: true,
        });
      },
      fail: (error) => {
        console.log("预加载失败", error);
        tt.showToast({
          icon: 'fail',
          title: '预加载失败'
        })
      },
    });
  },
  abort() {
    if (this.task) {
      this.task.abort();
    }
  },
});