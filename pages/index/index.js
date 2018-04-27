
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
      {name: 'hello', price: '11', image: 'text'},
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
      { name: 'hello', price: '11', image: 'text' },
    ]
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