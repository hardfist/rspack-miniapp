Page({
  data: {
    isLogin: false
  },
  onLoad(){

    tt.checkSession({
      success: () => {
        this.setData({
          isLogin: true
        })
      }
    });
  },
  submit() {
    tt.showToast({
      title: "submit success"
    });
  },
  reset() {
    tt.showToast({
      title: "reset success"
    });
  },
  getPhoneNumberHandler(e) {
    console.log("获取手机号的加密数据成功,开发者可以把该数据传回到自己的服务端进行解密获取手机号,加密数据为: ",e)
    if (e.detail.errMsg.slice(-2) === "ok") {
      tt.showToast({
        title: 'success'
      });
    }else {
      tt.showToast({
        title: 'failed',
        icon: "none"
      });
    }
  },
  login(){
    tt.login({
      success: (res) => {
        this.setData({
          isLogin: true
        })
      },
      fail: (err) => {
        console.log("登录失败", err);
      },
    });
  }
});