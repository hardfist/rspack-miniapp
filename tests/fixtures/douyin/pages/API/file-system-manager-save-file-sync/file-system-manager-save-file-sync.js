const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: ''
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
  saveFile() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    try {
      const savedFilePath = this.fs.saveFileSync(this.data.tempFilePath, path);
      console.log(`文件已经从 ${this.data.tempFilePath} 移动到 ${savedFilePath}`);
      this.path = path;
      tt.showModal({
        title: '保存成功',
        content: `文件已保存在${savedFilePath}`,
        showCancel: false
      });
    } catch (err) {
      tt.showModal({
        title: '保存失败',
        content: `错误信息：${JSON.stringify(err)}`,
        showCancel: false
      })
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
    }
    this.fs.removeSavedFile({
      filePath: path,
      success(_res) {
        console.log("删除文件调用成功");
      },
      fail(res) {
        console.log("删除文件调用失败:", res.errMsg);
      },
    });
  },
})