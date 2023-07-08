Page({
  data: {
    videoId: ""
  },
  onShareAppMessage (option) {
    const that = this;
    return {
      channel: "video",
      title: "测试分享视频",
      desc: "测试描述",
      extra: {
        videoTopics: ["hello", "hi"],
        withVideoId: true,
      },
      success (res) {
        console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
        console.log('分享成功的回调传递的参数: ',res);
        that.setData({
          videoId: res.videoId
        });
      },
      fail () {
        console.log('转发发布器调起失败');
      }
    }
  },
  toVideo(){
    tt.showModal({
      title: "即将:",
      content: "跳转到分享的视频播放页面",
      success: (res) => {
        if (res.confirm && this.data.videoId) {
          tt.navigateToVideoView({
            videoId: this.data.videoId,
            success(res){
              console.log("跳转成功: ", res.errMsg);
            },
            fail(res){
              console.log("跳转失败,错误码: ", res.errCode);
            },
            complete: (res) => {
              console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
            }
          });
        }
      }
    });
  }
})