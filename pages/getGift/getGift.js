// pages/getGift/getGift.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [
      { name: 'name', give: 10 },
      { name: 'name', give: 10 },
      { name: 'name', give: 20 },
      { name: 'name', give: 50 },
      { name: 'name', give: 10 },
    ], 
    total: 90,
    remain: 2,
    addressChoosed: false
  },

  getAddress(e) {
    util.auth('scope.address', () => {
      wx.chooseAddress({
        success: (res) => {
          console.log('success')
          console.log(res)
          this.setData({
            addressChoosed: true,
          })
        }, 
        fail: (res) => {
          console.log('fail')
        }
      })
    })
  }, 

  toOrder(e) {
    wx.navigateTo({
      url: '../order/order',
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

 
})