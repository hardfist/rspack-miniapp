Page({
  data: {
    env:""
  },
  env(){
    this.setData({
      env:JSON.stringify(tt.env)
    })
  },
  downloadImage() {
    // 获取 fileSystemManager
    this.fileSystemManager = tt.getFileSystemManager();

    const task = tt.downloadFile({
      url: "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png",

      success: (res) => {
        if (res.statusCode === 200) {
          // 把下载到的临时地址，变成永久地址
          this.fileSystemManager.saveFile({
            tempFilePath: res.tempFilePath,
            // “本地用户文件”须以 tt.env.USER_DATA_PATH 开头
            filePath: `${tt.env.USER_DATA_PATH}/demo.jpeg`,
            success: (res) => {
              console.log("下载成功",res);
              tt.showModal({
                title:"下载成功",
                content: `下载的临时路径： ${res.savedFilePath} 转为用户路径： ${tt.env.USER_DATA_PATH}/demo.jpeg`,
                showCancel:false
              });
              this.setData({
                filePath: res.savedFilePath,
              });
            },
            fail(res) {
              console.log("error", res);
            },
          });
        }
      },

      fail(res) {
        console.log(`downloadFile调用失败`);
      },
    });

    task.onProgressUpdate((res) => {
      this.setData({
        progress: res.progress,
      });
    });
  },
})