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
      success: async res => {
        this.setData({
          tempFilePath: res.tempFilePath
        })
        let fileNum = await this.getSaveFileList();
        tt.showToast({
          title: `已保存文件数量：${fileNum}`,
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
  copyFile() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    this.fs.copyFile({
      srcPath: this.data.tempFilePath,
      destPath: path,
      success: async res => {
        console.log('copyFile success', res);
        this.path = path;
         let fileNum = await this.getSaveFileList();
        console.log('fileNum',fileNum)
        tt.showToast({
          title: `已保存文件数量：${fileNum}`,
          icon: 'none'
        });
      },
      fail: err => {
        console.log('copyFile fail', err);
        tt.showModal({
          content: `保存失败：${JSON.stringify(err)}`,
          showCancel: false
        })
      },
      complete: res => {
        console.log('copyFile complete', res);
      }
    })
  },
  getSaveFileList() {
    return new Promise((resolve, reject) => {
      this.fs.getSavedFileList({
        success: res => {
          console.log('success: ', res);
          let fileList = res.fileList || [];
          resolve(fileList.length);
        },
        fail: err => {
          console.log('fail: ', err);
          reject()
        },
        complete: res => {
          console.log('complete: ', res);
        }
      })
    })
  },
  onUnload() {
    // 卸载时删除文件
    this.removeFiles();
  },
  removeFiles() {
    let path = this.path;
    if (!path) return;
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