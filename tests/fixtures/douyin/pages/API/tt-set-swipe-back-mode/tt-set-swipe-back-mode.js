Page({
  disableSwipe() {
    tt.setSwipeBackMode(0);
  },
  enableSwipe() {
    tt.setSwipeBackMode(1);
  },
  enableEdgeSwipe() {
    tt.setSwipeBackMode(2);
  }
})