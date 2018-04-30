const promisify = require('../../utils/promisify.js')
const wxapi = require('../../utils/wxapi.js')
const api = require('../../utils/api.js')
const app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    own: false,
    finished: false,
    details: [
      { name: 'name', give: 10 },
      { name: 'name', give: 10 },
      { name: 'name', give: 20 },
      { name: 'name', give: 50 },
      { name: 'name', give: 10 },
    ],
    conditions: [
      { give: 10, back: '回答一个问题' },
      { give: 20, back: '一张自拍' },
      { give: 50, back: '唱一首歌' }
    ],
    total: 90,
    remain: 2,
    addressChoosed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let orderId = options.orderId 
    let openId = app.globalData.openId

    wxapi.showLoading({
      title: '加载中',
      icon: 'none'
    })
      .then(_ => {
        return api.getDonateDetail({openId, }, orderId)
      })
      .then(res => {
        this.analyse(res.data)
        this.setData({
          order: res.data
        })
      })
  },

  analyse(order) {
    let own = false
    if (order.ownerOpenId === app.globalData.openId) {
      own = true
    }
    this.setData({
      own, 
      finished: order.finished
    })
  }, 

  toIndex(e) {
    console.log(e)
    wx.navigateTo({
      url: '../index/index',
    })
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

  chooseCondition(e) {
    const index = e.currentTarget.dataset.index
    const conditions = this.data.conditions
    if (index === 'total') {

    } else {
      this.setData({
        chooseIndex: index,
        giveMoney: conditions[index].give
      })
    }
  }, 

  showGiveModal(e) {
    this.setData({
      showGive: true
    })
  },

  closeGiveModal(e) {
    this.setData({
      showGive: false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})