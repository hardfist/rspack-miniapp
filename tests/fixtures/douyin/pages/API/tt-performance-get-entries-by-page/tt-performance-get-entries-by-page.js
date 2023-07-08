Page({
  data: {
    entries: null
  },

  getStats() {
    try {
      const entries = tt.performance.getEntriesByPage("pages/API/tt-performance-get-entries-by-page/tt-performance-get-entries-by-page");
      console.log("性能列表:::", entries);
      this.setData({
        entries
      })
    } catch (err) {
      console.log("获取缓冲区性能数据出错: " + err);
    }
  }
})