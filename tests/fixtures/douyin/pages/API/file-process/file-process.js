const app = getApp();
Component({
  data: {
    IsremoveASaveFile: true,
    imageUrl: app.globalData.imageUrl
  },
  properties: {
    saveFile: {
      type: Boolean,
      defalut: false
    },
    getFileInfo: {
      type: Boolean,
      defalut: false,
    },
    getSaveFileList: {
      type: Boolean,
      defalut: false,
    },
    removeASaveFile: {
      type: Boolean,
      defalut: false,
    }
  },
  methods: {
    saveFile() {
      tt.downloadFile({
        url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
        success: res => {
          tt.saveFile({
            tempFilePath: res.tempFilePath,
            success: data => {
              this.toast('保存成功', 'none');
              this.setData({
                'filePath': data.savedFilePath,
                'hasFile': true
              });
            },
            fail: err => {
              this.toast('保存失败，请稍后重试', 'none');
            },
            complete: res => {
              console.log("接口已调用", res)
            }
          });
        },
        fail: err => {
          this.toast('保存失败，请稍后重试', 'none');
        }
      });
    },
    getFileInfo() {
      const filePath = this.getFile('请先保存文件');
      if (!filePath) {
        return;
      }
      tt.getFileInfo({
        filePath,
        digestAlgorithm: 'md5',
        success: data => {
          tt.showModal({
            title: '文件信息',
            content: JSON.stringify(data),
            showCancel: false
          });
        },
        fail: err => {
          this.toast('fail', 'none');
        },
        complete: res => { }
      });
    },
    getSavedFileList() {
      tt.getSavedFileList({
        success: res => {
          tt.showModal({
            title: '文件列表信息',
            content: '目前保存文件数' + res.fileList.length,
            showCancel: false
          });
        },
        fail: err => {
          this.toast('fail', 'none');
        },
        complete: res => { }
      });
    },
    deleteFile() {
      const filePath = this.getFile('无可删除文件');
      if (!filePath) {
        return;
      }
      tt.removeSavedFile({
        filePath,
        success: res => {
          this.setData({
            filePath: '',
            IsremoveASaveFile: false,
            disabled: true
          });
          this.toast('已删除', 'none');
        },
        fail: err => {
          this.toast('操作失败，请稍后重试', 'none');
        },
        complete: res => { }
      });
    },
    getFile(errTips) {
      const filePath = this.data.filePath;
      if (!filePath) {
        this.toast(errTips, 'none');
      }
      return filePath;
    },
    toast(title, icon) {
      tt.showToast({
        title,
        icon
      });
    }
  },
});