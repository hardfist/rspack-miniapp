Page({
  data: {
    focus: false,
    inputValue: '',
    idValue: '',
    _value: '',
    value: ''
  },
  // 实时获取输入值
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  // 金额输入框  
  bindReplaceInput(e) {
    const value = e.detail.value
    this.setData({
      value: value,
    }, () => {
      this.setData({
        value: value.match(/\d+(\.\d{0,2})?/) ? value.match(/\d+(\.\d{0,2})?/)[0] : ''
      })
    })
  },


  // 输入'123'收起键盘
  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      tt.hideKeyboard();
    }
  },
  getFocus(){
    console.log("获取焦点");
  },
  onBlur(){
    console.log("失去焦点");
  },
  onConfirm(){
    console.log("用户点击了完成按钮");
  },
  onConfirmId(e){
    const id = e.detail.value.replace(/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, '')
    console.log(id);
    this.setData({
      idValue:id
    });
  },
  // 获取输入框的内容
  handleInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  getInputValue() {
    tt.showToast({
      title: this.data.value,
    });
  },
  // 清除输入框内容
  clear() {
    this.setData({
      value: "",
    });
  },
  // 每输入四个数字会额外输出一个空格符
  handleInputNmb(e) {
    // 用户每输入 4 个数字，会额外输出一个空格符
    const value = e.detail.value.replace(/(\d{4})(?=\d)/g, "$1 ");
    this.setData({
      _value: value,
    });
  },
});