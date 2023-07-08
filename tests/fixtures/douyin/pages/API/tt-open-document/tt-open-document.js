Page({
    openDocument() {
        tt.downloadFile({
            // 仅为示例 url，并非真实地址
            url: "http://example.com/somefile.pdf",
            success(res) {
                const filePath = res.tempFilePath;
                tt.openDocument({
                    filePath: filePath,
                    success(res) {
                        console.log("打开文档成功", res);
                    },
                    fail(res) {
                        console.log("打开文档失败", res);
                        tt.showModal({
                            title: '打开文档失败',
                            content: JSON.stringify(res.errMsg),
                            showCancel: false
                        });
                    },

                });
            },
        });
    }
})