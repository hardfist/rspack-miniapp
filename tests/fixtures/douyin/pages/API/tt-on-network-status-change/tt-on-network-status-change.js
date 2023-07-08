Component({
  data: {
    isConnected: false
  },
  lifetimes: {
    attached() {
      this.listenChangeStatus();
      this.showNetWorkStatus();
    }
  },
  methods: {
    listenChangeStatus() {
      tt.onNetworkStatusChange(res => {
        this.setData({
          isConnected: res.isConnected,
          networkType: res.networkType
        });
      });
    },

    showNetWorkStatus() {
      tt.getNetworkType({
        success: res => {
          this.setData({
            isConnected: res.networkType !== 'none',
            networkType: res.networkType
          });
        }
      });
    }

  }
});