Page({
  data: {
    markers: [{
          id: 1,
          latitude: 23.099994,
          longitude: 113.324520,
          iconPath: '',
          title: 'marker 1',
      },
      {
          id: 2,
          latitude: 24.099994,
          longitude: 113.324520,
          iconPath: '',
          title: 'marker 2',
      },
      {
          id: 3,
          latitude: 30.199994,
          longitude: 115.324520,
          iconPath: '',
          title: 'marker 3',
      },
      {
          id: 4,
          latitude: 34.199994,
          longitude: 90.324520,
          iconPath: '',
          title: 'marker 4',
      },
      {
          id: 5,
          latitude: 36.199994,
          longitude: 85.324520,
          iconPath: '',
          title: 'marker 5',
      },
      {
          id: 6,
          latitude: 22.199994,
          longitude: 80.324520,
          iconPath: '',
          title: 'marker 6',
      },
      {
          id: 7,
          latitude: 34.199994,
          longitude: 90.324520,
          iconPath: '',
          title: 'marker 7',
      }],
  },
  onReady(){
    this.mapCtx = tt.createMapContext("myMap");
  },
  includePoints() {
    this.mapCtx.includePoints({
      points: this.data.markers,
      padding: [10, 10, 10, 10],
      success(res) {
        console.log("缩放成功, ",res);
        tt.showToast({
          title: '缩放成功', 
        });
      },
      fail(res) {
        console.log("缩放失败: ",res);
        tt.showModal({
          title: 'includePoints 调用失败',
          content: res.errMsg
        });
      },
      complete(res) {
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  },
})