Page({
  mkDir() {
    const fs = tt.getFileSystemManager();
    fs.mkdir({
      dirPath: `${tt.env.USER_DATA_PATH}/newDir`,
      success: res => {
        tt.showModal({
          title: '创建成功',
          content: JSON.stringify(res),
          showCancel: false
        });
        console.log('mkdir success', res);
      },
      fail: err => {
        tt.showModal({
          title: '创建失败',
          content: JSON.stringify(err),
          showCancel: false
        });
        console.log('mkdir fail', err);
      },
      complete: res => {
        console.log('complete: ', res);
      }
    });
  },
})