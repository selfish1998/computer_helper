const app = getApp()

const request = (url, options) => {
   return new Promise((resolve, reject) => {
       wx.request({
           url: `${app.globalData.host}${url}`,
           method: options.method,
           data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
           
           success(request) {
               if (request.data.code === 2000) {
                   resolve(request.data)
               } else {
                   reject(request.data)
               }
           },
           fail(error) {
               reject(error.data)
           }
       })
   })
}

const get = (url, options = {}) => {
   return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
   return request(url, { method: 'POST', data: options })
}

module.exports = {
   get,
   post,
}