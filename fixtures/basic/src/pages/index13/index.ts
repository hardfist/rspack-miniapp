

Page<{
  SDKVersion?: string,
  listSource?: any[],
  tagData?: any[],
  useComponent? :boolean,
  useComponent2? :boolean,
}>({
  data: {
    SDKVersion: '1000px',
    listSource: [
      { name: 'A', content: 'This is A' },
      { name: 'B', content: 'This is B' },
      { name: 'C', content: 'This is C' },
      { name: 'D', content: 'This is D' },
    ],
    tagData: [
      { date: '2020-02-14', tag: '颜色 1', tagColor: 1 },
      { date: '2020-02-28', tag: '公积金', tagColor: 2 },
      { date: '2020-02-24', tag: '颜色 3', tagColor: 3 },
      { date: '2020-02-18', tag: '颜色 4', tagColor: 4 },
      { date: '2020-02-4', tag: '还房贷', tagColor: 5 },
      { date: '2020-02-10', tag: '公积金', disable: true },
    ],
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    const getDate = new Date();
    const getYear = getDate.getFullYear();
    const getMonth = getDate.getMonth();
    let m = `${getMonth + 1}`;
    if (m.length === 1) {
      m = '0' + m;
    }
    this.setData({
      tagData: [
        { date: getYear + '-' + m + '-14', tag: '颜色 1', tagColor: 1 },
        { date: getYear + '-' + m + '-28', tag: '公积金', tagColor: 2 },
        { date: getYear + '-' + m + '-24', tag: '颜色 3', tagColor: 3 },
        { date: getYear + '-' + m + '-18', tag: '颜色 4', tagColor: 4 },
        { date: getYear + '-' + m + '-4', tag: '还房贷', tagColor: 5 },
        { date: getYear + '-' + m + '-10', tag: '公积金', disable: true },
      ],
    });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    this.setData({
      SDKVersion: my.SDKVersion,
    })
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});