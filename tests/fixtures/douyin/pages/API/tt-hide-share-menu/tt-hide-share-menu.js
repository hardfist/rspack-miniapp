Page({
  data: {
    isHide: false
  },

  onLoad() {
    this.showShareMenu();
  },

  showShareMenu() {
    const that = this;
    tt.showShareMenu({
      menus:["share","record"],
      success(res) {
        that.setData({
          isHide: true
        });
      },
    });
  },
  
  hideShareMenu(menus) {
    const currentMenus = menus.currentTarget.dataset.menus.split(',');
    const that = this;
    tt.hideShareMenu({
      menus: currentMenus,
      success(res) {
        // 当 API 成功执行后调用，预定义返回消息格式为${API_NAME}:ok
        console.log(res.errMsg);
        that.setData({
          isHide: false
        });
      },
      fail(res) {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log(res.errMsg);
      },

      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log(res.errMsg);
      }
    });
  },
})