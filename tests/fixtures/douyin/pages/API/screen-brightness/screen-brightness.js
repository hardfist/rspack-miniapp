Component({
  data: {
    screenBrightness: 0
  },
  properties: {},

  attached() {
    this._updateScreenBrightness();
  },

  methods: {
    changeBrightness(e) {// 待支持
      // const value = Number.parseFloat(
      //   (e.detail.value).toFixed(1)
      // )
      // tt.setScreenBrightness({
      //   value,
      //   success: () => {
      //     this._updateScreenBrightness()
      //   }
      // })
    },

    _updateScreenBrightness() {// 待支持
      // tt.getScreenBrightness({
      //   success: (res) => {
      //     this.setData({
      //       screenBrightness: Number.parseFloat(
      //         res.value.toFixed(1)
      //       )
      //     })
      //   },
      //   fail(err) {
      //     console.error(err)
      //   }
      // })
    }

  }
});