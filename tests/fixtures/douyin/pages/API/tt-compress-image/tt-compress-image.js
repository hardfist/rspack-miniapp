const app = getApp();
Page({
  data: {},
  async compressImage() {
    try {
      let urls = await this.chooseImage();
      this.setData({
        beforCompressImage: urls
      })
      let src = await this.compressImageApi(urls[0]);
      this.setData({
        afterCompressImage: src
      })
    } catch (err) {
      console.log('compressImage出错', err)
      this.getSetting();
    }
  },
  /**
   * 选择图片
   * */
  chooseImage() {
    return new Promise((resolve, reject) => {
      tt.chooseImage({
        count: 1,
        sourceType: ['album'],
        sizeType: ['original'],
        success(res) {
          console.log('chooseImage', res)
          if (res.tempFilePaths.length > 0) {
            resolve(res.tempFilePaths);
          } else {
            reject('出错');
          }
        },
        fail(err) {
          reject('选择图片出错', err);
        },
        complete(res) {
          console.log('chooseImage complete', res);
          if (res.errMsg === 'chooseImage:fail auth deny') reject('failAuthDeny');
        }
      })
    })
  },
  /**
   * 压缩图片
   * */
  compressImageApi(src) {
    return new Promise((resolve, reject) => {
      tt.compressImage({
        src: src,
        quality: 5,
        success: refs => {
          if (refs.tempFilePath) {
            resolve(refs.tempFilePath);
          } else {
            reject('compressImage出错');
          }
        },
        fail(err) {
          reject('compressImage出错', err);
        },
        complete: res => {
          console.log("图片开始压缩", res);
        }
      })
    })
  },
  /**
   * 授权列表
   * */
  getSetting() {
    let that = this;
    tt.getSetting({
      success: res => {
        tt.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {},
          fail() {
            if (res.authSetting['scope.album'] === false) {
              that.openSetting();
            }
          }
        })
      },
      fail: err => {},
      complete:res=>{}
    })
  },
  /**
   * 打开授权列表
   * */
  openSetting() {
    let that = this;
    tt.openSetting({
      success: res => {
        if (!res.authSetting['scope.album']) {
          that.showToast('请开启授权');
        }
      },
      fail:err=>{},
      complete:res=>{}
    })
  },
  showToast(msg) {
    tt.showToast({
      title: msg,
      icon: 'none'
    })
  }
})
