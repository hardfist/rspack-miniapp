var sourceType = [
  ['camera'],
  ['album'],
  ['camera', 'album']
];
var camera = [
  ['front'],
  ['back'],
  ['front', 'back']
];
var duration = Array.apply(null, {
  length: 60
}).map(function (n, i) {
  return i + 1;
});
Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍摄', '相册', '拍摄或相册'],
    cameraIndex: 2,
    camera: ['前置', '后置', '前置或后置'],
    durationIndex: 59,
    duration: duration.map(function (t) {
      return t + '秒';
    }),
    src: ''
  },
  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  cameraChange(e) {
    this.setData({
      cameraIndex: e.detail.value
    });
  },
  durationChange(e) {
    this.setData({
      durationIndex: e.detail.value
    });
  },
  chooseVideo() {
    var that = this;
    tt.chooseVideo({
      sourceType: sourceType[this.data.sourceTypeIndex],
      camera: camera[this.data.cameraIndex],
      maxDuration: duration[this.data.durationIndex],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  saveVideoToAlbum() {
    if (!this.data.src) {
      tt.showToast({
        title: '请先选择视频'
      });
      return;
    }
    tt.saveVideoToPhotosAlbum({
      filePath: this.data.src,
      success(res) {
        tt.showToast({
          title: '保存成功'
        });
      },
      fail(res) {
        tt.showToast({
          title: '保存失败'
        });
      },
      complete() {
        console.log('触发complete成功')
      }
    });
  },
  authAction(e) {
    const scopeName = 'scope.' + e.currentTarget.dataset.auth;
    const settingName = scopeName.replace(/scope\./g, '');
    tt.authorize({
      
      scope: scopeName,
      success: res => {
        console.log("用户已授权");
        const preSettings = this.data.settings;
        preSettings[settingName].hasAuth = true;
        this.setData({
          settings: preSettings
        });
      },
      fail:err=>{
        console.log('用户未授权');
        const preSettings = this.data.settings;
        preSettings[settingName].hasAuth = false;
        this.setData({
          settings: preSettings
        });
      },
      complete:res=>{
        console.log('接口已调用');
      }
    });
  }
});