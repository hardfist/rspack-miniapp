Page({
  data: {},
  onShareAppMessage: function() {
    return {
      channel: 'video',
      title: '测试分享视频',
      desc: '测试描述',
      extra: {
        videoTopics: ['话题一', '话题二'], // 只有抖音支持该属性
      },
      success(res) {
        console.log("成功回调的参数::::::::",res)
      },
      fail(res) {
        console.log("失败回调的参数:::::::",res)
      },
      complete(res){
        console.log("接口调用的回调,无论成功失败都会执行",res.errMsg);
      }
    }
  }
})