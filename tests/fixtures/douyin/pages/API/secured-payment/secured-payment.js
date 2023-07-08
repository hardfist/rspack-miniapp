// pages/API/payment/payment.js

const getDeviceId = () => {
      return new Promise((resolve, reject) => {
	      tt.getGeneralInfo({
		success(generalResponse) {
		  	resolve(generalResponse.info.device_id);
		},
		fail() {
			resolve(0);
		}
	      });
      });
};

Component({

  data: {
    loading: false
  },

  properties: {

  },

  methods: {

    requestPayment() {
      tt.showLoading();
	    getDeviceId().then(deviceId => {
	      tt.request({
		url: 'https://microapp.bytedance.com/miniprogram-demo/invoke/createEcpayOrder',
		method: 'POST',
		data: {
		  amount: 1,
		  device_id: deviceId 
		},
		success: (res) => {
		  console.log('orderInfo是：', res.data.orderInfo);
		  tt.pay({
		    orderInfo: res.data.orderInfo,
		    service: 5,
		    success: (res) => {
		      tt.showToast({
			title: '支付成功'
		      });
		    },
		    fail: (res) => {
		      tt.showToast({
			title: '支付失败'
		      });
		    }
		  });
		  tt.hideLoading();
		}
	      });
	    });
    }
  }
})
