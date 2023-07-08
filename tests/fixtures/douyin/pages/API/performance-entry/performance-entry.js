Page({
  data: {
    entries: null
  },

  getPerformanceEntry() {
    try {
      const entries = tt.performance.getCurrentPageEntries();
      console.log("性能列表:::", entries);
      this.setData({
        entries
      })
    } catch (err) {
      console.log("获取缓冲区性能数据出错: " + err);
    }
  }
})