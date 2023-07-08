Page({
  data: {
    disable: true
  },
  onLoad() {
    const fs = tt.getFileSystemManager();
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    this.fs = fs;
    this.path = path;
    fs.mkdir({
      dirPath: path,
      success: res => {
        console.log('mkdir success', res);
        this.setData({
          disable: false
        })
      },
      fail: err => {
        console.log('mkdir fail', err);
      },
      complete: res => {
        console.log('complete: ', res);
        if (res.errMsg === 'mkdir:fail file already exists http://user/mkdir') {
          this.setData({
            disable: false
          })
        }
      }
    });
  },
  rmDir() {
    const path = this.path;
    if (!path) return;
    this.fs.rmdir({
      dirPath: path,
      success: res => {
        console.log('rmdir success: ', res);
        tt.showToast({
          title: '删除成功',
          icon: 'none'
        });
      },
      fail: err => {
        console.log('rmdif fail', err);
        tt.showModal({
          title: '删除失败',
          content: JSON.stringify(err),
          showCancel: false
        });
      },
      complete: res => {
        console.log('rmdir complete', res);
      }
    })
  }
})