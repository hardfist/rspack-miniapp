const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    immediateChange: true,
    value: [9999, 1, 1],
    startValue: undefined,
    chnageValue: undefined,
    endValue: undefined,
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      // value: val,
      changeValue: val,
    })
  },
  bindStart(e) {
    this.setData({
      startValue: e.detail.value,
    })
  },
  bindEnd(e) {
    this.setData({
      endValue: e.detail.value,
    })
  },
  toggleImmed() {
    this.setData({
      immediateChange: !this.data.immediateChange,
    })
  },
})