// pages/girl/girl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
  },
  onLoad: function () {
    this.setData({
      array: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528710079827&di=0ae73caa80e1bd7c89dbaec6c26faa4a&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3323175609%2C2698103712%26fm%3D214%26gp%3D0.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528710292004&di=15de0556eb1cb4602003e3039659f664&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F17%2F20160817140229_Hz8sM.jpeg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3954027069,1796103335&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=961880238,2595491076&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3428044287,32038550&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2693523469,398359975&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2682832870,1174956523&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=549340995,2232648667&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1039015191,1566414611&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1046310165,4031860519&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1020618954,1973889321&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1875423588,1908614134&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3799402572,602554494&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2797461423,2464748191&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3735502095,15628763&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3009524060,837568363&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3880527679,2143601360&fm=27&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2582238172,2769619856&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2543643491,1316947512&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2327974346,3716902723&fm=27&gp=0.jpg", "http://img5.imgtn.bdimg.com/it/u=2149432262,280700157&fm=27&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=282428436,3082187676&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=732279816,2032420219&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=133769005,3777083443&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1116748643,3737617198&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3554581594,3268409853&fm=27&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2145714315,2972138154&fm=27&gp=0.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2488015599,4064940387&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3907478320,852024201&fm=27&gp=0.jpg"]
    })

  },
  // 图片预览
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,//当前显示图片的http链接
      urls: this.data.array,
    })
  },
})