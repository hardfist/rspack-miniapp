Page({
  chooseLocation() {
    tt.authorize({
      scope: "scope.userLocation",
      success: (res) => {
        tt.chooseLocation({
          latitude: "",  // 目标地纬度,不传展示当前位置
          longitude: "",  // 目标地经度,不传展示当前位置
          success: (res) => {
            console.log("chooseLocation success: ", res);
          },
          fail: (err) => {
            console.log("chooseLocation fail: ", err);
          },
          complete: (res) => {
            console.log("chooseLocation complete");
          }
        });
      },
      fail: (err) => {
        console.log("scope.userLocation fail: ", err);
        if(err.errNo === 21102){
          tt.showModal({
            title: "位置信息授权失败",
            content: "请打开地理位置授权",
            success(res) {
              res.confirm && tt.openSetting({});
            }
          });
        }
      },
    });
  }
})