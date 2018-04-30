const wxapi = require('./wxapi.js')

const host = 'https://www.test.com/miniApp/'

const getUrl = (url) => {
  return host + url
}

const throwError = (errMsg) => {
  wx.showToast({
    title: errMsg,
    icon: 'none'
  })
}
/**
 *  method: 'get', 'post',
 *  url: 接口路径
 *  data: 携带数据
 *  id: 接口后带的id号
 */
const request = (method, url, data, id) => {
  if (id) {
    url = url + '/' + id
  }
  url = getUrl(url)
  
  return new Promise((resolve, reject) => {
    wx.request({
      method, 
      url, 
      data, 
      success: (res) => {
        if (res.errCode === 0) {
          resolve(res)
        } else {
          console.error("接口返回错误")
          console.error("具体接口路径: ", url)
          throwError(res.errMsg)
        }
      },
      fail: reject
    })
  })
}

const gets = [
  'getTemplates',        
  'getGifts',            
  'getOrder',
  'getDonateDetail',
  'getOrderDelivered'
]

const posts = [
  'login',
  'updateOrder',
  'sendOrder',
  'doDonate',
  'updateDeliverInfo',
]

const exports = {}

gets.forEach((url) => {
  exports[url] = (data, id) => request('GET', url, data, id)
})

posts.forEach((url) => {
  exports[url] = (data, id) => request('POST', url, data, id)
})

module.exports = exports