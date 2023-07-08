const example = require('./example.js');

Component({
  data: {},
  lifetimes: {
    attached() {
      const methods = Object.keys(example);
      this.setData({
        methods
      });
      this.context = tt.createCanvasContext('canvas');
      methods.forEach(method => {
        this[method] = function () {
          example[method](this.context);
          this.context.draw();
        };
      });
    }
  },
  properties: {},
  methods: {
    toTempFilePath() {
      tt.canvasToTempFilePath({
        canvasId: 'canvas',
        success(res) {
          tt.showToast({
            title: '成功保存图片到临时文件夹'
          });
        },
        fail(res) {
          console.log(res);
        },
        complete(res) {
          console.log('complete执行了', res)
        }
      });
    }

  }
});