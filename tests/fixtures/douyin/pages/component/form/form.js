Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    });
    this.setData({
      chosen: e.detail.value
    });
  },
  pickerCancel(e) {
    this.setData({
      pickerHidden: true
    });
  },
  pickerShow(e) {
    this.setData({
      pickerHidden: false
    });
  },
  formSubmit(e) {},
  formReset(e) {
    this.setData({
      chosen: ''
    });
  }
});