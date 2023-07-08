const app = getApp();
Page({
  data: {
    imageUrl: 'https://sf1-cdn-tos.douyinstatic.com/obj/microapp/frontend/micro-app/1531126392813c2431a6822.jpeg',
  },
  onload: function() {},
  async saveImageToAlbum() {
    tt.showLoading({
      title: '加载中...',
    });
    try {
      let url = await this.downloadFile();
      this.saveImageToPhotosAlbum(url);
    } catch (err) {
      console.log('保存失败错误信息', err)
    }
  },
  /**
   * 下载文件
   * */
  downloadFile() {
    return new Promise((resolve, reject) => {
      tt.hideLoading();
      tt.downloadFile({
        url: this.data.imageUrl,
        success: res => {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath);
          } else {
            reject("downLoadError");
          }
        },
        fail: err => {
          reject('下载文件出错', err);
        },
        complete: res => {
          console.log("已执行下载任务", res);
        }
      })
    })
  },
  /**
   * 保存图片到本地
   * */
  saveImageToPhotosAlbum(src) {
    tt.saveImageToPhotosAlbum({
      filePath: src,
      success: res => {
        tt.showToast({
          title: '已保存到本地相册',
          icon: 'none'
        });
      },
      fail: err => {
        this.openSetting();
        reject("error");
      },
      complete(res) {
        console.log("已执行", res);
      }
    })
  },

  /**
   * 开启授权
   * */
  openSetting() {
    tt.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          tt.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {},
            fail() {
              tt.showToast({
                title: '请开启授权',
                icon: 'none'
              });
              tt.openSetting({})
            }
          })
        }
      },
      fail(err) {},
      complete(res) {}
    })
  }
})
