Component({
  data: {
    hasCustomedStyle: false
  },
  methods: {
    toggleTabBarStyle() {
      let hasCustomedStyle = !this.data.hasCustomedStyle;
      this.setData({
        hasCustomedStyle: hasCustomedStyle
      }, () => {
        this.setCustomStyleAction(hasCustomedStyle);
      })
    },
    /**
  * 设置/取消tabbar的自定义样式
  * @param {boolean} [showCustom] - 是否展示自定义的tabbar样式
  */
    setCustomStyleAction(showCustom) {
      const tabBarConfig = {
        customStyle: {
          color: '#FFF',
          selectedColor: '#1AAD19',
          backgroundColor: '#000000',
          success(res) {
            console.log('setTabBarStyle 成功执行', res);
          },
          fail(err) {
            console.log('setTabBarStyle 出错', err);
          },
          conplete(res) {
            console.log('setTabBarStyle complete执行', res);
          }
        },
        defaultTabBarStyle: {
          color: '#7A7E83',
          selectedColor: '#3cc51f',
          backgroundColor: '#ffffff',
          success(res) {
            console.log('setTabBarStyle 成功执行', res);
          },
          fail(err) {
            console.log('setTabBarStyle 出错', err);
          },
          conplete(res) {
            console.log('setTabBarStyle complete执行', res);
          }
        }
      };

      if (showCustom) {
        tt.setTabBarStyle(tabBarConfig.customStyle);
      } else {
        tt.setTabBarStyle(tabBarConfig.defaultTabBarStyle);
      }
    },
    navigateBack() {
      this.triggerEvent('unmount');
    }
  }
})