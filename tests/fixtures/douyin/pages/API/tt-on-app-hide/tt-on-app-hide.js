Page({
  data: {
    result: ""
  },
  onLoad: function (options) {
    tt.onAppHide(()=>{
      this.setData({
        result: "切后台成功"
      })
    })
  },
  clearResult() {
    this.setData({
      result: ''
    })
  },
})