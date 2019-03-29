// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId:1,
    order:[{
      title:"待雇佣",
      id:1
  },
    {
      title: "服务中",
      id: 2
    },
    {
      title: "待验收",
      id: 3
    }, {
      title: "交易成功",
      id: 4
    },
    {
      title: "交易失败",
      id: 5
    },
    {
      title: "已取消",
      id:6
    },
    ]
  },
  ClickScroll:function(e){
    var id=e.currentTarget.dataset.id
    console.log(id)
    this.data.currentId=id
    this.setData({
      currentId:id
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