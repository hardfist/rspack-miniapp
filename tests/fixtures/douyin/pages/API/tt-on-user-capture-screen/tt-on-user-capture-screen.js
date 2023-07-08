Component({
  data: {
    captured: false
  },

  attached() {
    tt.onUserCaptureScreen((res) => {
      this.setData({
        captured: true
      });
    });
  },

  properties: {},
  methods: {}
});