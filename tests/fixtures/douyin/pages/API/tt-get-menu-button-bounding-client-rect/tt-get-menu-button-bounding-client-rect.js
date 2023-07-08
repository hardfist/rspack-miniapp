Page({
  data: {
    menuInfo: {},
    menuLen: []
  },
  getMenuInfo() {
    let menuInfo = tt.getMenuButtonBoundingClientRect();
    let menuLen = Object.keys(menuInfo || []);
    console.log('菜单按钮的布局位置信息', menuInfo);
    this.setData({
      menuInfo: menuInfo || {},
      menuLen
    })
  }
})