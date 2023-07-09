Card({
  data: {
    message: 'Hello Lynx',
  },
  onInput(event: Lynx.LynxEvent) {
    this.setData({
      message: event.currentTarget.detail.value,
    });
  },
});
