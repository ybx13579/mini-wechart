//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Ice Yang',
    userInfo: {},
    indexInfo:{
      name1:'Name',
      img1:'../../img/a.jpg',
      name2: '短句',
      img2: '../../img/b.jpg',
      name3: '背景',
      img3: '../../img/c.jpg',
      name4: 'boy',
      img4: '../../img/d.jpg',
      name5: 'girl',
      img5: '../../img/e.jpg',
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  internetName: function () {
    wx.navigateTo({
      url: '../internetName/internetName'
    })
  },
  signature: function () {
    wx.navigateTo({
      url: '../signature/signature'
    })
  },
  bg: function () {
    wx.navigateTo({
      url: '../bg/bg'
    })
  },
  boy: function () {
    wx.navigateTo({
      url: '../boy/boy'
    })
  },
  girl: function () {
    wx.navigateTo({
      url: '../girl/girl'
    })
  },




  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
