Page({
  readDir() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    const fs = tt.getFileSystemManager();
    fs.readdir({
      dirPath: path,
      success: res => {
        tt.showModal({
          title: '读取成功',
          content: path + '目录下文件有：' + JSON.stringify(res.files),
          showCancel: false
        });
        console.log('readdir success', res);
      },
      fail: err => {
        console.log('readdir fail', err);
        tt.showModal({
          title: '读取失败',
          content: JSON.stringify(err),
          showCancel: false
        });
      },
      complete: res => {
        console.log('complete: ', res);
      }
    });
  },

})