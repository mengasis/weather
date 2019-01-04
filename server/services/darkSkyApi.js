const axios = require('axios')
const { API_HOST, API_KEY } = require('../config/api')
const customError = require('../utils/customError')

function getCurrentData(latitude = '', longitude = '') {
  const url = `${API_HOST}/${API_KEY}/${latitude},${longitude}`
  const opts = { url, params: { exclude: ['minutely', 'hourly', 'daily', 'flags'] } }

  return axios(url, opts)
    .then(({ data }) => data)
    .catch(err => {
      const { response = { status: 0 } } = err

      switch (response.status) {
        case 404:
          throw customError.NOT_FOUND

        case 403:
          throw customError.FORBIDDEN

        default:
          throw customError.createError(err)
      }
    })
}

module.exports = { getCurrentData }
