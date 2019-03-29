Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '',
    content: 0,
    dateTime: '',
    booloans:false,
    srcs: "../../images/xiangji.png",
  },
  changes: function (e) {
    var a = e.detail.value
    this.setData({
      booloans: a
    })
  },
  gotoShow: function () {
    var _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        _this.setData({
          srcs: res.tempFilePaths
        })
      },
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  eventchanges: function (e) {
    // console.log(e.detail.value)
    var cont = e.detail.value.length;
    var ci=e.detail.value;
    // console.log(ci)
    this.setData({
      content: cont,
      dateTime:ci
    })

  },
  bindDateChange: function (e) {
    var b = e.detail.value
    this.setData({
      dateTime: b
    })
  },
  Submissions: function () {
    console.log(this.data.dateTime)
    var dateTimes=this.data.dateTime
    var pages=getCurrentPages()
    var prevPage = pages[pages.length - 2]
    prevPage.setData({
      dateTimes:dateTimes
    })
    wx.navigateBack({
      
    })
    // wx.setStorageSync("dateTimes", dateTimes)
    // wx.navigateBack({
    //   url:"/pages/hydropower/hydropower"
    // })
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