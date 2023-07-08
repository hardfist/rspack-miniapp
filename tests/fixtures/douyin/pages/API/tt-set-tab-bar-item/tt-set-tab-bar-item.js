Component({
  data: {
    showCustom: false
  },
  methods: {
    setTabBatItem() {
      let showCustom = !this.data.showCustom;
      this.setData({
        showCustom
      }, () => {
        this.toggleTabBatItem(showCustom);
      })
    },
    toggleTabBatItem(showCustom) {
      if (showCustom) {
        console.log('展示自定义的样式');
        tt.setTabBarItem({
          index: 1,
          text: '接口',
          iconPath: 'image/category/tab_api.png',
          selectedIconPath: 'image/category/tab_api_selected.png',
          success(res) {
            console.log('setTabBarItem 成功执行', res);
          },
          fail(err) {
            console.log('setTabBarItem 出错', err);
          },
          conplete(res) {
            console.log('setTabBarItem complete执行', res);
          }
        });
      } else {
        tt.setTabBarItem({
          index: 1,
          text: 'API',
          iconPath: 'image/category/tab_api.png',
          selectedIconPath: 'image/category/tab_api_selected.png',
          success(res) {
            console.log('setTabBarItem 成功执行', res);
          },
          fail(err) {
            console.log('setTabBarItem 出错', err);
          },
          conplete(res) {
            console.log('setTabBarItem complete执行', res);
          }
        });
      }
    },
    navigateBack() {
      this.toggleTabBatItem(false);
      this.triggerEvent('unmount');
    }
  }
})