Page({
  readDir() {
    const path = `${tt.env.USER_DATA_PATH}/mkdir`;
    const fs = tt.getFileSystemManager();
    try {
      const files = fs.readFileSync(path);
      console.log("读取成功", files);
      tt.showModal({
        title: '读取成功',
        content: path + '目录下文件有：' + JSON.stringify(files),
        showCancel: false
      });
    } catch (err) {
      console.log("读取失败", err);
      tt.showModal({
        title: '读取失败',
        content: "错误信息: "+JSON.stringify(err),
        showCancel: false
      });
    }
  }

})