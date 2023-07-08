function success() {
  tt.showToast({
    title: 'success'
  });
}

function fail() {
  tt.showToast({
    title: 'fail'
  });
}

Page({
  long() {
    tt.vibrateLong({
      success(res) {
        console.log('触发长振动', res);
        success()
      },
      fail(err) {
        console.log('长振动错误', err);
        fail()
      },
      complete(res) {
        console.log('长振动触发complete', res);
      }
    });
  }

});