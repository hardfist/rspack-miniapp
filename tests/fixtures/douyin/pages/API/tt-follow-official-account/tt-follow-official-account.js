const app = getApp();
Page({
  click() {
    tt.followOfficialAccount({
      success(res) {
        if (res.errCode === 0) {
          console.log("已关注过");
        } else {
          console.log(res.errMsg);
        }
      },
      fail:err=>{
        console.log(err)
      },
      complate:res=>{
        console.log("已触发关注",res);
      }
    });
  }
})
