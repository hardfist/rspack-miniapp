Page({
  data: {
    timer: "回调函数执行0次",
    id: 0
  },
  onLoad(options) {
    let num = 0;
    let id = setInterval(() => {
      num++;
      this.setData({
        timer: `回调函数执行${num}次`
      });
    }, 1000);
    this.setData({
      id
    });
  },

  clearInterval() {
    clearInterval(this.data.id);
  }

});