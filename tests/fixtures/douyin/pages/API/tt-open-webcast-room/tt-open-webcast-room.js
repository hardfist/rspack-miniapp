Page({
  data: {
    awemeId: "",
  },
  changeAwemeId(e) {
    this.setData({
      awemeId: e.detail.value,
    });
  },
  openWebcastRoom() {
    tt.openWebcastRoom({
      awemeId: this.data.awemeId,
      success(res) {
        console.log("调用成功", res);
      },
      fail(res) {
        console.log("调用失败", res);
      },
    });
  },
});