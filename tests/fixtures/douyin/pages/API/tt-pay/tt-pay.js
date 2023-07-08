Component({
  data: {
    loading: false
  },
  properties: {},
  methods: {
    requestPayment() {
      this.setData({
        loading: true
      });
      tt.request({
        url: 'https://tp-pay.snssdk.com/cashdesk/test/createmicoapporder',
        method: 'POST',
        data: {
          debug: '',
          totalAmount: 1,
          isDebug: 0,
          isOffline: 0,
          merchantId: '1300000004',
          appId: '800000040005',
          service: 1
        },
        success: res => {
          const data = res.data;
          this.setData({
            loading: false
          });
          tt.pay({
            orderInfo: data.data,
            service: 1,
            success(res) {
              console.log('pay-success:', res);
            },
            fail(err){

            },
           complete:res=>{}
          });
        },
        fail(err) {
          tt.showModal({
            content: JSON.stringify(err)
          });
        },
        complete: res => {
          console.log("您已发起支付", res)
        }
      });
    }
  }
});
