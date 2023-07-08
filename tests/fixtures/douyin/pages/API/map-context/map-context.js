Page({
  data: {
    latitude: null,
    longitude: null,
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
    scale: null,
    region: null,
  },
  onReady() {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getCenterLocation() {
    let that = this;
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
      fail(err) {
        console.log('获取位置失败', err);
      },
      complete(res) {
        console.log('getCenterLocation complete', res);
      }
    });
  },
  moveToLocation() {
    const that = this
    this.mapCtx.moveToLocation({
      success(res) {
        console.log("move success: ", res);
        that.msg('移动成功')
      },
      fail(err) {
        console.log("move err: ", err);
        that.msg('移动失败')
      },
      complete(res) {
        console.log('move complete', res);
      }
    });
  },
  // Auth
  authLocation() {
    const that = this;
    tt.authorize({
      scope: "scope.userLocation",
      success(res) {
        console.log(res, res.data);
        if (res.data['scope.userLocation'] === 'ok') that.msg('您已允许授权');
      },
      fail(err) {
        console.log(err);
        that.msg('您已拒绝授权')
      },
    });
  },
  getScale() {
    let that = this;
    this.mapCtx.getScale({
      success(res) {
        console.log('getScale 成功执行了', res);
        that.setData({
          scale: res.scale
        })
      },
      fail(err) {
        console.log('getScale失败', err);
      },
      complete(res) {
        console.log('缩放complete执行', res);
      }
    })
  },
  getRegion() {
    let that = this;
    this.mapCtx.getRegion({
      success(res) {
        console.log('getRegion 成功', res);
        that.setData({
          region: res
        })
      },
      fail(err) {
        console.log('getRegion 失败', err);
      },
      complete(res) {
        console.log('getRegion complete', res);
      }
    })
  },
  /**
   * 提示框
   * @param {String} title -提示内容
   * @param {number} duration -- 显示时间
   * 
   * */
  msg(title, duration = 1500) {
    tt.showToast({
      title: title,
      duration,
      icon: 'none'
    });
  }
})