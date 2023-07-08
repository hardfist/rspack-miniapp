const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
    data: {
        tempFilePath: ''
    },
    onLoad: function(options) {
        this.fs = tt.getFileSystemManager();
        tt.downloadFile({
            url: url,
            success: res => {
                this.setData({
                    tempFilePath: res.tempFilePath
                })
                tt.showToast({
                    title: '下载临时文件成功',
                    icon: 'none'
                });
            },
            fail: err => {
                tt.showToast({
                    title: '文件下载失败，请稍后重试',
                    icon: 'none'
                });
            },
            complete: res => {
                console.log('downloadFile complete', res);
            }
        });
    },
    checkFile(fileType) {
        const type = fileType.currentTarget.dataset.item
        let path = "";
        switch (type) {
            case "temp": //临时路径
                path = this.data.tempFilePath;
                break;
            case "user": //用户路径 测试非真实路径
                path = 'ttfile://user/some-path';
                break;
            case "page": // 包内路径
                path = 'app.js';
        }
        try {
          this.fs.accessSync(path);
          console.log(`文件存在`);
          tt.showModal({
            title: '文件存在',
            content: '文件路径：' + path,
            showCancel: false
        });
        } catch (err) {
          console.log(`文件不存在: `,err);
          tt.showModal({
              title: '文件不存在',
              content: '文件路径：' + path,
              showCancel: false
          });
        }
    },
})