const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    hintMsg: "",
    fileList:[]
  },
  
  saveFile(){
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件下载成功,下载路径: "+res.tempFilePath);
        tt.saveFile({
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
  getSavedFileList() {
    const that = this;
    tt.getSavedFileList({
      success(res) {
        // 成功回调返回的参数中,fileList属性是保存的文件信息数组
        that.setData({
          hintMsg: "目前保存文件数: " + res.fileList.length,
          fileList:res.fileList
        });
        res.fileList.forEach(fileItem => {
          // 数组中的每一个文件信息包含属性: filePath(文件路径)、size(文件大小)、createTime(文件保存的时间戳)
          console.log("文件路径: "+fileItem.filePath,"文件大小: "+fileItem.size,"文件保存的时间戳: "+fileItem.createTime);
        });
      },
      
      fail(res) {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log(res.errMsg);
      },

      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log(res.errMsg);
      }
    });
  }
})