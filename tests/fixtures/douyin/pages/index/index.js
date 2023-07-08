const newClassName = 'full-screen';
const defaultClassName = 'default-screen';
const DIFFX = 80;
const DIFFY = 100;
// import { data } from './data.js';
const app = getApp();

function isSupportNative (version) {
  return Number(version.split('.')[0]) >= 8
}

Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    data: app.globalData.data,
    swiperList: [{
      swpClass: "small-left",
      screenClass: '',
    }, {
      swpClass: "small-center",
      screenClass: '',
    }, {
      swpClass: "small-right",
      screenClass: '',
    }],
    current: 1,
    prevCurrent: 1,
    tabs: [
      {
        icon: '/image/tab-icon/extend-icon.png',
        select: '/image/tab-icon/select-extend-icon.png',
        text: '扩展能力',
      },
      {
        icon: '/image/tab-icon/api-icon.png',
        select: '/image/tab-icon/select-api-icon.png',
        text: '组件',
      },
      {
        icon: '/image/tab-icon/interface-icon.png',
        select: '/image/tab-icon/select-interface-icon.png',
        text: '接口',
      }
    ],
    screen: 'small',
    isIos: false,
    switchBig: false,
    scrollTop: 0,
    system: '',
  },
  onLoad(ops) {
    if (ops.view) {
      this.setData({
        current: 2,
        screen: 'big',
        view: ops.view,
        [`data[2].list[10].open`]: true
      })
    }
    if(ops.native) {
      this.switchCard(0);
    }
    const system = tt.getSystemInfoSync();
    this.setData({
      isIos: system.system.toLowerCase().includes('ios'),
      system,
    })
  },
  touchstart(e) {
    let {
      pageX,
      pageY
    } = e.changedTouches[0];
    this.pageX = pageX;
    this.pageY = pageY;
  },
  touchmove(e) {
  },
  touchend(e) {
    let {
      pageX,
      pageY
    } = e.changedTouches[0];
    let diffX = pageX - this.pageX;
    let diffY = pageY - this.pageY;
    // 斜着滑动以X为主
    if (Math.abs(diffX) >= DIFFX) {
      this.moveCard(diffX);
    }
    if ((diffY >= DIFFY || diffY < DIFFY / 2) && Math.abs(diffX) < DIFFX) {
      this.scaleCard(diffY);
    }
  },
  moveCard(diffX) {
    let { swiperList: list } = this.data;
    let { current } = this.data;
    let max = list.length;
    if (diffX > DIFFX) {
      if (current === 0) {
        return;
      }
      current--;
    }
    if (diffX < -DIFFX) {
      if (current === max - 1) {
        return;
      }
      current++;
    }
    this.switchCard(current);
  },
  scrollFlag: true,
  bindscroll(e) {
    let top = e.detail.scrollTop;
    let flag = true;
    if (top > 5) {
      flag = false;
    }
    this.scrollFlag = flag;
  },
  async scaleCard(diffY) {
    let idx = this.data.current;
    let list = this.data.swiperList;
    let className = this.data.swiperList[idx].screenClass;
    if (diffY > DIFFY && this.scrollFlag) {
      if (this.data.screen === 'small') {
        return;
      }
      let reg = new RegExp(newClassName);
      if (this.data.system.system !== 'iOS 12.1.2') {
        className = className.replace(reg, defaultClassName);
      }
      this.setData({
        scrollTop: 0
      }, () => {
        this.initScall(list, idx, className);
      })

    }
    if (diffY < -DIFFY) {
      if (this.data.screen === 'big') {
        return;
      }
      if (this.data.screen === 'big') {
        let reg = new RegExp(defaultClassName);
        className = className.replace(reg, newClassName);
      } else {
        className = `${className} ${newClassName}`;
      }
      let swiperList = this.backClassName(idx);
      swiperList = swiperList.map((item, index) => {
        if (idx === index) {
          item.screenClass = className;
        }
        return item;
      })
      this.setData({
        swiperList,
        screen: 'big'
      })
    }
  },
  initScall(list, idx, className) {
    this.setData({
      [`swiperList[${idx}].screenClass`]: className,
      screen: 'small',
      switchBig: false,
    }, () => {
      setTimeout(() => {
        this.setData({
          swiperList: list.map((item, index) => {
            item.screenClass = '';
            return item;
          }),
        })
      }, 300)
    })
  },
  switchTab(e) {
    let { index } = e.currentTarget.dataset;
    this.switchCard(index);
  },
  switchCard(idx) {
    let prevCurrent = this.data.current;
    let list = this.backClassName(idx);
    let { screen } = this.data;
    let switchBig = false;
    if (screen === 'big') {
      switchBig = true;
    }
    this.setData({
      swiperList: list.map(item => {
        item.screenClass = '';
        return item;
      }),
      current: idx,
      prevCurrent,
      switchBig
    })
    this.scrollFlag = true;
  },
  backClassName(idx) {
    let list = this.data.swiperList;
    let max = list.length;
    let prev = list[idx - 1]; // 前一个
    let next = list[idx + 1]; // 后一个
    let curView = list[idx]; // 当前
    if (prev) { // 如果当前的前面有
      if (next) { // 当前的后面有
        next.swpClass = "small-right";
        next.bigClass = "big-right";
      }
      prev.swpClass = "small-left";
      prev.bigClass = "big-left";
      curView.swpClass = "small-center";
      curView.bigClass = this.backBigCenter(idx, this.data.current);
      for (let i = 0; i < idx; i++) { // 当前前一个的前面所有
        list[i].swpClass = 'small-leftNo'
        list[i].bigClass = 'big-leftNo'
      }
    }
    if (next) {// 如果当前的后面有
      if (prev) {// 当前的前面有
        prev.swpClass = "small-left";
        prev.bigClass = "big-left";
      }
      curView.swpClass = "small-center";
      curView.bigClass = this.backBigCenter(idx, this.data.current);
      next.swpClass = "small-right";
      next.bigClass = "big-right";
      for (let i = (idx + 2); i < max; i++) {// 当前后一个的后面所有
        list[i].swpClass = 'small-rightNo';
        list[i].bigClass = 'big-rightNo'
      }
    } else {
      prev.swpClass = "small-left";
      curView.swpClass = "small-center";
      prev.bigClass = "big-left";
      curView.bigClass = this.backBigCenter(idx, this.data.current);
    }
    return list;
  },
  backBigCenter(idx, prevCurrent) {
    if (idx === 1 && prevCurrent === 0) {
      return 'big-center';
    }
    if (idx > prevCurrent) {
      return 'big-center-left';
    }
    if (idx < prevCurrent) {
      return 'big-center-right';
    }
  },
  toRouter(e) {
    let { current, system } = this.data;
    let { path, view } = e.currentTarget.dataset;
    if (view && current === 2) {
      app.globalData.view = view;
      tt.switchTab({
        url: '/pages/API/index'
      });
      return;
    }
    if (!path) {
      return;
    }
    if (current < 2) {
      path = `/pages/component/${path}`;
    }
    if (current === 2) {
      path = `/pages/API/${path}`;
    }
    tt.navigateTo({
      url: path
    });
  },
  async showChildren(e) {
    let { index, num, open } = e.currentTarget.dataset;
    let list = this.data.data;
    if (open) {
      this.setData({
        [`data[${index}].list[${num}].open`]: false
      })
      return;
    }
    if (!open) {
      list = await Promise.all(list.map(async item => {
        return item;
      }))
    }
    list[index].list[num].open = !open;
    this.setData({
      data: list
    })

  },
  initList(list) {
    return new Promise((resolve, reject) => {
      const arr = list.map(item => {
        item.open = false;
        return list;
      })
      resolve(arr[0]);
    })
  },
})