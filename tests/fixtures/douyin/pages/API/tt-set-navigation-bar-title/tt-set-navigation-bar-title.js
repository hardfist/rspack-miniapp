Page({
  setNaivgationBarTitle: function (e) {
    var title = e.detail.value.title || "title";
    tt.setNavigationBarTitle({
      title: title,
      success: function (res) {
        console.log('success执行了', res);
      },
      fail: function (err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res)
      }
    });
  }
});