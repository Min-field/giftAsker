const promisify = require('./promisify.js')

const all_api = [
  'request',
  'getUserInfo',
  'login',
  'getSetting',
  'authorize',
  'showLoading',
  'hideLoading'
]

const exports = {

}


for (let i = 0; i < all_api.length; i++) {
  exports[all_api[i]] = promisify(wx[all_api[i]])
}


module.exports = exports 