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
      compressed: true,
      camera: camera[this.data.cameraIndex],
      maxDuration: duration[this.data.durationIndex],
      success(res) {
        that.setData({
          src: res.tempFilePath,
          tempFilePath: res.tempFilePath,
          durationV: (res.duration).toFixed(2) + 's',
          size: Math.round(res.size / 1024) + 'KB',
          width: (res.width) / 2 + 'rpx',
          height: (res.height) / 2 + 'rpx',
          isShow: true,
        });
      },
      fail: (err) => {
        console.log("执行失败错误信息为", err);
      },
      complete: (res) => {
        console.log("选择视频结束", res);
      }
    });
  }
});