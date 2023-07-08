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
    try {
      // 删除文件
      this.fs.unlink(path);
      console.log("删除文件成功");
      tt.showToast({
        title: '文件删除成功',
        icon: 'none'
      });
    } catch (err) {
      console.log("删除文件失败", err);
      tt.showModal({
        title: '删除文件失败',
        content: "错误信息: " + err,
        showCancel: false
      });
    }
  }
})