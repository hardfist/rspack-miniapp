Page({
  data: {
    disabled: true
  },
  bindInput: function (e) {
    this.inputValue = e.detail.value;

    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      });
    } else {
      this.setData({
        disabled: true
      });
    }
  },
  makePhoneCall: function () {
    var that = this;
    tt.makePhoneCall({
      phoneNumber: this.inputValue,
      success: function () {
        tt.showToast({
          title: 'success'
        });
      },

      fail(err) {
        tt.showToast({
          icon: 'none',
          title: err.errMsg
        });
      }

    });
  }
});