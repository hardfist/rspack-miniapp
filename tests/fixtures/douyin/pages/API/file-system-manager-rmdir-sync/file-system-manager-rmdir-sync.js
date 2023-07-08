Page({
  data: {
    path: `${tt.env.USER_DATA_PATH}/rmDir`
  },
  onLoad() {
    const fs = tt.getFileSystemManager();
    this.fs = fs;
    fs.mkdir({
      dirPath: this.data.path,
      success: res => {
        console.log('mkdir success', res);
      },
      fail: err => {
        console.log('mkdir fail', err);
      }
    });
  },
  rmDir() {
    try {
      this.fs.rmdirSync(this.data.path);
      console.log("删除目录成功");
      tt.showToast({
        title: '删除目录成功',
        icon: 'none'
      });
    } catch (err) {
      console.log("删除目录失败", err);
      tt.showModal({
        title: '删除目录失败',
        content: "错误信息: "+err,
        showCancel: false
      });
    }

  }
})