Component({
  data: {
    guideShow: 'hide',
    guideTipsShow: 'hide'
  },
  properties: {},
  methods: {
    switchGuideImage(e) {
      this.setData({
        guideShow: 'show'
      });
      setTimeout(() => {
        this.setData({
          guideShow: 'hide'
        });
      }, 5000);
    },

    switchGuideTips(e) {
      this.setData({
        guideTipsShow: 'show'
      });
      setTimeout(() => {
        this.setData({
          guideTipsShow: 'hide'
        });
      }, 5000);
    },

    closeGuide() {
      console.log('closeGuide:::::');
      this.setData({
        guideShow: 'hide'
      });
    },

    closeTipsGuide() {
      this.setData({
        guideTipsShow: 'hide'
      });
    },

    addToFavor() {
      console.log('calling');
      tt.showToast({
        title: '已添加到小程序列表'
      });
      this.setData({
        guideShow: 'hide'
      });
    }

  }
});