const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: "" 
  },

  saveFile(){
    tt.downloadFile({
      url,
      success: res => {
        console.log("临时文件下载成功,下载路径: "+res.tempFilePath);
        tt.saveFile({
          // 参数: 需传入文件临时路径tempFilePath
          tempFilePath: res.tempFilePath,
          success: data => {
            // 返回参数中的savedFilePath属性为保存的本地文件路径
            console.log("保存成功, 本地路径为: ", data.savedFilePath);
            tt.showModal({
              title:"临时文件保存成功",  
              content: "保存成功, 本地路径为: " + data.savedFilePath,
              showCancel: false
            });
          },
          fail: res => {
            // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
            console.log("临时文件保存失败", res.errMsg);
            tt.showModal({
              content: "临时文件保存失败",
              showCancel: false
            });
          },
          complete: res => {
            // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
            console.log("接口已调用", res.errMsg);
          }
        });
      },
      fail: res => {
        console.log("下载失败: ", res.errMsg);
      }
    });
  }
})