const smallImageUrl = 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png';
Page({
  data: {
    percent: 0
  },
  downloadImage() {
    this.download('image', smallImageUrl);
  },
  saveImageToPhotosAlbum() {
    this.save('saveImageToPhotosAlbum', this.data.imageSrc);
  },
  download: function (type, url) {
    var that = this;
    if (this.downloading) {
      tt.showToast({
        title: '已有任务正在下载'
      });
      return;
    }
    this.downloading = true;
    tt.downloadFile({
      url,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          [`${type}Src`]: res.tempFilePath
        });
        console.log('downloadFile success', res);
      },
      fail: function (res) {
        tt.showToast({
          title: res.errMsg,
          icon: 'none'
        });
      },
      complete(res) {
        that.downloading = false;
        console.log('downloadFile complete', res);
      }
    });
  },
  save(api, path) {
    let that = this;
    if (!path) {
      tt.showToast({
        title: 'NO FILE，先下载图片',
        icon: 'none'
      });
      return;
    }
    tt[api]({
      filePath: path,
      success(res) {
        tt.showToast({
          title: 'succeed'
        });
        console.log(`${api} success`, res);
      },
      fail(res) {
        tt.showToast({
          title: res.errMsg,
          icon: 'none'
        });
        console.log(`${api} fail`, res);
        if (res.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
          setTimeout(() => {
            that.getSetting();
          }, 1500)
        }
      },
      complete(res) {
        console.log(`${api} complete`, res);
      }
    });
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
          success() { },
          fail() {
            if (res.authSetting['scope.album'] === false) {
              that.openSetting();
            }
          }
        })
      },
      fail: err => { },
      complete: res => { }
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
      fail: err => { },
      complete: res => { }
    })
  },
});