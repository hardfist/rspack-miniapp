

Page({
  chooseAdress(){
    // 该API调用需传入参数 eventName(string) 和 data(object), data 的属性有 key(字段名) 和 value(上报数据)
    tt.reportAnalytics('app_enter', {
      user: 'set_value',
      app_id: 'set_value',
    });
  }
  
});