const app = getApp();
let nativeCanvas2d, nativeCanvas2dCtx, nativeCanvasGl, nativeCanvasGlCtx;

Page({
  data: {
    width: 100,
    id: "123",
  },

  onReady() {
    this.drawWeb(this.data.id);
    this.drawNative("#canvas_type_2d", "2d");
    this.drawNative("#canvas_type_webgl", "webgl");
  },

  drawWeb(id) {
    const ctx = tt.createCanvasContext(id);
    ctx.beginPath();
    ctx.arc(20, 20, 10, 0, Math.PI * 2);
    ctx.rect(10, 30, 20, 15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(17, 18, 2, 0, Math.PI * 2);
    ctx.arc(23, 18, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = 3;
    ctx.moveTo(18, 25);
    ctx.quadraticCurveTo(23, 22, 26, 23);
    ctx.stroke();
    ctx.restore();
    ctx.draw();
  },

  drawNative(id, type) {
    tt.createSelectorQuery()
      .select(id)
      .node()
      .exec((res) => {
        const canvas = res[0].node;
        const ctx = canvas.getContext(type);
        this.drawByType(ctx, type, canvas);
      });
  },

  drawByType(ctx, type, canvas) {
    if (type === "2d") {
      nativeCanvas2d = canvas;
      nativeCanvas2dCtx = ctx;
      this.drawNative2D(0, 0, 50, 50);
      this.drawNative2D(50, 50, 50, 50);
    } else {
      nativeCanvasGl = canvas;
      nativeCanvasGlCtx = ctx;
      this.drawNativeGL(1, 0, 1, 1);
    }
  },

  drawNative2D(x, y, width, height) {
    nativeCanvas2d.requestAnimationFrame(function () {
      nativeCanvas2dCtx.fillStyle = "red";
      nativeCanvas2dCtx.fillRect(x, y, width, height);
    });
  },

  drawNativeGL(r, g, b, a) {
    nativeCanvasGl.requestAnimationFrame(function () {
      nativeCanvasGlCtx.clearColor(r, g, b, a);
      nativeCanvasGlCtx.clear(nativeCanvasGlCtx.COLOR_BUFFER_BIT);
    });
  },

  testBindtouchstart(e) {
    console.log("--- touchstart", e);
  },

  testBindtouchmove(e) {
    console.log("--- touchmove", e);
  },

  testBindtouchend(e) {
    console.log("--- touchend", e);
  },

  testBindtouchcancel(e) {
    console.log("--- touchcancel", e);
  },

  testBinderror(err) {
    console.log("==== canvas err", err);
  },
});