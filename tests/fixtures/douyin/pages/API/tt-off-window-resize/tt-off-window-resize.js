Page({
  onLoad() {
    tt.onWindowResize()
  },
  offWindowResize() {
    tt.offWindowResize((res) => {
      console.log('res', res)
      tt.showToast({
        title: '已卸载监听窗口事件',
        icon: 'none'
      });
    })
  }
})