Page({
  base64ToArrayBuffer(){
    const base64Str = "Ynl0ZWRhbmNl"; // 'Ynl0ZWRhbmNl' 是 'bytedance' 字符串的 base64编码字符串
    // 将 base64 字符串转成 arraybuffer 对象
    const arrayBuffer = tt.base64ToArrayBuffer(base64Str);
    console.log("转换生成的 ArrayBuffer 对象: " , arrayBuffer);
    tt.showModal({
      content: "转换成功",
      showCancel: false
    });
  }
})