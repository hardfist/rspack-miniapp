Page({
  onReady(e) {
    this.mapCtx = tt.createMapContext("myMap");
  },
  setCenterOffset() {
    this.mapCtx.setCenterOffset({
      offset: [0.3, 0.7], // 此处设置中心点位于地图的左下方
      success(res) {
        console.log("设置中心点成功", res);
        tt.showToast({
          title: '设置成功',
        });
      },
      fail(err) {
        console.log('设置中心点失败', err);
        tt.showToast({
          title: '设置失败',
          icon: 'none'
        });
      },
      complete(res) {
        console.log('接口已调用（调用成功、失败都会执行）', res);
      },
    });
  },
});