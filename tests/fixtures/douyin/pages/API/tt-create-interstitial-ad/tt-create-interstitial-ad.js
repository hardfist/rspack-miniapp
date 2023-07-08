let interstitialAd = null;
Page({
  data: {
    isCreateFail: false
  },
  creatInterstitialAd(){
    interstitialAd = tt.createInterstitialAd({
      adUnitId: "b754ef8rxxxxxxxxx",
    });
    this.setData({
      isCreateFail: true
    });
    interstitialAd
      .load()
      .then(() => {
        interstitialAd.show();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  clear(){
    interstitialAd = null;
    this.setData({
      isCreateFail: false
    });
  }
})