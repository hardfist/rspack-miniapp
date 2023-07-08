const INTERVAL = 1000;
Page({
    data: {
      timer: "回调函数执行0次",
      id: 0,
    },
    onLoad() {
      let num = 0;
      let id = setInterval(() => {
        num++;
        this.setData({
          timer: `回调函数执行${num}次`
        });
      }, INTERVAL);
      this.setData({
        id
      });
    },
  
    clearInterval() {
      clearInterval(this.data.id);
    }
  
  });