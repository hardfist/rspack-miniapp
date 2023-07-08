Page({
  data: {},
  modalTap(e) {
    tt.showModal({
      title: "模态框标题",
      content: "模态框内容",
      showCancel: false,
      success(res) {
        console.log('showModal success', res);
        if (res.confirm) {
          tt.showToast({
            title: 'CONFIRM'
          });
        }
        if (res.cancel) {
          tt.showToast({
            title: 'CANCEL',
            icon: "none"
          });
        }
      },
      fail(err) {
        console.log('showModal fail', err);
      },
      complete(res) {
        console.log('showModal complete', res);
      }
    });
  },
  noTitlemodalTap(e) {
    tt.showModal({
      content: "模态框内容",
      confirmText: "确定",
      cancelText: "关闭",
      success(res) {
        console.log('showModal success', res);
        if (res.confirm) {
          tt.showToast({
            title: 'CONFIRM'
          });
        }
        if (res.cancel) {
          tt.showToast({
            title: 'CANCEL',
            icon: "none"
          });
        }
      },
      fail(err) {
        console.log('showModal fail', err);
      },
      complete(res) {
        console.log('showModal complete', res);
      }
    });
  },
  custommodalTap(e) {
    tt.showModal({
      title: "请求获得定位权限",
      content: "获得你的地理位置能够更好的为你推荐本地信息",
      confirmColor: "#00FF00",
      cancelColor: "#FF0000",
      success(res) {
        console.log("用户点击了" + (res.confirm ? "确定" : "取消"))
        if (res.confirm) {
          tt.showToast({
            title: 'CONFIRM'
          });
        }
        if (res.cancel) {
          tt.showToast({
            title: 'CANCEL',
            icon: "none"
          });
        }
      },
      fail(err) {
        console.log('showModal fail', err);
      },
      complete(res) {
        console.log('showModal complete', res);
      }
    });
  },
  inputmodalTap(e) {
    tt.showModal({
      title: "填写内容",
      editable: true,
      placeholderText: "请在此输入...",
      success(res) {
        if (res.confirm) {
          console.log("用户点击了确认，输入了" + res.content)
        } else {
          console.log("用户点击了取消") // 用户选择取消时不会返回输入的content
        }
      },
      fail(err) {
        console.log('showModal fail', err);
      },
      complete(res) {
        console.log('showModal complete', res);
      }
    });
  },
});
