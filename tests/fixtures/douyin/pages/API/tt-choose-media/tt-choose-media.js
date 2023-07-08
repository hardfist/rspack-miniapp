const sourceType = [["camera"], ["album"], ["camera", "album"]];
const mediaType = [["image"], ["video"], ["image", "video"]];
const sizeType = [
  ["original"],
  ["compressed"],
  ["original", "compressed"], // 暂时效果与 ['compressed'] 一致
];
const cameraType = ["front", "back"];
Page({
  data: {
    mediaLlist: [],
    sourceTypeIndex: 1,
    sourceType: ["拍摄", "相册", "拍摄或相册"],
    mediaType: ["图片", "视频", "图片或视频"],
    mediaTypeIndex: 1,
    countIndex: 8,
    count: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    sizeType: ["原图", "压缩"],
    sizeTypeIndex: 1,
    cameraType: ["前置", "后置"],
    cameraTypeIndex: 1,
  },
  onLoad() {
    var options = tt.getLaunchOptionsSync();
    console.log("getLaunchOptionsSync",options);
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value,
      mediaLlist: [],
    });
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value,
      mediaLlist: [],
    });
  },
  mediaTypeChange: function (e) {
    this.setData({
      mediaTypeIndex: e.detail.value,
      mediaLlist: [],
    });
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value,
    });
  },
  cameraTypeChange: function (e) {
    this.setData({
      cameraTypeIndex: e.detail.value,
    });
  },
  chooseMedia: function () {
    const that = this;
    tt.chooseMedia({
      count: this.data.count[this.data.countIndex],
      mediaType: mediaType[this.data.mediaTypeIndex],
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      maxDuration: 30,
      camera: cameraType[this.data.cameraTypeIndex],
      success(res) {
        console.log("chooseMedia success:::::::::::::::::::::: ", res);
        that.setData({
          mediaLlist: res.tempFiles,
        });
      },
      fail(err) {
        console.log("chooseMedia fail: ", err.errMsg);
      },
      complete(res) {
        console.log("chooseMedia complete");
      },
    });
  },
  previewImage: function (e) {
    const current = e.target.dataset.src;
    const imgFiles = this.data.mediaLlist.filter(item => item.mediaType === "image");
    const imgUrls = imgFiles.map(item => item.tempFilePath);
    console.log("imgUrls::::::::: ", imgUrls);
    tt.previewImage({
      current,
      urls: imgUrls,
      success(res) {
        console.log("previewImage success::: ", res);
      },
      fail(err) {
        console.log("previewImage fail::: ", err);
      },
    });
  },
  getImageInfo: function () {
    if (!this.data.mediaLlist.length) {
      tt.showToast({
        title: "请选择图片",
      });
      return;
    }
  },
  toast(title, icon) {
    tt.showToast({
      title,
      icon,
    });
  },
  clearImage() {
    this.setData({
      mediaLlist: [],
    });
  },
});
