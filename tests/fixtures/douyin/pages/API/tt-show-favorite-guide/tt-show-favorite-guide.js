Component({
  data: {
    guideShow: 'hide',
    guideTipsShow: 'hide'
  },
  properties: {},
  methods: {
    showFavoriteGuide(e) {
      let { type } = e.currentTarget.dataset;
      tt.showFavoriteGuide({
        type: type,
        content: "一键添加到我的小程序",
        position: "bottom",
        success(res) {
          console.log('showFavoriteGuide success', res);
        },
        fail(err) {
          console.log('showFavoriteGuide fail', err);
        },
        complete(res) {
          console.log('showFavoriteGuide complete', res);
          if(res.errMsg === 'showFavoriteGuide:fail had added to favorites list'){
            tt.showToast({
              title: '已经加入收藏列表',
              icon: 'none'
            });
          }
        },
      })
    }

  }
});
