Page({
  data: {
    latitude: 39.907957,
    longitude: 116.397493,
    markers: [
      {
        id: 1,
        latitude: 39.907957,
        longitude: 116.397493,
        title: "北京",
      },
    ],
    circles: [
      {
        latitude: 39.907957,
        longitude: 116.397493,
        radius: 100,
      },
    ],
    scale: 16,
    mapContext: null
  },
  createMapContext() {
    if (this.data.mapContext) {
      tt.showToast({
        title: '已创建',
        icon: 'none'
      })
      return
    }
    // API调用需传入 mapId(map 组件的 id)
    const mapCtx = tt.createMapContext("myMap");
    this.setData({
      mapContext: mapCtx
    });
    console.log('地图上下文::',this.data.mapContext);
    mapCtx && tt.showToast({
      title: '创建成功'
    });
  }
})