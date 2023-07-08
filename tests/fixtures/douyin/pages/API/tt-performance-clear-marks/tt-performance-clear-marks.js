Page({
  data: {
    entries: null
  },

  mark() {
    try {
      const entries = tt.performance.mark("bytedance");
      if (entries) {
        console.log("性能数据: ", entries);
      }
      this.getEntries();
    } catch (err) {
      console.log("添加性能数据出错: " + err);
    }
  },
  clearMarks() {
    try {
      const entries = tt.performance.clearMarks("bytedance");
      console.log("清除成功");
      this.getEntries();
    } catch (err) {
      console.log("清除性能数据出错: " + err);
    }
  },
  getEntries() {
    try {
      const entries = tt.performance.getEntriesByName('bytedance');
      console.log("性能列表:::", entries);
      this.setData({
        entries
      })
    } catch (err) {
      console.log("获取缓冲区性能数据出错: " + err);
    }
  }
})