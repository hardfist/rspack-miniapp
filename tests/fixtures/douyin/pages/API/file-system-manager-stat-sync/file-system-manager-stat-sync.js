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
        console.log("临时文件下载成功: " + res.tempFilePath);
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
    try {
      const stat = this.fileSystemManager.statSync(this.data.filePath);
      console.log("获取文件 Stats 对象成功");
      this.setData({
        // 文件的stats对象包含mode 、size 、lastAccessedTime 、lastModifiedTime属性 和 isDirectory 、isFile 方法
        stats: stat,
        accessedTime: stat.lastAccessedTime,
        modifiedTime: stat.lastAccessedTime,
        mode: stat.mode,
        size: stat.size
      });
    } catch (err) {
      console.log("获取文件 Stats 对象失败: ", err);
      tt.showModal({
        title: "获取文件 Stats 对象失败",
        content: "当前文件是一个目录",
        showCancel: false
      })
    }
    
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