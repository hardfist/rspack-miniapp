Page({
  data: {},
  onShareAppMessage: function() {
    return {
      channel: 'video',
      title: '测试分享视频',
      desc: '测试描述',
      extra: {
        //只在抖音可用 且与剪辑模版参数cutTemplateId互斥 
        sticker_id: "6864836269466191885",
        abortWhenStickIdUnavailable:false
      },
      success(res) {
        console.log(res.videoId)
        //回调中直接加上是否使用传入贴纸拍摄字段(res.shareWithStickId)
        res.shareWithStickId
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