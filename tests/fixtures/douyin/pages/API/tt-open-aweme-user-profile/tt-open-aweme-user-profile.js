// /Users/bytedance/Desktop/testgit/tma-demo/pages/API/tt-open-aweme-user-profile/tt-open-aweme-user-profile.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  goMyPage(){
    console.log(1)
    tt.openAwemeUserProfile({
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => {
        console.log(res);
      },
    });
  }
})