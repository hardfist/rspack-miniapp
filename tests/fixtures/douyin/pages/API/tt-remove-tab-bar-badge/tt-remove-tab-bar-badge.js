const TABBAR_INDEX = 1;
Component({
  data: {
    addText: true,
  },
  attached() {
    this.toggleBarBadge(true);
  },
  methods: {
    setTabBarBadge() {
      let addText = !this.data.addText;
      this.setData({
        addText
      }, () => {
        this.toggleBarBadge(addText);
      })
    },
    toggleBarBadge(addText) {
      if (addText) {
        tt.setTabBarBadge({
          index: TABBAR_INDEX,
          text: "3"
        })
      } else {
        tt.removeTabBarBadge({
          index: TABBAR_INDEX
        })
      }
    },
    navigateBack() {
      this.toggleBarBadge(false);
      this.triggerEvent('unmount');
    }
  }
})