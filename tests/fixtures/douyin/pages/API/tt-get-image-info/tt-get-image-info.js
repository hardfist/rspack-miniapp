Page({
  data: {
    imageUrl: `https://sf1-cdn-tos.douyinstatic.com/obj/microapp/frontend/micro-app/1531126392813c2431a6822.jpeg`,
    infoList: [
      { chinaName: '图片宽度', value: '' },
      { chinaName: '图片高度', value: '' },
      { chinaName: '文件格式', value: '' },
      { chinaName: '图片路径', value: '' },
    ]
  },
  getInfo() {
    tt.getImageInfo({
      src: this.data.imageUrl,
      success: (res) => {
        let infoList = this.data.infoList;
        infoList[0].value = Math.floor((res.width) / 2) + 'px';
        infoList[1].value = Math.floor((res.height) / 2) + 'px';
        infoList[2].value = res.type;
        infoList[3].value = res.path;
        this.setData({
          infoList
        })
      }
    })
  },
})