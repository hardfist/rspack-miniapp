Component({
  attached() {
    this.toggleTabBar(false)
  },
  data: {
    showTabBar: false
  },
  methods: {
    showTabBar() {
      let showTabBar = !this.data.showTabBar;
      this.setData({
        showTabBar
      }, () => {
        this.toggleTabBar(showTabBar);
      })
    },
    toggleTabBar(showTabBar) {
      if (showTabBar) {
        tt.showTabBar({
          animation: true,
          success(res) {
            console.log('showTabBar 成功执行', res);
          },
          fail(err) {
            console.log('showTabBar 出错', err);
          },
          conplete(res) {
            console.log('showTabBar complete执行', res);
          }
        });
      } else {
        tt.hideTabBar({
          animation: true,
          success(res) {
            console.log('hideTabBar 成功执行', res);
          },
          fail(err) {
            console.log('hideTabBar 出错', err);
          },
          conplete(res) {
            console.log('hideTabBar complete执行', res);
          }
        });
      }
    },
    navigateBack() {
      this.toggleTabBar(true);
      this.triggerEvent('unmount');
    }
  }
})