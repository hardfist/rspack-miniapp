Page({
  chooseAdress() {
    tt.chooseAddress({
      success(res) {
        // 调用结果
        console.log(res.errMsg);
        // 收货人姓名
        console.log(res.userName);
        // 国标收货地址第一级地址
        console.log(res.provinceName);
        // 国标收货地址第二级地址
        console.log(res.cityName);
        // 国标收货地址第三级地址
        console.log(res.countyName);
        // 详细收货地址信息
        console.log(res.detailInfo);
        // 收货人手机号码
        console.log(res.telNumber);
      },
      
      fail(res) {
        // 当 API 执行失败后调用, 预定义返回消息格式为${API_NAME}:fail
        console.log(res.errMsg);
      },

      complete(res) {
        // 当 API 执行完成（无论成功或者失败）后都会调用, 预定义返回消息格式为${API_NAME}:ok / fail
        console.log(res.errMsg);
      }
    });
  }
});