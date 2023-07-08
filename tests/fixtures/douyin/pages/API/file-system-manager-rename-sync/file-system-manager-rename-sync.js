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
      }
    });
  },
  reName() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir.png`;
    try {
      this.fs.renameSync(this.data.tempFilePath, path);
      console.log("重命名成功");
      this.setData({
        path: path
      })
      tt.showToast({
        title: '重命名成功',
        icon: 'none'
      });
    } catch (err) {
      console.log("重命名失败", err);
      tt.showModal({
        title: "重命名失败",
        content: `错误信息：${err}`,
        showCancel: false
      })
    }
    
  }
})