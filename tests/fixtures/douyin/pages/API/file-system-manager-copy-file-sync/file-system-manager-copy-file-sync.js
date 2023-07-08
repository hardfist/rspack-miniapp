const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: ''
  },
  onLoad(options) {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
      url: url,
      success: res => {
        this.setData({
          tempFilePath: res.tempFilePath
        })
        tt.showToast({
          title: '下载临时文件成功',
          icon: 'none'
        });
      },
      fail: err => {
        tt.showToast({
          title: '文件下载失败，请稍后重试',
          icon: 'none'
        });
      }
    });
  },
  copyFile() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    try {
      this.fs.copyFileSync(this.data.tempFilePath,path);
      this.path = path;
      console.log(`拷贝成功`);
      tt.showToast({
        title: '拷贝成功',
        icon: 'none'
      });
    } catch (err) {
      console.log(`拷贝失败: `,err);
      tt.showToast({
        title: '拷贝失败',
        icon: 'none'
      });
    } 
  },
  onUnload() {
    // 卸载时删除文件
    this.removeFiles();
  },
  removeFiles() {
    let path = this.path;
    if (!path) {
      return
    };
    this.fs.removeSavedFile({
      filePath: path,
      success(_res) {
        console.log("删除文件调用成功");
      },
      fail(res) {
        console.log("删除文件调用失败:", res.errMsg);
      },
    });
  }
})