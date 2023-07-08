const TABBAR_INDEX = 1;
Component({
  data: {
    showDot: true
  },
  attached() {
    tt.showTabBarRedDot({
      index: TABBAR_INDEX
    })
  },
  methods: {
    hideTabBarRedDot() {
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
        tt.showTabBarRedDot({ index: TABBAR_INDEX });
      } else {
        tt.hideTabBarRedDot({ index: TABBAR_INDEX });
      }
    },
    navigateBack() {
      this.hideTabBarRedDot();
      this.triggerEvent('unmount');
    }
  }
})    