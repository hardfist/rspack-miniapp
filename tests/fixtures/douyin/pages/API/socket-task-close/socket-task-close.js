let socketTask;
Page({
  data: {
    socketStatus: ''
  },
  createSocket() {
    let that = this;
    let socketStatus = this.data.socketStatus;
    if (socketTask && socketStatus === 'open') return;
    if (socketTask && socketStatus && socketStatus !== 'open') socketTask.close({ code: 1001 });
    let url = 'wss://frontier.snssdk.com/ws/v2?aid=1288&device_id=98543534&fpid=72&access_key=f075e82cde98601fc5d41302af325631';
    socketTask = tt.connectSocket({
      url,
      protocols: [],
      success: (res) => {
        console.log("创建成功", res, socketTask);
      },
      fail: (res) => {
        console.log("创建失败", res);
      },
    })
    socketTask.onOpen(() => {
      console.log("WebSocket 已连接");
      this.setData({
        socketStatus: 'open'
      })
    });

    socketTask.onClose(() => {
      console.log("WebSocket 已断开");
      this.setData({
        socketStatus: 'close'
      })
    });
    socketTask.onError((error) => {
      console.error("WebSocket 发生错误:", error);
      this.setData({
        socketStatus: 'error'
      })
    });
    socketTask.onMessage((message) => {
      console.log("socket message:", message);
    });
  },
  closeSocket() {
    socketTask.close({
      code: 1000,
      reason: '关闭',
      success: res => {
        console.log('close socket success', res);
        this.msg('关闭成功');
        this.setData({
          socketStatus: 'close'
        })
      },
      fail: err => {
        console.log('close socket err', err);
      }
    });
  },
  sendMessage() {
    if (!socketTask || this.data.socketStatus !== 'open') {
      this.msg('socket未创建或者创建失败');
      return;
    }
    socketTask.send({
      data: 'hello socket',
      success: (res) => {
        this.msg('发送成功');
        console.log("send success", res);
      },
      fail: (res) => {
        console.log("send err", res);
      },
    });
  },
  msg(msg) {
    tt.showToast({
      title: msg,
      icon: 'none'
    });
  }

})