// pages/hydropower/hydropower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:"瓦工",
    data:"",
    contens:'',
    contentss:""
  },
  bindTimeChange(e) {
    this.setData({
      data: e.detail.value
    })
  },
  chengshi:function(){
    wx.navigateTo({
      url: '/pages/citychoice/citychoice',
    })
  },
  Requirements:function(){
    wx.navigateTo({
      url: '/pages/requirementTwo/requirementTwo',
    })
  },
  contacts:function(e){
    wx.navigateTo({
      url: '/pages/ordercontact/ordercontact',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var content = wx.getStorageSync('datas')
    // var contentss = wx.getStorageSync('dateTimes')
    // this.setData({
    //   contens: content,
    //   contentss: contentss
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})