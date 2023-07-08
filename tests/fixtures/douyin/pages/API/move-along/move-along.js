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
          }
        ],
      }
    ],
  },
  onReady() {
    this.mapCtx = tt.createMapContext('myMap', this);
  },
  moveAlong() {
    this.mapCtx.moveAlong({
      markerId: 1,
      duration: 2000,
      autoRotate: true,
      path: [
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
      ],
      animationEnd() {
        tt.showToast({
          title: '动画结束', // 内容
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