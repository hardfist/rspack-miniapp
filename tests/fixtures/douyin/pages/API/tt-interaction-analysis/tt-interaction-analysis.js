const app = getApp();
Page({
  click() {
    tt.interactionAnalysis({
      /*
       * @param{type:like/favorite/post_comment}
       * 分别为点赞、收藏、评论时发生交互
      */
      type: "like",
      success: res => {
        console.log("成功触发交互行为",res);
      },
      fail: err => {
        console.log("触发交互行为失败",err);
      },
      complete: res => {
        console.log("交互行为已发生",res)
      }
    });
  }
})
