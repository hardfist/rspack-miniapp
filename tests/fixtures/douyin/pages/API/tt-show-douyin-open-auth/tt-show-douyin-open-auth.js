Page({
  data: {
    permission: {
      "following.list": "关注列表",
      "fans.list": "粉丝列表",
      "item.comment": "获取并管理你的视频评论",
    },
    grantPermissions: [],
    errMsg: "",
  },
  onLoad: function (options) {
    
  },
  showDouyinOpenAuth() {
    const that = this;
    tt.showDouyinOpenAuth({
      scopes: {
        "following.list": 1,
        "fans.list": 1,
        "item.comment": 1
      },
      success(res) {
        console.log("showDouyinOpenAuth success: ", res);
        // 得到的 ticket 通过开发者服务端请求抖音开放平台接口, 换取长期票据 access_token 
        const { ticket, grantPermissions } = res;
        that.setData({
          grantPermissions,
          errMsg: "",
        })
      },
      fail(err) {
        console.log("showDouyinOpenAuth fail: ", err);
        that.setData({
          errMsg: JSON.stringify(err),
          grantPermissions: []
        })
      },
      complete(res) {
        console.log("showDouyinOpenAuth complete: ", res);
      },
    });
  },
});
