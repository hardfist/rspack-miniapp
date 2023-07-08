Page({
  onLoad: function (options) {
    const ctx = tt.createCanvasContext('myCanvas')
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 10)
    ctx.lineTo(100, 100)
    ctx.fill()
    ctx.draw()
  },
});