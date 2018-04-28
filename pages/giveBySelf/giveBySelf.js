
const util = require('../../utils/util.js')
Page({
  data: {
    name: 'xxx',
    price: '88',
    getByNow: '60',

    showGive: false,  // 打赏模态窗

    conditions: [
      { give: 10, back: '回答一个问题' },
      { give: 20, back: '一张自拍' },
      { give: 50, back: '唱一首歌' }
    ],

    chooseIndex: 0,  // 选择的条件下标
    giveMoney: 10,  // 打赏金额,

    details: [
      { name: 'name', give: 10 }, 
      { name: 'name', give: 10 }, 
      { name: 'name', give: 20 }, 
      { name: 'name', give: 50 }, 
      { name: 'name', give: 10 },  
    ]

  },

  onLoad: function (options) {
    util.getWindowSize(this)
  },

  /**
   * 选择打赏条件
   */
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

  /**
   * 确定支付
   */
  confirm(e) {

  },

  toIndex(e) {
    wx.navigateTo({
      url: '../index/index',
    })
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