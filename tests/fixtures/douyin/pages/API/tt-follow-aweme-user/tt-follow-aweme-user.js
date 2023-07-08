const app=getApp();
Page({
  click(){
    tt.followAwemeUser({
      success(res) {
        if(res.followed){
          console.log('已关注');
        }else{
          console.log('未关注');
        }
      },
      fail(err){
        console.log("查看失败",err)
      },
      complete(res){
        console.log("调用查看",res)
      }
    });
  }
})