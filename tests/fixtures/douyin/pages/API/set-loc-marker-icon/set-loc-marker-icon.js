Page({
  onReady(e) {
    this.mapCtx = tt.createMapContext("myMap");
  },
  moveToLocation() {
    this.mapCtx.moveToLocation();
  },
  setLocMarkerIcon1() {
    this.mapCtx.setLocMarkerIcon({
      iconPath: 'set-loc-marker-icon1.png',
      success(res) {
        console.log('设置定位点图标成功', res);
        tt.showToast({
          title: '设置成功',
        })
      },
      fail(err) {
        console.log('设置定位点图标失败', err);
        tt.showToast({
          title: '设置失败',
          icon: 'none'
        })
      },
      complete(res) {
        console.log('接口已调用（调用成功、失败都会执行）', res);
      },
    });
  },
  setLocMarkerIcon2() {
    this.mapCtx.setLocMarkerIcon({
      iconPath: 'set-loc-marker-icon2.png',
      success(res) {
        console.log('设置定位点图标成功', res);
        tt.showToast({
          title: '设置成功',
        })
      },
      fail(err) {
        console.log('设置定位点图标失败', err);
        tt.showToast({
          title: '设置失败',
          icon: 'none'
        })
      },
      complete(res) {
        console.log('接口已调用（调用成功、失败都会执行）', res);
      },
    });
  },
})