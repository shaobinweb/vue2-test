//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200,
    currentAddress: "定位中...",
    loading: true,
    
    motto: '点击我吧',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text:"into wo",
    userSex:"",
    list:[{
        id:1,
        name:"聚成吊顶",
        url:'../../images/icons/men.png'
      },
      {
        id: 2,
        name: "橱/衣柜",
        url: '../../images/icons/chuanglian.png'
      },
      {
        id:3,
        name: "木门",
        url: '../../images/icons/mumen.png'
      },
      {
        id: 4,
        name: "地板",
        url: '../../images/icons/diban.png'
      },
      {
        id: 5,
        name: "洁具卫浴",
        url: '../../images/icons/weiyu.png  '
      },
      {
        id: 6,
        name: "窗帘",
        url: '../../images/icons/chuanglian.png'
      },
      {
        id: 7,
        name: "家具",
        url: '../../images/icons/jiaju.png'
      },
      {
        id: 8,
        name: "灯具",
        url: '../../images/icons/dengju2.png'
      },
      {
        id: 9,
        name: "家电",
        url: '../../images/icons/jiadian.png    '
      },
      {
        id: 10,
        name: "移门",
        url: '../../images/icons/yigui.png'
      },
      {
        id: 11,
        name: "锁/智能锁",
        url: '../../images/icons/suo.png'
      },
      {
        id: 12,
        name: "地毯",
        url: '../../images/icons/ditan.png'
      },
      {
        id: 13,
        name: "晾衣架",
        url: '../../images/icons/liangyijia.png'
      },
      {
        id: 14,
        name: "净水器",
        url: '../../images/icons/jingshuiqi.png'
      },
      {
        id: 15,
        name: "地暖",
        url: '../../images/icons/dinuan.png'
      },
      {
        id:16,
        name:"门",
        url:"../../images/icons/yimen.png"
      },
      ],
    falsedata:[{
      title:"遵义市刘女士发布的地板订单1",
      id:1
    },
    {
      title: "遵义市刘女士发布的地板订单2",
      id: 2
    },
    {
      title: "遵义市刘女士发布的地板订单3",
      id: 3
    }],
    picture: [{
      id: 1,
      name: "水电",
      url: '../../images/icon_1/shuidiangong.png'
      },
      {
        id: 2,
        name: "瓦工",
        url: '../../images/icon_1/wagong.png'
      },
      {
        id: 3,
        name: "木工",
        url: '../../images/icon_1/mugong.png'
      },
      {
        id: 4,
        name: "油漆工",
        url: '../../images/icon_1/youqigong.png'
      },
      {
        id: 5,
        name: "拆除工",
        url: '../../images/icon_1/chaichugongcheng.png  '
      },
      {
        id: 6,
        name: "钻孔",
        url: '../../images/icon_1/zuankong.png'
      },
      {
        id: 7,
        name: "美缝",
        url: '../../images/icon_1/cizhuanmeifeng.png'
      },
      {
        id: 8,
        name: "开槽",
        url: '../../images/icon_1/zuankong.png'
      },
      {
        id: 9,
        name: "力工",
        url: '../../images/icon_1/gongren.png'
      },
      {
        id: 10,
        name: "保洁",
        url: '../../images/icon_1/baojie.png'
      },]
    
    },
  Citys:function(){
    wx.navigateTo({
      url: '/pages/hydropower/hydropower',
    })
  },
 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面跳转
  optionJump: function (e) {
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/demand/demand',
    })
  },
  onLoad: function (options) {
    console.log(wx.getAccountInfoSync())
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    if(options.scene){
      var scene=decodeURIComponent(options.scene);
        console.log("scene"+scene);    
    } 
  },
  searchs(e){
    wx.navigateTo({
      url: '/pages/searchsss/search',
    })
  },
  masters(e){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function(){
      wx.navigateTo({
        url: '/pages/master/master',
      })
      wx.hideLoading()
    },1000)
    
  },
  service(e) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function(){
      wx.navigateTo({
        url: '/pages/service/service',
      })
      wx.hideLoading()
    },1000)
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  autoScroll: function (that) {
    var interval = setInterval(function () {
      let height = that.data.winnersbox.length * that.data.liheight;
      if (that.data.marqueeDistance == height - 120) {
        that.setData({
          marqueeDistance: 0
        })
        return;
      }
      if (that.data.marqueeDistance < height) {
        that.setData({
          maxscrollheight: height,//保存最大的高度
          marqueeDistance: that.data.marqueeDistance + 40,
        })
      } else {
        that.setData({
          marqueeDistance: 0
        })
        clearInterval(interval);
        that.autoScroll();
      }
    }, 3000)
  },
  login:function(){
    wx.login({
      success: function (res) {
        console.log(res.code)
        //发送请求
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=APPSECRET&js_code=CODE&grant_type=authorization_code', 
          data: { code: res.code },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res.data,1111)
          }
        })
      }
    })
  }
})
