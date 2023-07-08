Component({
  data: {
    showTabBar: true
  },
  methods: {
    hideTabBar() {
      let showTabBar = !this.data.showTabBar;
      this.setData({
        showTabBar
      }, () => {
        this.toggleTabBar(showTabBar);
      })
    },
    toggleTabBar(showTabBar) {
      if (showTabBar) {
        tt.showTabBar({ animation: true });
      } else {
        tt.hideTabBar({ animation: true });
      }
    },
    navigateBack() {
      this.toggleTabBar(true);
      this.triggerEvent('unmount');
    }
  }
})