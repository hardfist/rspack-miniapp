Page({
  data: {
    src: "",
  },
  takePhoto() {
    const ctx = tt.createCameraContext();
    ctx.takePhoto({
      quality: "high",
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
        });
      },
    });
  },
});