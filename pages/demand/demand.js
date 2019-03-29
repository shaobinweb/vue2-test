// pages/demand/demand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:"聚成吊顶",
    array: ['安装', '配送', '维修', '测量','配送到家并安装'],
    index: '',
    pageBackgroundColor: '#eee',
    pageBackgroundColorbai: 'rgb(117, 90, 235)',
    pageBackgroundColorblue:'rgb(117, 90, 235)',
    falses:false,
    contens:'',
    goods:false,
    repair:false,
    Commodity :true,
    inputValue:'',
    address:'',
    datas:""
  },
  bindPickerChange: function (e) {
    console.log('picker下拉项发生变化后，下标为：', e.detail.value)
    console.log(this.data.array[e.detail.value] )
    if(this.data.array[e.detail.value]=="配送"){
      this.setData({
        index:e.detail.value,
        goods:!this.data.goods
      })
    }else{
      this.setData({
        goods:false
      })
    }
    if (this.data.array[e.detail.value] == "维修"){
      this.setData({
        index: e.detail.value,
        repair: !this.data.repair,
        Commodity:!this.data.Commodity
      })
    }else{
      this.setData({
        repair:false
      })
    }
    if (this.data.array[e.detail.value] == "配送到家并安装"){
      this.setData({
        index: e.detail.value,
        goods: !this.data.goods
      })
    }else{
      this.setData({
        goods:false
      })
    }
    // if (this.data.array[e.detail.value] === "配送"){
      // this.setData({
        // index: e.detail.value,
        // goods=!this.data.goods
      // })
    // }
  },
  information:function(){
    wx.navigateTo({
      url: '/pages/information/information',
    })
  },
  commodity:function(){
    wx.navigateTo({
      url: '/pages/commodity/commodity',
    })
  },
  commoditys: function () {
    wx.navigateTo({
      url: '/pages/ordercontact/ordercontact',
    })
  },
  myprice:function(){ 
    var bgColor = this.data.pageBackgroundColorbai;
    var bfcolor = this.data.pageBackgroundColor;
    var boou=true
    this.setData({
      pageBackgroundColor: bgColor,
      pageBackgroundColorblue:bfcolor,
      falses:boou
      // pageBackgroundColorblue:bfcolor,
    });
    // _confirmEvent();
    this.dialog.show();
  },
  myserice:function(){
    var bgColor = this.data.pageBackgroundColor;
    var bfcolor = this.data.pageBackgroundColorblue;
    var boou =false
    this.setData({
      pageBackgroundColor:bfcolor,
      pageBackgroundColorblue: bgColor,
      falses: boou
    });

  },
  _confirmEvent:function(){
    this.dialog.hide()
  },
  requirement:function(){
    wx.navigateTo({
      url: '/pages/requirement/requirement',
    })
  },
  inputs:function(e){
    var v=e.detail.value
    this.setData({
      inputValue: parseFloat(v).toFixed(2)
    })
  },
  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // var content=wx.getStorageSync('datas')
    // this.setData({
    //   contens:content
    // })
    // var that=this
    // wx.getStorage({
    //   key: 'information',
    //   success: function(res) {
    //     console.log(res.data,1111)
    //     this.setData({
    //       address:res.data.perfect
    //     })
    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog")
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (option) {
    // console.log(option.name)
    
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