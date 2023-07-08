const app = getApp();
const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Component({
  data: {
    imageUrl: app.globalData.imageUrl
  },
  attached() {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
      url,
      success: res => {
        this.data.tempFilePath = res.tempFilePath;
        tt.showToast({
          title: '下载临时文件成功',
          icon: 'none'
        });
      },
      fail: err => {
        tt.showToast({
          title: '保存失败，请稍后重试',
          icon: 'none'
        });
      },
      complete: res => { }
    });
  },

  properties: {},
  methods: {
    access() {
      this.fs.access({
        path: this.data.tempFilePath,
        success: res => {
          tt.showModal({
            title: '文件存在',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('access success', res);
        },
        fail: err => {
          tt.showModal({
            title: '文件不存在',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('access fail', err);
        },
        complete: res => { }
      });
    },

    copyFile() {
      this.fs.copyFile({
        srcPath: this.data.tempFilePath,
        destPath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
        success: res => {
          tt.showModal({
            title: '拷贝成功',
            content: '请点击下方获取用户列表按钮查看复制路径',
            showCancel: false
          });
          console.log('copyFile success', res);
        },
        fail: err => {
          tt.showModal({
            title: '拷贝失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('copyFile fail', err);
        },
        complete: res => { }
      });
    },

    getFileInfo() {
      this.fs.getFileInfo({
        filePath: this.data.tempFilePath,
        success: res => {
          tt.showModal({
            title: '文件信息',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('getFileInfo success', res);
        },
        fail: err => {
          console.log('getFileInfo fail', err);
        },
        complete: res => { }
      });
    },

    getSavedFileList() {
      this.fs.getSavedFileList({
        success: res => {
          console.log('res::', res);
          tt.showModal({
            title: '文件列表',
            content: JSON.stringify(res.fileList),
            showCancel: false
          });
          console.log('getSavedFileList success', res);
        },
        fail: err => {
          console.log('getSavedFileList fail', err);
        },
        complete: res => { }
      });
    },

    mkdir() {
      this.fs.mkdir({
        dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
        success: res => {
          tt.showModal({
            title: '创建成功',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('mkdir success', res);
        },
        fail: err => {
          tt.showModal({
            title: '创建失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('mkdir fail', err);
        },
        complete: res => { }
      });
    },

    readdir() {
      this.fs.readdir({
        dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
        success: res => {
          tt.showModal({
            title: '读取成功',
            content: `${tt.env.USER_DATA_PATH}/mkdir` + '目录下文件有：' + JSON.stringify(res.files),
            showCancel: false
          });
          console.log('readdir success', res);
        },
        fail: err => {
          console.log('readdir fail', err);
          tt.showModal({
            title: '读取失败',
            content: JSON.stringify(err),
            showCancel: false
          });
        },
        complete: res => { }
      });
    },

    readFile() {
      tt.showModal({
        title: '文件地址',
        content: this.data.tempFilePath,
        showCancel: false
      });
      this.fs.readFile({
        filePath: this.data.tempFilePath,
        encoding: 'hex',
        success: res => {
          tt.showModal({
            title: '读取本地文件内容',
            content: res.data,
            showCancel: false
          });
          console.log('readFile success', res);
        },
        fail: err => {
          console.log('readFile fail', err);
          tt.showModal({
            title: '读取本地文件内容',
            content: JSON.stringify(err),
            showCancel: false
          });
        },
        complete: res => { }
      });
    },

    removeSavedFile() {
      this.fs.removeSavedFile({
        filePath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
        encoding: 'utf8',
        success: res => {
          tt.showModal({
            title: '删除成功',
            content: JSON.stringify(res),
            showCancel: false
          });
        },
        fail: err => {
          tt.showModal({
            title: '删除失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('removeSavedFile fail', err);
        },
        complete: res => { }
      });
    },

    rename() {
      this.fs.rename({
        oldPath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
        newPath: `${tt.env.USER_DATA_PATH}/demo.txt`,
        encoding: 'utf8',
        success: res => {
          tt.showModal({
            title: '重命名成功',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('rename success', res);
        },
        fail: err => {
          tt.showModal({
            title: '重命名失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('rename fail', err);
        },
        complete: res => { }
      });
    },

    rmdir() {
      this.fs.rmdir({
        dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
        success: res => {
          tt.showModal({
            title: '删除成功',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('rmdir success', res);
        },
        fail: err => {
          tt.showModal({
            title: '删除失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('rmdir fail', err);
        },
        complete: res => { }
      });
    },

    saveFile() {
      this.fs.saveFile({
        tempFilePath: this.data.tempFilePath,
        // 仅为示例，实际上请传真实临时路径地址，如 tt.downloadFile 的 tempFilePath 返回参数
        filePath: `${tt.env.USER_DATA_PATH}/mkdir`,
        success: res => {
          console.log('saveFile success', res);
          tt.showModal({
            title:"保存临时文件成功",
            content:"文件路径为：" + res.savedFilePath,
            showCancel: false
          });
        },
        fail: err => {
          console.log('saveFile fail', err);
        },
        complete: res => { }
      });
    },

    stat() {
      this.fs.stat({
        path: this.data.tempFilePath,
        success: res => {
          tt.showModal({
            title: 'stat获取成功',
            content: JSON.stringify(res.stats),
            showCancel: false
          });
          console.log('stat success', res);
        },
        fail: err => {
          tt.showModal({
            title: 'stat获取失败',
            content: JSON.stringify(err),
            showCancel: false
          });
          console.log('stat fail', err);
        },
        complete: res => { }
      });
    },

    unlink() {
      this.fs.unlink({
        filePath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
        success: res => {
          tt.showModal({
            title: '已删除',
            content: JSON.stringify(res),
            showCancel: false
          });
          console.log('unlink success', res);
        },
        fail: err => {
          tt.showModal({
            title: '删除失败',
            content: JSON.stringify(err.errMsg),
            showCancel: false
          });
          console.log('unlink fail', err);
        },
        complete: res => { }
      });
    },

    unzip() {
      this.fs.unzip({
        ziptempFilePath: `${tt.env.USER_DATA_PATH}/demo/a.zip`,
        targetPath: `${tt.env.USER_DATA_PATH}/demo/b`,
        success: res => {
          console.log('unzip success', res);
          tt.showModal({
            title:"解压文件成功",
            showCancel:false
          });
        },
        fail: err => {
          console.log('unzip fail', err);
          tt.showModal({
            title:"解压文件失败",
            content:"errMsg:" + err.errMsg,
            showCancel:false
          });
        },
        complete: res => { }
      });
    },

    writeFile() {
      this.fs.writeFile({
        filePath: this.data.tempFilePath,
        data: 'writeFile',
        success: res => {
          console.log('writeFile success', res);
          tt.showModal({
            title:"写文件成功",
            showCancel:false
          });
        },
        fail: err => {
          console.log('writeFile fail', err);
          tt.showModal({
            title:"写文件失败",
            content:"errMsg:" + err.errMsg,
            showCancel:false
          });
        },
        complete: res => { }
      });
    }
  }
});