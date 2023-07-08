Page({
  data: {
    copyed: '',
    pasted: ''
  },
  copy: function () {
    var that = this;

    if (!that.data.copyed) {
      return tt.showToast({
        icon: 'none',
        title: '请输入内容'
      });
    }

    tt.setClipboardData({
      data: that.data.copyed,

      success() {
        tt.showToast({
          title: '复制好了'
        });
      }

    });
  },

  input(event) {
    this.setData({
      copyed: event.detail.value
    });
  },

  paste() {
    var that = this;
    tt.getClipboardData({
      success: function (res) {
        that.setData({
          pasted: res.data
        });
        tt.showToast({
          title: '粘贴好了'
        });
      }
    });
  }

});