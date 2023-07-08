Page({
  arrayBufferToBase64(){
    const arrayBuffer = new Uint8Array([98, 121, 116, 101, 100, 97, 110, 99, 101]);
    // 将 arraybuffer 对象转成  base64 字符串
    const base64 = tt.arrayBufferToBase64(arrayBuffer);
    console.log("base64String", base64); // "Ynl0ZWRhbmNl"
    tt.showModal({
      content: "转换成功",
      showCancel: false
    });
  }
})