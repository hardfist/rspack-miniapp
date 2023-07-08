Page({
  data: {
    menuInfo: '',
    menuLen: []
  },
  getMenuInfo() {
    let menuInfo = tt.getMenuButtonBoundingClientRect()
    let menuLen = Object.keys(menuInfo || []);
    this.setData({
      menuInfo: menuInfo || {},
      menuLen
    })
  }
})