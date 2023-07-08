Page({
  canIPut(e) {
    let data = e.target.dataset.data;
    let canIPut = tt.canIPutStuffOverComponent(data);
    if (canIPut) {
      tt.showModal({
        content: `可以在 ${data} 组件上放置元素`,
        showCancel: false,
        cancelColor: "red",
        confirmText: "确定"
      });
    } else {
      tt.showModal({
        content: `不可以在 ${data} 组件上放置元素`,
        showCancel: false,
        cancelColor: "red",
        confirmText: "确定"
      });
    }
  }

});