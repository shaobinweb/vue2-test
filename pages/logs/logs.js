//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // logs: []
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  forget:function(){
    wx.navigateTo({
      url: '/pages/forget/forget',
    })
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
