Page({
  data: {
    items: [{
      value: 'xigua',
      name: '西瓜视频'
    }, {
      value: 'toutiao',
      name: '今日头条',
      checked: 'true'
    }, {
      value: 'huoshan',
      name: '火山小视频'
    }, {
      value: 'douyin',
      name: '抖音',
      color: 1
    }, {
      value: 'flipgaram',
      name: 'Flipagram'
    }]
  },
  checkboxChange: function (e) {
    var items = this.data.items,
        values = e.detail.value;

    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      items: items
    });
  }
});