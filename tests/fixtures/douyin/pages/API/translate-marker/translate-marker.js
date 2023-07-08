Page({
  data: {
    markers: [{
      id: 1,
      longitude: 116.397493,
      latitude: 39.907957,
      },
    ],
    polyline: [
      {
        points: [
          {
            longitude: 116.397493,
            latitude: 39.907957,
          },
          {
            longitude: 116.39394,
            latitude: 39.90503,
          },
          {
            longitude: 116.40159,
            latitude: 39.90511,
          },
          {
            longitude: 116.397493,
            latitude: 39.907957,
          }
        ],
      }
    ],
  },
  onReady() {
    this.mapCtx = tt.createMapContext('myMap', this);
  },
  translateMarker(e) {
    this.mapCtx.translateMarker({
      markerId: 1,
      destination: {
        longitude: e.currentTarget.dataset.longitude,
        latitude: e.currentTarget.dataset.latitude,
      },
      autoRotate: true,
      moveWithRotate: true,
      animationEnd() {
        tt.showToast({
          title: '平移结束', 
        });
      },
      success(res) {
        console.log('移动成功：', res);
      },
      fail(res) {
        console.log("移动失败: ", res.errMsg);
      },
      complete(res) {
        console.log("接口已调用（调用成功、失败都会执行）: ", res.errMsg);
      }
    });
  },
});