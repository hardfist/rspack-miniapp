Page({
  data: {},
  handleInput(e) {
    console.log("input", e.detail);
    this.setData({
      value: e.detail.value
    })
  },
  handleFocus(e) {
    console.log("focus", e.detail);
  },
  handleBlur(e) {
    console.log("blur", e.detail);
  },
  handleConfirm(e) {
    console.log("confirm", e.detail);
  },
  handleLineChange(e) {
    console.log("linechange", e.detail);
  },
});