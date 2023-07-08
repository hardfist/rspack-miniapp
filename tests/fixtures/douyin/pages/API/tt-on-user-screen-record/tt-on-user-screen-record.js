Page({
  data: {
    src: 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4',
  },
  onRecord: function() {
    const callback = (res) => {
      // 防止录屏逻辑
      if(res.state === 'start') {
        this.setData({
          src: 'wrong url'
        }, () => {
          tt.showToast({
            title: "开始录屏",
            icon: 'none',
            duration: 2000,
          })
        })
      } else if (res.state === 'stop') {
        this.setData({
          src: 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4'
        }, () => {
          tt.showToast({
            title: "结束录屏",
            icon: 'none',
            duration: 2000,
          })
        })
      }
    }
    tt.onUserScreenRecord(callback)
    tt.showToast({
      title: "开启录屏监听",
      icon: 'none',
      duration: 2000,
    })
  }
})