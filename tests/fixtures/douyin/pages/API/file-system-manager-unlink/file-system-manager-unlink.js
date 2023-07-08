Page({
  data: {
    disable: true
  },
  onLoad() {
    const fs = tt.getFileSystemManager();
    this.fs = fs;
    const path = `${tt.env.USER_DATA_PATH}/a.txt`;
    this.path = path;
    fs.writeFile({
      filePath: path,
      data: 'hello bytedance',
      encoding: 'utf8',
      success: res => {
        console.log('write success', res);
        this.setData({
          disable: false
        })
      },
      fail: err => {
        console.log('write fail', err);
        tt.showModal({
          title: '写入文件失败',
          content: err.errMsg,
          showCancel: false
        });
      }
    })
  },
  unLink() {
    const path = this.path;
    if (!path) {
      tt.showToast({
        title: '路径不存在',
        icon: 'none'
      });
      return;
    }
    this.fs.unlink({
      filePath: path,
      success: res => {
        console.log('unlink success', res);
        tt.showToast({
          title: '文件删除成功',
          icon: 'none'
        });
      },
      fail: err => {
        console.log('unlink faik', err);
        tt.showModal({
          title: '删除文件失败',
          content: err.errMsg,
          showCancel: false
        });
      },
      complete: res => {
        console.log('unlink complete', res);
      }
    })
  }
})