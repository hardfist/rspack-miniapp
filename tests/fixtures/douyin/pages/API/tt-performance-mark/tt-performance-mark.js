Page({
  data: {
    entries: null
  },

  mark() {
    try {
      const entries = tt.performance.mark("bytedance");
      if (entries) {
        console.log("性能数据: ", entries);
        this.setData({
          entries
        })
      }
    } catch (err) {
      console.log("添加性能数据出错: " + err);
    }
  }
})