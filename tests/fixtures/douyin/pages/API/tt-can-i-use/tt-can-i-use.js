Page({
  canIUse(e) {
    console.log(e);
    let data = e.target.dataset.data;
    let canIUse = tt.canIUse(data);

    if (canIUse) {
      tt.showModal({
        content: `${data} 在当前版本可用`,
        showCancel: false,
        cancelColor: "red",
        confirmText: "确定"
      });
    } else {
      tt.showModal({
        content: `${data} 在当前版本不可用`,
        showCancel: false,
        cancelColor: "red",
        confirmText: "确定"
      });
    }
  }

});