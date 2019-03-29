// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citys:false,
    backgcolor:"#eee",
    backgcolorgray:"",
    colourless:""
  },
  nouser: function (){
    this.data.citys=true
    var bgColor = this.data.backgcolor == 'rgb(109, 170, 248)' ? '#eee' : 'rgb(109, 170, 248)'
    // this.data.backgcolorgray="#eee"
    // this.data.backgcolor ="rgb(109, 170, 248)"

    this.setData({
      citys:this.data.citys,
      // backgcolor:this.data.backgcolorgray,
      // colourless:this.data.backgcolor
      colourless:bgColor
    })
  },
  yesuser:function(){
    this.data.citys=false
    // this.data.backgcolor ="rgb(109, 170, 248)"
    var bgColor = this.data.backgcolor == 'rgb(109, 170, 248)' ? '#eee' :'rgb(109, 170, 248)'
    this.setData({
      citys:this.data.citys,
      // backgcolor:this.data.backgcolor
      backgcolor:bgColor
    })
  },
  citychoice:function(){
    wx.navigateTo({
      url: '/pages/citychoice/citychoice',
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