const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    stats: null,
  },

  onLoad() {
    this.fileSystemManager = tt.getFileSystemManager();
    tt.showLoading({
      title: '正在加载'
    });
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件路径: " + res.tempFilePath);
        this.getStats(res.tempFilePath)
      },
      fail: res => {
        console.log("临时文件下载失败: ", res.errMsg);
        tt.hideLoading();
      }
    });
  },

  getStats(src) {
    const that = this;
    this.fileSystemManager.stat({
      path: src,
      success(res) {
        tt.hideLoading();
        // 成功回调返回的参数中,stat属性为文件的stats对象
        that.setData({
          // 文件的stats对象包含mode 、size 、lastAccessedTime 、lastModifiedTime属性 和 isDirectory 、isFile 方法
          stats: res.stat,
        });
        console.log(new Date(res.stat.lastAccessedTime));
      },
      fail() {
        tt.hideLoading();
      }
    });
  },

  isDirectory() {
    // isDirectory方法返回boolean,表示当前文件是否为一个目录
    const isDirectory = this.data.stats.isDirectory();
    isDirectory ?
      tt.showModal({
        content: "当前文件是一个目录",
        showCancel: false
      }) :
      tt.showModal({
        content: "当前文件不是一个目录",
        showCancel: false
      });
  }
})