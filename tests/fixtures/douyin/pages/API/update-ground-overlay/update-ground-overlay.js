Page({
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
  },
  onReady(e) {
    this.mapCtx = tt.createMapContext("myMap");
    // 添加自定义图层
    this.mapCtx.addGroundOverlay({
      id: "picture",
      src: "http://sf1-cdn-tos.douyinstatic.com/obj/microapp/frontend/docs/images/image-3873097097749289.5.png",
      bounds: {
        // 西南角
        southwest: {
          longitude: 111.32452,
          latitude: 21.099994,
        },
        // 东北角
        northeast: {
          longitude: 115.32452,
          latitude: 25.099994,
        },
      },
    });
  },
  updateGroundOverlay() {
    this.mapCtx.updateGroundOverlay({
      id: "picture",
      // 更换新的图片
      src: "http://sf1-cdn-tos.douyinstatic.com/obj/microapp/frontend/docs/images/image-1273877887894621.png",
      // 经度度范围变小
      bounds: {
        // 西南角
        southwest: {
          longitude: 112.32452,
          latitude: 22.099994,
        },
        // 东北角
        northeast: {
          longitude: 114.32452,
          latitude: 24.099994,
        },
      },
      success(res) {
        console.log('更换自定义图层成功', res);
        tt.showToast({
          title: '更换成功',
        });
      },
      fail(err) {
        console.log('更换自定义图层失败', err);
        tt.showToast({
          title: '更换失败',
          icon: 'none'
        });
      },
      complete(res) {
        console.log('接口已调用（调用成功、失败都会执行）', res);
      },
    });
  },
});