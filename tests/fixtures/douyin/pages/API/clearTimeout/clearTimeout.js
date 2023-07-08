const INTERVAL = 5000;
Page({
    data: {
      timer: "",
      id: 0
    },
    onLoad() {
      let id = setTimeout(() => {
        this.setData({
          timer: "执行成功"
        });
      }, INTERVAL);
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