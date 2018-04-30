const api = require('./utils/api.js')
const wxapi = require('./utils/wxapi.js')
App({
  onLaunch: function () {

    /**
     * 上传登录的code以及性别获取opeonId
     */

    let code = null
    wxapi.login()
      .then(res => {
        code = res.code
        return wxapi.getSetting()
      })
      .then(res => {
        if (!res.authSetting['scope.userInfo']) {
          return wxapi.authorize('scope.userInfo')
        } 
      })
      .then(res => {
        return wxapi.getUserInfo()
      })
      .then(res => {
        this.globalData.userInfo = res.userInfo
        console.log(res)
        return api.login({
            code, 
            data: {
              nickName: res.userInfo.nickName,
              gender: res.userInfo.gender
            }
          })
      })
      .then(res => {
        this.globalData.openId = res.openId
      }) 

    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res
      },
    })
    
    
  },
  globalData: {
    userInfo: null,
    systemInfo: null,
    openId: null
  }
})