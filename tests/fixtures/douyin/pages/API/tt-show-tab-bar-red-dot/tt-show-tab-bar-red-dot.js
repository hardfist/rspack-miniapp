const TABBAR_INDEX = 1;
Component({
  data: {
    showDot: false
  },
  methods: {
    showTabBarRedDot() {
      let showDot = !this.data.showDot;
      this.setData({
        showDot
      }, () => {
        this.toggleTabBarRedDot(showDot);
      })
    },
    /**
     * 切换红点隐藏显示
     * @param{boolean} [showDot] - 是否显示dot
     * */
    toggleTabBarRedDot(showDot) {
      if (showDot) {
        tt.showTabBarRedDot({
          index: TABBAR_INDEX,
          success(res) {
            console.log('showTabBarRedDot 成功执行', res);
          },
          fail(err) {
            console.log('showTabBarRedDot 出错', err);
          },
          conplete(res) {
            console.log('showTabBarRedDot complete执行', res);
          }
        });
      } else {
        tt.hideTabBarRedDot({
          index: TABBAR_INDEX,
          success(res) {
            console.log('hideTabBarRedDot 成功执行', res);
          },
          fail(err) {
            console.log('hideTabBarRedDot 出错', err);
          },
          conplete(res) {
            console.log('hideTabBarRedDot complete执行', res);
          }
        });
      }
    },
    navigateBack() {
      this.toggleTabBarRedDot(false);
      this.triggerEvent('unmount');
    }
  }
})