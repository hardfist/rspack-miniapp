Page({
  data: {
    length: 0
  },
  async onLoad(option) {
    console.log("上一个页面传来的参数为："+ option.params)
    tt.setNavigationBarTitle({ title: '通过redirectTo进入' });
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
  backRedirectTo(){
    tt.redirectTo({
      url: 'tt-redirect-to',
    });
  },
  navigateBack() {
    console.log("返回")
    tt.navigateBack({ delta: 1 });
    tt.showModal({
      content:"redirectTo跳转时已关闭其页面，无法返回上一页哦",
      showCancel:false
    });
  }
})