Page({
  data:{
    content: ''
  },
  writeFile() {
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
        tt.showToast({
          title: '写入成功',
          icon: 'none'
        });
        this.readFile()
      },
      fail: err => {
        console.log('write fail', err);
        tt.showModal({
          title: '写入文件失败',
          content: err.errMsg,
          showCancel: false
        });
      },
      complete: res => {
        console.log('writeFile complete', res);
      }
    })
  },
  readFile() {
    this.fs.readFile({
      filePath: this.path,
      encoding: 'utf8',
      success: res => {
        console.log('readFile', res);
        this.setData({
          content: res.data || ''
        })
      }
    })
  }
})