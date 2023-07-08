// pages/API/ide-payment/ide-payment.js

Page({
  data: {
    payVisible: false,
    orderInfo: {}
  },

  onLoad: function (options) {
    if (options.order_info) {
      let orderInfo = {}
      try {
        orderInfo =  JSON.parse(decodeURIComponent(options.order_info))
      } catch (error) {
      }
      this.setData({
        orderInfo
      })
      this.showTTPay(orderInfo)
    }
  },
  onShow: function (options = {}) {
    const { orderInfo, payVisible } = this.data
    if (options.showFrom === 10 && !payVisible && orderInfo.order_id) {
      this.showTTPay(orderInfo)
    }
  },
  onTTPay(visible) {
    this.setData({
      payVisible: visible
    })
  },
  showTTPay(orderInfo) {
    this.onTTPay(true)
    tt.pay({
      service: 5,
      orderInfo,
      success: (res) => {
        this.onTTPay(false)
        if (res.code === 0) {
          tt.showToast({
            title: '支付成功'
          });
        }
      },
      fail: (res) => {
        this.onTTPay(false)
        tt.showToast({
          title: '支付失败'
        });
      }
    })
  }
})
