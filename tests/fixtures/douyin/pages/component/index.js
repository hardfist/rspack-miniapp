const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    list: app.globalData.components
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
  }
});