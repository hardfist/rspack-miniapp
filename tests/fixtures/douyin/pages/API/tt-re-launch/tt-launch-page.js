Page({
  data: {
    length: 0
  },
  async onLoad() {
    tt.setNavigationBarTitle({ title: '通过reLaunch进入' });
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
  backReLaunch() {
    tt.reLaunch({
      url: 'tt-re-launch',
    });
  },
  navigateBack() {
    console.log("返回")
    tt.navigateBack({ delta: 1 });
    tt.showModal({
      content:"reLaunch跳转时已关闭所有页面，无法返回上一页哦",
      showCancel:false
    });
  }
  
})