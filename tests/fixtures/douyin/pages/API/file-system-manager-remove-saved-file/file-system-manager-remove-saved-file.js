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
          title: '下载临时文件成功',
          icon: 'none'
        });
        this.saveFile();
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
  saveFile() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    this.fs.saveFile({
      tempFilePath: this.data.tempFilePath,
      filePath: path,
      success: res => {
        console.log('saveFile success', res);
        this.path = path;
      },
      fail: err => {
        console.log('saveFile fail', err);
        tt.showModal({
          content: `保存失败：${JSON.stringify(err)}`,
          showCancel: false
        })
      },
      complete: res => {
        console.log('saveFile complete', res);
      }
    })
  },
  onUnload() {
    // 卸载时删除文件
    this.removeFiles(null, false);
  },
  removeFiles(e, task = true) {
    let path = this.path;
    if (!path) return;
    this.fs.removeSavedFile({
      filePath: path,
      success: _res => {
        console.log("删除文件调用成功", _res);
        task && tt.showToast({
          title: '删除成功',
          icon: 'none'
        });
        this.setData({
          tempFilePath: ''
        })
      },
      fail(res) {
        console.log("删除文件调用失败:", res.errMsg);
        task && tt.showModal({
          content: `${res.errMsg}`,
          showCancel: false
        })
      },
    });
  }
})