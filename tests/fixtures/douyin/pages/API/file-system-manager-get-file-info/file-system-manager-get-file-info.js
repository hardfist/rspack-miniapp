const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: '',
    fileList: []
  },
  onLoad(options) {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
      url,
      success: res => {
        this.setData({
          tempFilePath: res.tempFilePath
        })
        tt.showToast({
          title: `文件已下载`,
          icon: 'none'
        });
      },
      fail: err => {
        tt.showToast({
          title: '文件下载失败，请稍后重试',
          icon: 'none'
        });
      },
      complete: res => {
        console.log('downloadFile complete', res);
      }
    });
  },
  getFileInfo() {
    this.fs.getFileInfo({
      filePath: this.data.tempFilePath,
      success: res => {
        console.log('success: ', res);
        tt.showModal({
          content: `文件信息：${JSON.stringify(res)}`,
          showCancel: false
        })
      },
      fail: err => {
        console.log('fail: ', err);
        tt.showModal({
          content: `获取文件信息失败：${err.errMsg}`,
          showCancel: false
        })
      },
      complete: res => {
        console.log('complete: ', res);
      }
    })
  }
})