Page({
  updateManager() {
    var updateManager = tt.getUpdateManager();
    updateManager.onUpdateFailed((err) => {
      console.log("版本更新失败原因", err);
      tt.showToast({
        title: "版本更新失败，请重试",
        icon: "none",
      });
    });
  }
})