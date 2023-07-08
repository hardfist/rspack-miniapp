Page({
  openLocation: function (e) {
    var value = e.detail.value;
    tt.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address,
      scale: Number(value.scale)
    });
  },

  getLocation() {
    tt.getLocation({
      type: 'gcj02',
      success(res) {
        tt.openLocation({
          longitude: Number(res.longitude),
          latitude: Number(res.latitude),
          name: '我',
          address: '我的位置',
          scale: 18,
          success() {
            tt.showToast({
              title: 'success'
            });
          },
          fail(res) {
            tt.showToast({
              title: res.errMsg
            });
          }
        });
      },
      fail(res) {
        tt.showToast({
          title: res.errMsg
        });
      }
    });
  }
});