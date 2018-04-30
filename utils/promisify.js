
/**
 * 小程序API转为promise
 */
const promisify = (api) => {
  return (options, ...params) => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, options, {success: resolve}, {fail: reject}))
    })
  }
}

module.exports = promisify
