// pages/ordercontact/ordercontact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    inputPhone:''
  },
  contacts:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  telephone:function(e){
    this.setData({
      inputPhone: e.detail.value
    })
    
  },
  contact:function(e){
   
    
    if(this.data.inputPhone===''||this.data.inputValue===''){
      return
    }
    // if(this.data.inputPhone.length<11||this.data.inputPhone>11){
    if (!(/^1[34578]\d{9}$/.test(this.data.inputPhone))){
      this.format.show()
      var that=this
      setTimeout(function(){
        that.format.hide()
      },1000)
      return
    }
    if (!(/^1[34578]\d{9}$/.test(this.data.inputPhone))){
      // console.log(1111111)
      this.bbb.show()
      var that=this
      setTimeout(function(){
        that.bbb.hide()
      },1000) 
      return
    } 
    
    // }
    var datas = [this.data.inputValue,this.data.inputPhone]
    var  pages=getCurrentPages();
    var prevPage=pages[pages.length-2]
    prevPage.setData({
      datas:datas
    })
    wx.navigateBack({
      
    })
    console.log(datas)
    // wx.setStorageSync('datas', datas)   
    //   wx.navigateBack()  
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
    this.bbb = this.selectComponent("#framedId")   
    this.format = this.selectComponent("#format")
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