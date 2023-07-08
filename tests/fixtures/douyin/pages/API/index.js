const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    list: app.globalData.api,
    customView: null
  },
  onLoad(params) {
    const { view } = params || {};
    if(view) {
      app.globalData.view = view.split('?')[0]
    }
  },
  toggleSwitch(e) {
    let {
      index
    } = e.currentTarget.dataset;
    let {
      list
    } = this.data;
    this.setData({
      list: list.map((item, idx) => {
        item.open = idx === index ? !item.open : false;
        return item;
      })
    });
  },

  switchView(e) {
    this.setData({
      customView: e.currentTarget.dataset.view
    });
    tt.pageScrollTo({
      scrollTop: 0
    });
  },

  switchBack(e) {
    app.globalData.view = null;
    tt.reLaunch({
      url: `/pages/index/index?view=${this.data.customView}`
    });
  },
  onShow() {
    this.setData({
      customView: app.globalData.view || null,
    })
  },
  backHome() {
    tt.reLaunch({
      url: "/pages/index/index"
    })
  }
});


