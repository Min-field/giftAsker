
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  attached() {
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
  }, 
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
