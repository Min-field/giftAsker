const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/** 
 * 获取用户授权, 回调相应函数
 */
const auth =  (authName, cb) => {
  wx.getSetting({
    success: (res) => {
      if (!res[authName]) {
        wx.authorize({
          scope: authName,
          success: () => {
            cb()
          }
        })
      }
      cb()
    }
  })
}

/**
 *  获取设备信息
 */
const getWindowSize = ctx => {
  let APP = getApp()
  ctx.setData({
    windowWidth: APP.globalData.systemInfo.windowWidth,
    windowHeight: APP.globalData.systemInfo.windowHeight,
  })
}

module.exports = {
  formatTime: formatTime,
  auth, 
  getWindowSize
}
