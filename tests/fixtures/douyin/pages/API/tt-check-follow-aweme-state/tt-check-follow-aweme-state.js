const app=getApp();
Page({
  checkFollowAwemeState(e) {
    tt.checkFollowAwemeState({
      success(res) {
        console.log("调用成功", res);
        const { hasFollowed } = res;
        tt.showToast({
          title: `${hasFollowed ? '已关注' : '暂未关注'}`,
          icon: "none"
        });
      },
      fail(res) {
        console.log("调用失败", res);
      },
      complete(res){
        console.log("调用完成", res)
      }
    });
  },
})