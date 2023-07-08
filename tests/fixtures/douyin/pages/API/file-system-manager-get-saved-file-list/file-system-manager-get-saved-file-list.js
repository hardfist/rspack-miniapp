const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: '',
    fileList: [],
    hintMsg:""
  },
  onLoad(options) {
    this.fs = tt.getFileSystemManager();
  },
  saveFile(){
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件下载成功,下载路径: "+res.tempFilePath);
        this.fs.saveFile({
          tempFilePath: res.tempFilePath,
          success: data => {
            console.log("保存成功", data.savedFilePath);
            tt.showModal({
              content: "临时文件保存成功",
              showCancel: false
            });
            this.setData({
              'filePath': data.savedFilePath,
              'hasFile': true
            });
          },
          fail: res => {
            tt.showModal({
              content: "临时文件保存失败",
              showCancel: false
            });
          }
        });
      },
      fail: res => {
        console.log("下载失败: ", res.errMsg);
      }
    });
  },
  getSaveFileList() {
    this.fs.getSavedFileList({
      success: res => {
        console.log('success: ', res);
        this.setData({
          fileList: res.fileList || [],
          hintMsg: "目前保存文件数: " + res.fileList.length
        })
        tt.showModal({
          content: `获取本地已保存文件列表成功`,
          showCancel: false
        })
      },
      fail: err => {
        console.log('fail: ', err);
      },
      complete: res => {
        console.log('complete: ', res);
      }
    })
  },
  onUnload() {
    // 卸载时删除文件
    this.removeFiles();
  },
  removeFiles() {
    let path = this.path;
    if (!path) return;
    this.fs.removeSavedFile({
      filePath: path,
      success(_res) {
        console.log("删除文件调用成功");
      },
      fail(res) {
        console.log("删除文件调用失败:", res.errMsg);
      },
    });
  }
})