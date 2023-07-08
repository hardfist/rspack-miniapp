Page({
  unZip() {
    tt.getFileSystemManager().unzip({
      ziptempFilePath: `${tt.env.USER_DATA_PATH}/demo/a.zip`,
      targetPath: `${tt.env.USER_DATA_PATH}/demo/b`,
      success: res => {
        console.log('unzip success', res);
      },
      fail: err => {
        console.log('unzip fail', err);
        tt.showModal({
          title:'解压失败',
          content: err.errMsg,
          showCancel: false
        });
      },
      complete: res => {
        console.log('unZip complete', res);
      }
    });
  }
})