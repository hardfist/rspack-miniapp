Page({
  exitMiniProgram() {
    tt.exitMiniProgram({
      success: () => {
        console.log("exitMiniProgram success");
      },
      fail: e => {
        console.log("exitMiniProgram fail: ",e);
      },
      complete: () => {
        console.log("exitMiniProgram complete");
      }
    });
  }

});