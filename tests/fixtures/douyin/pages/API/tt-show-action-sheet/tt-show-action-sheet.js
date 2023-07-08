const itemList = ["加精", "置顶", "删除", "封禁作者"];
Page({
  actionSheetTap () {
    tt.showActionSheet({
      itemList,
      itemColor: "#238E68",
      success(res) {
        console.log('showActionSheet success', res);
        tt.showToast({
          title: `您点击了${itemList[res.tapIndex]}`,
          icon: 'none'
        });
      },
      fail(err) {
        console.log('showActionSheet fail', err);
      },
      complete(res) {
        console.log('showActionSheet complete', res)
      }
    });
  }
});