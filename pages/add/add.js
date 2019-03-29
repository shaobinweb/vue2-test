// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcs:"../../images/xiangji.png",
    booloans:false,
    chooseSize: false,
    animationData: {},
    hide:false,
    show:true,
    backgr:"#eee",
    backgrs:"#fff",
    content:[{
      title: '木门',
      id: 1,
    },{
      title: "门套",
      id: 2,
    }],
    titleItem: [{
      id: 3,
      name: "复合门"
      },
      {
      id: 4,
      name: "实体门"
      },
      {
      id: 5,
      name: "模压门"
      },
      {
      id: 6,
      name: "其它门"
      },
      {
      id: 7,
      name: "原木门"
      },
      {
      id: 8,
      name: "单包门套"
      }, 
      {
      id: 9,
      name: "双包门套"
      }]
},
  
  clickHide:function(){
    var hides=true
    var shows = false
    // console.log(shows)
    var hides=this.data.backgr
    var bai=this.data.backgrs
    this.setData({
      hide:hides,
      show:shows,
      backgrs:hides,
      backgr:bai
    })
  },
  clickShow:function(){
    var hides = false
    var shows = true 
    var hei =  this.data.backgrs 
    var bai = this.data.backgr
    this.setData({
      hide: hides,
      show: shows,
      backgr:hei,
      backgrs:bai
    })
  },
  // 弹框显示
  chooseSezi:function(e){
    var that=this
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData:animation.export(),
      chooseSize:true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  // 弹框隐藏
  hideModal: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export()

    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  },
  changes:function(e){
    var a=e.detail.value
    this.setData({
      booloans:a
    })
  },
  gotoShow:function(){
    var _this=this
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        _this.setData({
          srcs:res.tempFilePaths
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const that = this
    // var arr1 = 
    // var subjectArray = [],
    // for (var idx in arr1) {
    //   var subject = arr1[idx]
    //   var temp = {
    //     subjectName: subject.title,
    //     professionArray: subject.titleItem,
    //   }
    //   subjectArray.push(temp)
    // }
    // that.setData({
    //   subjectArray: subjectArray
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

  },
})