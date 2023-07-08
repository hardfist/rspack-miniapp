// 设置的tabbar的index
const SET_TAB_INDEX = 1;
Component({
  data: {},
  properties: {},

  attached() {
    tt.setNavigationBarTitle({
      title: '设置tabbar'
    });
  },

  methods: {
    reset() {},

    /**
     * toggle一下tabbar的右上角徽标
     */
    toggleTabBarBadge() {
      const nextStatus = !this.data.hasSetTabBarBadge;
      this.setData({
        hasSetTabBarBadge: nextStatus
      });
      this.setTabBarAction(nextStatus);
    },

    /**
     * toggle展示/隐藏tabbar的右上角红点
     */
    toggleTabBarRedDot() {
      const nextStatus = !this.data.hasShownTabBarRedDot;
      this.setData({
        hasShownTabBarRedDot: nextStatus
      });
      this.setTabBarRedDotAction(nextStatus);
    },

    /**
     * toggle展示/隐藏自定义样式
     */
    toggleCustomStyle() {
      const nextStatus = !this.data.hasCustomedStyle;
      this.setData({
        hasCustomedStyle: nextStatus
      });
      this.setCustomStyleAction(nextStatus);
    },

    /**
     * toggle展示/隐藏自定义文字
     */
    toggleCustomItem() {
      const nextStatus = !this.data.hasCustomedItem;
      this.setData({
        hasCustomedItem: nextStatus
      });
      this.setCustomItemAction(nextStatus);
    },

    toggleTabBarVisible() {
      const nextStatus = !this.data.hasHiddenTabBar;
      this.setData({
        hasHiddenTabBar: nextStatus
      });
      this.setTabBarVisibleAction(!nextStatus);
    },

    setTabBarVisibleAction(show) {
      if (show) {
        tt.showTabBar();
      } else {
        tt.hideTabBar();
      }
    },

    setCustomItemAction(showCustom) {
      if (showCustom) {
        console.log('展示自定义的样式');
        tt.setTabBarItem({
          index: 1,
          text: '接口',
          iconPath: 'image/category/tab_api.png',
          selectedIconPath: 'image/category/tab_api_selected.png'
        });
      } else {
        tt.setTabBarItem({
          index: 1,
          text: 'API',
          iconPath: 'image/category/tab_api.png',
          selectedIconPath: 'image/category/tab_api_selected.png'
        });
      }
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
          backgroundColor: '#000000'
        },
        defaultTabBarStyle: {
          color: '#7A7E83',
          selectedColor: '#3cc51f',
          backgroundColor: '#ffffff'
        }
      };

      if (showCustom) {
        tt.setTabBarStyle(tabBarConfig.customStyle);
      } else {
        tt.setTabBarStyle(tabBarConfig.defaultTabBarStyle);
      }
    },

    /**
     * 开启/关闭红点的action 
     * @param {boolean} [showRedDot] - 是否展示小红点
     */
    setTabBarRedDotAction(showRedDot) {
      if (showRedDot) {
        tt.showTabBarRedDot({
          index: SET_TAB_INDEX
        });
      } else {
        tt.hideTabBarRedDot({
          index: SET_TAB_INDEX
        });
      }
    },

    /**
     * 开启/关闭tabbar右上角的徽标
     * @param {boolean} [show] - 是否展示tabbar
     */
    setTabBarAction(show) {
      if (show) {
        tt.setTabBarBadge({
          index: SET_TAB_INDEX,
          text: '1'
        });
      } else {
        tt.removeTabBarBadge({
          index: SET_TAB_INDEX
        });
      }
    },

    navigateBack() {
      this.triggerEvent('unmount');
    }

  }
});