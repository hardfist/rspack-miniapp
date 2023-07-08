const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    hintMsg: "",
    filePath: '',
    stats: null,
    accessedTime: '',
    modifiedTime: '',
    mode: '',
    size: ''
  },

  onLoad() {
    this.fileSystemManager = tt.getFileSystemManager();
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件路径: "+res.tempFilePath);
        this.setData({
          filePath: res.tempFilePath
        });
      },
      fail: res => {
        console.log("临时文件下载失败: ", res.errMsg);
      }
    });
  },
  
  getStats() {
    const that = this;
    this.fileSystemManager.stat({
      path: this.data.filePath,
      success(res) {
        // 成功回调返回的参数中,stat属性为文件的stats对象
        that.setData({
          // 文件的stats对象包含mode 、size 、lastAccessedTime 、lastModifiedTime属性 和 isDirectory 、isFile 方法
          stats: res.stat,
          accessedTime: res.stat.lastAccessedTime,
          modifiedTime: res.stat.lastAccessedTime,
          mode: res.stat.mode,
          size: res.stat.size
        });
        console.log(new Date(res.stat.lastAccessedTime));
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
  },

  isFile() {
    // isFile方法返回boolean,表示当前文件是否为一个普通文件
    const isFile = this.data.stats.isFile();
    isFile ? 
      tt.showModal({
        content: "当前文件是一个普通文件",
        showCancel: false
      }) :
      tt.showModal({
        content: "当前文件不是一个普通文件",
        showCancel: false
      });
  }
})