const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    hintMsg: "",
    savedFileList: [],
  },

  onLoad() {
    this.getSavedFileList();
  },
  
  saveFile(){
    const that = this;
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
              showCancel: false,
              success() {
                that.getSavedFileList();
              }
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
          savedFileList: res.fileList
        });
      },
      
      fail(res) {
        console.log("获取文件列表失败: "+res.errMsg);
      }
    });
  },

  removeSavedFile(filePath) {
    const that = this;
    const {savedFileList} = this.data;
    if (savedFileList.length === 0) {
      return tt.showToast({
        title: "无可删除文件,请先保存",
        icon: "none"
      });
    }
    tt.removeSavedFile({
      // 参数: 需传入要删除的文件路径filePath
      filePath:filePath.currentTarget.dataset.item,
      success() {
        tt.showModal({
          content: "删除成功",
          showCancel: false,
          success() {
            that.getSavedFileList();
          }
        });
      },

      fail(res) {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log(res.errMsg);
        tt.showModal({
          content: "删除失败",
          showCancel: false
        });
      },

      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log(res.errMsg);
      }
    });
  }
})