Page({
    data: {
        imageUrl: 'logo.png',
        url: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
        list: {
            zoomMode: [{
                    mode: "scaleToFill",
                    desc: "不保持比例，拉伸填满",
                    class: "image aspect-fit"
                },
                {
                    mode: "aspectFit",
                    desc: "保持比例，完整显示",
                    class: "image aspect-fit"
                },
                {
                    mode: "aspectFill",
                    desc: "保持比例，短边填满，长边截取",
                    class: "image aspect-fit"
                },
                {
                    mode: "widthFix",
                    desc: "宽度不变，高度自动，保持原图比例",
                    class: "image width-fix"
                },
                {
                    mode: "heightFix",
                    desc: "高度不变，宽度自动，保持原图比例",
                    class: "image height-fix"
                }
            ],
            clippingMode: [{
                    mode: "top",
                    desc: "只显示图片的顶部区域",
                    class: "image width-fix"
                },
                {
                    mode: "bottom",
                    desc: "只显示图片的底部区域",
                    class: "image width-fix"
                },
                {
                    mode: "center",
                    desc: "只显示图片的中间区域",
                    class: "image width-fix"
                },
                {
                    mode: "left",
                    desc: "只显示图片的左边区域",
                    class: "image left-fix"
                },
                {
                    mode: "right",
                    desc: "只显示图片的右边区域",
                    class: "image left-fix"
                },
                {
                    mode: "top left",
                    desc: "只显示图片的左上边区域",
                    class: "image two-direction-fix"
                },
                {
                    mode: "top right",
                    desc: "只显示图片的右上边区域",
                    class: "image two-direction-fix"
                },
                {
                    mode: "bottom left",
                    desc: "只显示图片的左下边区域",
                    class: "image two-direction-fix"
                },
                {
                    mode: "bottom right",
                    desc: "只显示图片的右下边区域",
                    class: "image two-direction-fix"
                }
            ]
        }

    },
    binderror(err) {
        console.log('图片加载失败', err);
    },
    bindload(e) {
        console.log('图片加载成功', e);
    }
});