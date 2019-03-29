// component/frameds/frameds.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phoneNmbern:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialogs:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(){
      this.setData({
        showDialogs: !this.data.showDialogs
      })
    },
    hide(){
      this.setData({
        showDialogs: !this.data.showDialogs
      })
    }, 
  }
})
