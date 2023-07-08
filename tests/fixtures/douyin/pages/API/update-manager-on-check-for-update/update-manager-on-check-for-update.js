Page({
  updateManager() {
    const updateManager = tt.getUpdateManager();
    updateManager.onCheckForUpdate((res) => {
      tt.showToast({
        title: (res.hasUpdate ? "有" : "无") + "可用更新版本",
        icon: "none",
      });
    });
  },
});