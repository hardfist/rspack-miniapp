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
      },
      complete: res => {
        console.log('downloadFile complete', res);
      }
    });
  },
  readFile() {
    this.fs.readFile({
      filePath: this.data.tempFilePath,
      encoding: 'base64',
      success: res => {
        this.setData({
          src: 'data:image/png;base64,'+res.data
        })
        console.log('readFile success', res);
      },
      fail: err => {
        console.log('readFile fail', err);
        tt.showModal({
          title: '读取本地文件内容失败',
          content: JSON.stringify(err),
          showCancel: false
        });
      },
      complete: res => {
        console.log('complete:', res);
      }
    });
  },
})