const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: '',
    path: ''
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
          title: '下载临时文件成功',
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
  reName() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir.png`;
    this.fs.rename({
      oldPath: this.data.tempFilePath,
      newPath: path,
      success: res => {
        console.log('rename success', res);
        this.setData({
          path: path
        })
      },
      fail: err => {
        console.log('rename fail', err);
        tt.showModal({
          content: `重命名失败：${JSON.stringify(err)}`,
          showCancel: false
        })
      },
      complete: res => {
        console.log('rename complete', res);
      }
    })
  }
})