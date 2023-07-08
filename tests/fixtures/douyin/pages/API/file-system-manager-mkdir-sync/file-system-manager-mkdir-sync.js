Page({
  mkDir() {
    const fs = tt.getFileSystemManager();
    try {
      fs.mkdirSync(`${tt.env.USER_DATA_PATH}/newDirs`);
      console.log("创建目录成功");
      tt.showToast({
        title: '创建成功',
        icon: 'none'
      });
    } catch (err) {
      console.log("创建目录失败", err);
      tt.showToast({
        title: '创建失败',
        icon: 'none'
      });
    }
  },
})