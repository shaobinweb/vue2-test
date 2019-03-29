// pages/requirement/requirement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:'',
    content:0,
    dateTime:''
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  eventchanges:function(e){
    // console.log(e.detail.value)
    var cont=e.detail.value.length;
    this.setData({
      content:cont
    })
    
  },
  bindDateChange:function(e){
    var b=e.detail.value
    this.setData({
      dateTime:b
    })
  },
  Submission:function(){
    if(this.data.dateTime===''){
      this.aaa.show()
      return
    }

    wx.navigateBack({
      url: '/pages/demand/demand'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
  */
  onShow: function(){
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