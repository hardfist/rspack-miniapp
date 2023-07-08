const sourceType = [
  ['camera'],
  ['album'],
  ['camera', 'album']
];
const sizeType = [
  ['original'],
  ['compressed'],
  ['original', 'compressed']
];
Page({
  data: {
    imageList: [],
    sourceTypeIndex: 1,
    sizeTypeIndex: 1,
    sourceType: ['拍照', '相册', '拍照或相册'],
    sizeType: ['原图', '压缩图', '可选择'],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange: function(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  sizeTypeChange: function(e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    });
  },
  countChange: function(e) {
    this.setData({
      countIndex: e.detail.value
    });
  },
  chooseImage: function() {
    var that = this;
    tt.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex] - this.data.imageList.length,
      success(res) {
        console.log(res);
        const imageList = that.data.imageList.concat(res.tempFilePaths)
        that.setData({
          imageList
        });
      },
      fail(res) {
        tt.showToast({
          title: res.errMsg
        });
      },
      complete: res => {
        console.log(res, "选择图片complete已触发");
      }
    });
  },
  previewImage: function(e) {
    var current = e.target.dataset.src;
    tt.previewImage({
      current: current,
      urls: this.data.imageList
    });
  },
  getImageInfo: function() {
    if (!this.data.imageList.length) {
      tt.showToast({
        title: '请选择图片'
      });
      return;
    }
  },
  toast(title, icon) {
    tt.showToast({
      title,
      icon
    })
  },
  clearImage() {
    if (this.data.imageList.length === 0) {
      this.toast('暂无图片', 'none');
      return;
    } else {
      this.setData({
        imageList: []
      })
    }
  }
});
