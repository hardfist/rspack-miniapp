// pages/API/tt-authorize/tt-authorize.js
Page({
  data: {
    settings: {
      'userInfo': {
        title: '用户信息',
        hasAuth: false,
        btnTxt: '用户信息授权'
      },
      'userLocation': {
        title: '地理位置',
        hasAuth: false,
        btnTxt: '地理位置授权'
      },
      'address': {
        title: '通讯地址',
        hasAuth: false,
        btnTxt: '通讯地址授权'
      },
      'record': {
        title: '录音功能',
        hasAuth: false,
        btnTxt: '录音功能授权'
      },
      'album': {
        title: '保存到相册',
        hasAuth: false,
        btnTxt: '保存到相册授权'
      },
      'camera': {
        title: '摄像头',
        hasAuth: false,
        btnTxt: '摄像头授权'
      }
    }
  },
  authAction(e) {
    const scopeName = 'scope.' + e.currentTarget.dataset.auth;
    const settingName = scopeName.replace(/scope\./g, '');
    tt.authorize({
      
      scope: scopeName,
      success: res => {
        console.log("用户已授权");
        const preSettings = this.data.settings;
        preSettings[settingName].hasAuth = true;
        this.setData({
          settings: preSettings
        });
      },
      fail:err=>{
        console.log('用户未授权');
        const preSettings = this.data.settings;
        preSettings[settingName].hasAuth = false;
        this.setData({
          settings: preSettings
        });
      },
      complete:res=>{
        console.log('接口已调用');
      }
    });
  }
})