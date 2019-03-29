Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalMsg: {
      type: String,
      value: ' ',
    },
    modalTitle: {
      type: String,
      value: ' ',
    },
    confirmText: {
      type: String,
      value: '我知道了'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.setData({
        showDialog: !this.data.showDialog
      })
    },
    hide() {
      this.setData({
        showDialog: !this.data.showDialog
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})