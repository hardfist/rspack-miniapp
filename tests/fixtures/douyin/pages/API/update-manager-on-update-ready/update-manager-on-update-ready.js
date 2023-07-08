Page({
  updateManager() {
    var updateManager = tt.getUpdateManager();
    updateManager.onUpdateReady((res) => {
      if (!res.hasUpdate) {
        tt.showToast({
          title: "新版本下载完成",
          icon: "none",
        });
      }
    });
  }
})