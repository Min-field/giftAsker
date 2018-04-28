// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: [
      { url: '../index/index', text: '求礼物主页' }, 
      { url: '../give/give', text: 'B给A打赏页' }, 
      { url: '../giveBySelf/giveBySelf', text: 'A给A打赏页' }, 
      { url: '../complete/complete', text: 'B给A打赏发现A已收到礼物' }, 
      { url: '../getGift/getGift', text: 'A收到礼物' }, 
      { url: '../order/order', text: '具体订单' }, 
    ]
  },

  toUrl(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
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