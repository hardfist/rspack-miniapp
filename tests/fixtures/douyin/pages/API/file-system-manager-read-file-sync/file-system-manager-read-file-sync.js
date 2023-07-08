const url = "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png";
Page({
  data: {
    tempFilePath: '',
    src: ''
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
  readFile() {
    try {
      const data = this.fs.readFileSync(this.data.tempFilePath, 'base64');
      console.log("读取文件内容成功", data);
      this.setData({
        src: 'data:image/png;base64,' + data
      })
    } catch (err) {
      console.log("读取文件内容失败", err);
      tt.showModal({
        title: '读取本地文件内容失败',
        content: "错误信息: "+JSON.stringify(err),
        showCancel: false
      });
    }
  },
})