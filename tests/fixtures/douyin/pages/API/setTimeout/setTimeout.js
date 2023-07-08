Page({
  data: {
    timer: "",
    id: 0
  },
  onLoad(options) {
    let id = setTimeout(() => {
      this.setData({
        timer: "执行成功"
      });
    }, 5000);
    this.setData({
      id
    });
  },
  clearTimeout() {
    clearTimeout(this.data.id);
    this.setData({
      timer: "清除成功"
    });
  }

});