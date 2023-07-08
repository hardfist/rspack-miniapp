Component({
  data: {
    data: '',
    hasMemory: true
  },
  attached() {
    tt.onMemoryWarning(res => {
      console.log('内存不足', res);
      this.setData({
        data: JSON.stringify(res)
      })
    });
  }
});