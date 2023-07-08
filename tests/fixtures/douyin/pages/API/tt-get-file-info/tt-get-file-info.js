const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    filePath: ""
  },

  saveFile(){
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件下载成功,下载路径: "+res.tempFilePath);
        tt.saveFile({
          tempFilePath: res.tempFilePath,
          success: data => {
            tt.showModal({
              content: "临时文件保存成功",
              showCancel: false
            });
            this.setData({
              filePath: data.savedFilePath
            });
            console.log("文件保存在本地路径: " + data.savedFilePath);
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
  
  getFile(){
    if (!this.data.filePath) {
      return tt.showToast({
        title: '请先保存文件',
        icon: 'none'
      });
    };
    tt.getFileInfo({
      filePath: this.data.filePath,
      success: data => {
        // 成功回调返回的参数中,size属性为文件大小，以字节为单位
        tt.showModal({
          title: '文件大小:',
          content: data.size+'字节',
          showCancel: false
        });
      },
      fail: res => {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log("API调用失败: "+res.errMsg,res);
        tt.showModal({
          content: "获取文件信息失败",
          showCancel: false
        });
      },
      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log("API调用完成: "+res.errMsg);
      }
    });
  }
})