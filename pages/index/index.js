const promisify = require('../../utils/promisify.js')
const wxapi = require('../../utils/wxapi.js')
const api = require('../../utils/api.js')

Page({

  data: {
    templates: [1, 1, 1, 1, 1],         // 模版

    inputModal: false,                  // 设置条件模态窗
    selectModal: false,                 // 海报分享模态窗

    current: 0,                         // 当前的轮播模板
    
    conditions: [
      { give: 10, back: '回答一个问题'}, 
      { give: 20, back: '一张自拍'}, 
      { give: 50, back: '唱一首歌'}
    ], 

    gifts: [
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
      { name: 'name', price: '11', image: 'text' },
    ]
  },

  onLoad() {
    wxapi.showLoading({
      title: '加载中',
      mask: true
    })
      .then(_ => Promise.all([api.getTemplates, api.getGifts, api.getOrder]))
      .then(res => {
        this.setData({
          templates: res[0].data,
          gifts: res[1].data,
          order: res[2].order,
        })
      })
      .then(_ => wxapi.closeLoading())
  }, 

  confirmOrder() {
    const order = Object.assign({}, this.data.order)
    const conditions = this.data.conditions
    delete order.QRCodeUrl

    for (let i = 0; i < conditions.length; i++) {
      order['donatePrice' + (index + 1)] = parseFloat(conditions[i].give) * 100
      order['donateReward' + (index + 1)] = conditions[i].back 
    }

    api.updateOrder(order)
  },

  getInput(e) {
    let index = e.currentTarget.dataset.index
    let type = e.currentTarget.dataset.type
    let conditions = this.data.conditions

    conditions[index][type] = e.detail.value
    this.setData({
      conditions,
    })
  },

  chooseGif(e) {
    let order = this.data.order
    let id = e.currentTarget.dataset.id
    order.giftId = id
    this.setData({
      order,
    })
  }, 


  swiperChange(e) {
    this.setData({
      current: e.detail.current
    })
  }, 

  showSelectModal(e) {
    this.setData({
      selectModal: true
    })
  }, 

  showInputModal(e) {
    this.setData({
      inputModal: true
    })
  },

  closeModal(e) {
    this.setData({
      selectModal: false,
      inputModal: false
    })
  }, 

  onShareAppMessage: function () {
    return {
      title: '好喜欢这个礼物，你愿意送给我么'
    }
  }
})