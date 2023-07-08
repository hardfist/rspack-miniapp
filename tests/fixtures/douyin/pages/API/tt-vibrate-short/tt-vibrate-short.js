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
  short() {
    tt.vibrateShort({
      success(res) {
        console.log('触发短振动', res);
        success()
      },
      fail(err) {
        console.log('短振动错误', err);
        fail()
      },
      complete(res) {
        console.log('短振动触发complete', res);
      }
    });
  }

});