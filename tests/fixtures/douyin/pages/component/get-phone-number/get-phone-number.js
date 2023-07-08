const login = () => {
  return new Promise((resolve, reject) => {
    tt.login({
      force: true,
      success: function (res) {
        console.log('login成功, code:::: ',res.code);
        if (res.code) {
          resolve({
            hasLogin: true,
            code: res.code,
          });
        } else {
          reject({
            hasLogin: false,
          });
        }
      },
      fail: function (err) {
        reject({
          hasLogin: false,
        });
      }
    });
  });
};


Page({
  data: {},
  onLoad(){
    this.getSessionKey().then((sessionKey) => {
      this.sessionKey = sessionKey;
    });
  },

  getPhoneNumber(e) {
    tt.request({
      url: "https://ghrp2gxy.fn.bytedance.net",
      method: "POST",
      data: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        session_key: this.sessionKey,
      },
      success: (res) => {
        const userInfo = JSON.parse(res.data);
        tt.showModal({
          title: "用户当前的手机号为",
          content: userInfo.phoneNumber,
        });
      },
      fail(err){
        console.log("解密手机号请求失败: ",err)
      }
    });
  },

  getSessionKey() {
    return login().then(
      ({ code }) =>
        new Promise((resolve, reject) => {
          tt.request({
            url: `https://microapp.bytedance.com/miniprogram-demo/invoke/tma_demo_code2session?code=${code}`,
            success: (res) => {
              resolve(res.data.session_key);
            },
            fail(err) {
              reject(err)
            }
          });
        })
    );
  },
});
