Page({
  data: {
    length: 0
  },
  async onLoad(options) {
    console.log("上个页面跳转传参："+options.params);
    tt.setNavigationBarTitle({ title: '通过navigateTo进入' });
    let pages = await this.getPages();
    this.setData({
      length: pages.length
    })
  },
  getPages() {
    return new Promise((resolve, reject) => {
      resolve(getCurrentPages());
    })
  },
  navigateBack() {
    tt.navigateBack({ delta: 1 });
  }
})