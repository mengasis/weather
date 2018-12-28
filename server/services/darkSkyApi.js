const https = require('https')
const config = require('../config')

function getData(latitude, longitude) {
  const url = `${config.API_HOST}/${config.API_KEY}s/${latitude},${longitude}`

  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = []

      const { statusCode } = res

      if (statusCode >= 400 && statusCode <= 500)
        reject(
          new Error(
            `How unfortunate! The API Request Failed. Latitude: ${latitude} & Longitude: ${longitude}`
          ),
          {
            latitude,
            longitude
          }
        )

      res.on('data', d => {
        data.push(d)
      })

      res.on('end', () => resolve(Buffer.concat(data)))

      res.on('error', reject)
    })
  })
}

module.exports = { getData }
