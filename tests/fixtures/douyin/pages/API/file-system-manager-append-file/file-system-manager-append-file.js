Page({
  data: {
    content: ''
  },
  writeFile() {
    const fs = tt.getFileSystemManager();
    this.fs = fs;
    const path = `${tt.env.USER_DATA_PATH}/b.txt`;
    this.path = path;
    try {
      fs.writeFileSync(path, "hello bytedance", "utf8");
      console.log("写入文件成功");
      tt.showToast({
        title: '写入文件成功',
        icon: 'none'
      });
      fs.appendFile({
        filePath: path,
        data: '!',
        success: () => {
          this.readFile();
        }
      })
    } catch (err) {
      console.log("写入文件失败", err);
      tt.showModal({
        title: '写入文件失败',
        content: "错误信息:" + err,
        showCancel: false
      });
    }

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