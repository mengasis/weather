const https = require('https')
const config = require('../config/api')

function getCurrentData(latitude = '', longitude = '') {
  const exclude = ['minutely', 'hourly', 'daily', 'flags'].join(',')
  const url = `${config.API_HOST}/${
    config.API_KEY
  }/${latitude},${longitude}?exclude=${exclude}`

  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = []

      const { statusCode } = res

      if (statusCode >= 400 && statusCode <= 500)
        reject(new Error(statusCode), {
          latitude,
          longitude
        })

      res.on('data', d => {
        data.push(d)
      })

      res.on('end', () => resolve(JSON.parse(Buffer.concat(data).toString())))

      res.on('error', reject)
    })
  })
}

module.exports = { getCurrentData }
